FactoryBot.define do
  factory :hiring_team do
    title { Faker::Game.title }

    trait :with_recruiters do
      transient do
        number { 1 }
      end

      after(:build) do |hiring_team, evaluator|
        create_list(:recruiter, evaluator.number, hiring_team: hiring_team)
      end
    end
  end
end
