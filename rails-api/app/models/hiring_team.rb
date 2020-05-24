class HiringTeam < ApplicationRecord
  has_many :recruiters

  validates :title, presence: true
end
