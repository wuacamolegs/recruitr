class JobApplicationBuilder
  attr_reader :params, :job_application

  POSITION = 'position_id'.freeze
  APPLICANT = 'applicant'.freeze

  def self.build!(params)
    builder = new(params)
    builder.set_applicant
    builder.set_position
    builder.job_application
  end

  def initialize(params)
    @job_application = JobApplication.new
    @params = params
  end

  def set_applicant
    job_application.applicant = ApplicantBuilder.build!(params[APPLICANT])
  end

  def set_position
    job_application.position = Position.find(params[POSITION])
  end
end
