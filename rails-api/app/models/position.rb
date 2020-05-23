class Position < ApplicationRecord
  has_many :job_applications

  validates :title, :description, :state, presence: true

  enum state: {
    draft: 0,
    open: 1,
    closed: 2
  }
end
