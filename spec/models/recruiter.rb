require 'rails_helper'

describe Recruiter do
  it { is_expected.to validate_presence_of(:first_name) }
  it { is_expected.to validate_presence_of(:last_name) }
  it { is_expected.to validate_presence_of(:email) }

  context 'validates unique email' do
    subject { build(:recruiter) }
    it { should validate_uniqueness_of(:email) }
  end
end
