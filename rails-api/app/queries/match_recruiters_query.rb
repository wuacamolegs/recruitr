require_relative './skills_similitary'
class MatchRecruitersQuery
  include SkillsSimilitary
  MATCHING_SCORE_CRITERIAS = %w[skills seniority].freeze
  attr_reader :recruiters, :job_application, :criteria, :position_skills

  def initialize(hiring_team_id, job_application_id)
    @recruiters = Recruiter.where(hiring_team_id: hiring_team_id)
    @job_application = JobApplication.find(job_application_id)
    @position_skills = job_application.position.skills
    @criteria = 'random'
  end

  def with_criteria(criteria)
    @criteria = criteria if MATCHING_SCORE_CRITERIAS.include?(criteria)
    self
  end

  def limit(limit)
    @recruiters = recruiters.limit(limit) if limit.present?
    self
  end

  def call
    @recruiters = recruiters.map { |r| basic_params(r).merge(matching_score: calculate_matching_score(r)) }
    @recruiters
  end

  private

  def calculate_matching_score(recruiter)
    send("calculate_matching_score_by_#{@criteria}", recruiter)
  end

  def calculate_matching_score_by_skills(recruiter)
    calculate_skills_similitary(position_skills, recruiter.skills)
  end

  def calculate_matching_score_by_seniority(recruiter)
    recruiter.skills.sum { |skill| skill['proficiency'] }
  end

  def calculate_matching_score_by_random(_recruiter)
    (1..999).to_a.sample(50).first
  end

  def basic_params(recruiter)
    { id: recruiter.id, full_name: recruiter.full_name }
  end
end
