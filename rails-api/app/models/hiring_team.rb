class HiringTeam < ApplicationRecord
  has_many :recruiters
  has_many :positions

  validates :title, presence: true
end
