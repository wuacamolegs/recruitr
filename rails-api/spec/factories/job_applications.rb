FactoryBot.define do
  factory :job_application do
    position  { build(:position) }
    applicant { build(:applicant) }
    state     { 'unmatched' }
  end
end
