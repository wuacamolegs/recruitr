class HiringTeam < ApplicationRecord
  has_many :recruiters, dependent: :destroy
  has_many :positions, dependent: :nullify

  validates :title, presence: true
end
