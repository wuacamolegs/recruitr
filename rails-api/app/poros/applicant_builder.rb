class ApplicantBuilder
  attr_reader :params, :applicant

  SKILLS = 'skills'.freeze

  def self.build!(params)
    builder = new(params)
    builder.set_applicant
    builder.set_skills
    builder.applicant
  end

  def initialize(params)
    @applicant = Applicant.new
    @params = params
  end

  def set_applicant
    applicant.first_name = params['first_name']
    applicant.last_name =  params['last_name']
    applicant.email =      params['email']
    applicant.linkedin =   params['linkedin']
    applicant.angelist =   params['angelist']
  end

  def set_skills
    raise 'undefined skills' if params[SKILLS].blank?

    applicant.skills = params[SKILLS].map do |skill|
      Skill.new(skill: skill['skill'], proficiency: skill['proficiency']&.to_i)
    end
  end
end
