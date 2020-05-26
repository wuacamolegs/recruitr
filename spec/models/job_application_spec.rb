require 'rails_helper'

describe JobApplication do
  it { is_expected.to validate_presence_of(:applicant) }
  it { is_expected.to validate_presence_of(:position) }
end
