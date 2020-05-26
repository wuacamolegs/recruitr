require 'rails_helper'

describe HiringTeam do
  it { is_expected.to validate_presence_of(:title) }
end
