FactoryBot.define do
  factory :job_application do
    position  { build(:position) }
    applicant { build(:applicant) }
    state     { 'unmatched' }

    trait :matched do
      transient do
        recruiter { build(:recruiter) }
      end

      after(:build) do |job_application, evaluator|
        job_application.state = 'matched'
        job_application.recruiter = evaluator.recruiter
      end
    end

    trait :interviewing do
      after(:build) do |job_application, _evaluator|
        job_application.state =       'interviewing'
        job_application.score_notes = build_list(:score_notes, Random.rand(0..3))
        job_application.recruiter =   build(:recruiter)
      end
    end

    trait :closed do
      after(:build) do |job_application, _evaluator|
        job_application.state =       'closed'
        job_application.score_notes = build_list(:score_notes, Random.rand(0..3))
        job_application.recruiter =   build(:recruiter)
      end
    end
  end
end
