class JobApplicationMailer < ApplicationMailer
  def matching_to_applicant(job_application)
    @applicant = job_application.applicant
    @recruiter = job_application.recruiter
    @position = job_application.position
    mail(to: applicant.email, subject: "You matched with Drawbotics!")
  end

  def matching_to_recruiter(job_application)
    @applicant = job_application.applicant
    @recruiter = job_application.recruiter
    @position = job_application.position
    mail(to: recruiter.email, subject: "You matched a new candidate!")
  end

  def application_submited(job_application)
    @position = job_application
    @applicant = job_application.applicant
    mail(to: applicant.email, subject: "Application to #{position.title} successfully submitted")
  end
end
