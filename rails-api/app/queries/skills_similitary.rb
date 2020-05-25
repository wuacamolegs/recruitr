module SkillsSimilitary
  def calculate_skills_similitary(position_skills, recruiter_skills)
    required_skills = position_skills.map{|x| x['skill']}

    # { skill1: {position_proficiency: 10, recruiter_proficiency: 8} }
    skills_proficiency = skills_proficiency(position_skills, recruiter_skills, required_skills)
    #calculate cosine similarity
    cosine_similarity(skills_proficiency.map{|k, v| v[:position]}, skills_proficiency.map{|k, v| v[:recruiter]})
  end

  def skills_proficiency(position_skills, recruiter_skills, required_skills)
    skills_counters = initialize_hash_skills(required_skills)
    #count position skills proficiency
    skills_counters = count_skills_proficiency(position_skills, skills_counters, required_skills, :position)
    #count recruiter skills proficiency
    skills_counters = count_skills_proficiency(recruiter_skills, skills_counters, required_skills, :recruiter)

    skills_counters
  end

  def initialize_hash_skills(required_skills)
    required_skills.each_with_object({}) do |skill, hash_skills|
      hash_skills[skill] = { position: 0, recruiter: 0 }
    end
  end

  def count_skills_proficiency(skills, skills_counters,required_skills, key)
    skills.each do |s|
      next unless required_skills.include?(s['skill'])

      skills_counters[s['skill']][key] = s['proficiency']
    end
    skills_counters
  end

  def cosine_similarity(vector1, vector2)
    dot = 0
    denom_a = 0
    denom_b = 0
    vector1.zip(vector2).each do |v1, v2|
      dot += v1 * v2
      denom_a += v1**2
      denom_b += v2**2
    end

    return 0 if denom_b.zero? || denom_a.zero?
    return dot / (Math.sqrt(denom_a) * Math.sqrt(denom_b)) ;
  end

  def euclidean_similarity(vector1, vector2)
    sum = 0
    vector1.zip(vector2).each do |v1, v2|
      component =  (v1 - v2)**2
      sum += component
    end
    return 1 / (1 + Math.sqrt(sum))
  end
end
