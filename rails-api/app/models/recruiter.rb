class Recruiter < ApplicationRecord
  belongs_to :hiring_team
  has_many :job_applications

  validates :first_name, :last_name, presence: true
  validates :email, presence: true, uniqueness: true

  def full_name
    "#{first_name} #{last_name}"
  end
end
