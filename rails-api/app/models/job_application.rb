class JobApplication < ApplicationRecord
  belongs_to :applicant, class_name: 'Applicant'
  belongs_to :position, class_name: 'Position'

  validates :applicant, :position, presence: true

  enum state: {
    unmatched: 0,
    matched: 1,
    interviewing: 2,
    closed: 3
  }
end
