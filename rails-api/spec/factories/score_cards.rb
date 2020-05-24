FactoryBot.define do
  factory :score_card, class: ScoreCard do
    dynamism            { Faker::Number.between(0, 10) }
    experience          { Faker::Number.between(0, 10) }
    interest_in_company { Faker::Number.between(0, 10) }
    interview_notes     { Faker::Lorem.sentence }

    initialize_with { new(attributes) }
  end
end
