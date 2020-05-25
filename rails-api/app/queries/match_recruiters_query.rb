require_relative './skills_similitary'
class MatchRecruitersQuery
  include SkillsSimilitary
  attr_reader :recruiters, :job_application

  def initialize(hiring_team_id, job_application_id)
    @recruiters = Recruiter.where(hiring_team_id: hiring_team_id)
    @job_application = JobApplication.find(job_application_id)
  end

  def order_by_best_match(criteria)
    case criteria
    when 'skills'
      @recruiters = recruiters.map{|r| basic_params(r).merge( match_score: calculate_skills_similitary(job_application.position.skills, r.skills)) }.sort{|r| r[:match_score] }.reverse!
    when 'seniority'
      @recruiters = recruiters.map{|r| basic_params(r).merge( match_score: r.skills.count)}.sort{|r| r[:match_score] }.reverse!
    else #random
      @recruiters = recruiters.map{|r| basic_params(r).merge( match_score: (1..999).to_a.sample(50).first) }.sort{|r| r[:match_score] }.reverse!
    end
    self

  end

  def limit(limit)
    @recruiters = recruiters.take(limit) if limit.present?
    self
  end

  def call
    @recruiters
  end

  private

  def basic_params(recruiter)
   { id: recruiter.id, full_name: recruiter.full_name }
  end
end
