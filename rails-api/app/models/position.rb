class Position < ApplicationRecord
  scope :open,   -> { where(state: states[:open]) }
  scope :closed, -> { where(state: states[:closed]) }

  validates :title, :description, :state, presence: true

  enum state: {
    draft: 0,
    open: 1,
    closed: 2
  }
end
