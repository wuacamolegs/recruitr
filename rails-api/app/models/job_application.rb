class JobApplication < ApplicationRecord
  belongs_to :applicant, class_name: 'Applicant', foreign_key: 'applicant_id'
  belongs_to :position, class_name: 'Position', foreign_key: 'position_id'
  belongs_to :recruiter, class_name: 'Recruiter', foreign_key: 'recruiter_id', optional: true
  #after_create :notify_submit_application
  #after_update :notify_match, if: :state_changed?

  validates :applicant, :position, presence: true

  enum state: {
    unmatched: 0,
    matched: 1,
    interviewing: 2,
    closed: 3
  }

  private

  #TODO: uncomment this after configuring smtp server
  # def notify_submit_application
  #   JobApplicationMailer.application_submitted(self).deliver_later
  # end

  # def notify_match
  #   return unless matched?
  #   JobApplicationMailer.notify_matching_to_recruiter(self).deliver_later
  #   JobApplicationMailer.notify_matching_to_applicant(self).deliver_later
  # end
end
