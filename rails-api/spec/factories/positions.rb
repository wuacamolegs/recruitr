FactoryBot.define do
  factory :position do
    title       { Faker::Job.title }
    description { Faker::Lorem.paragraph }
    skills      { build_list(:skill, Random.rand(1..5)) }
    state       { 'open' }

    trait :with_hiring_team do
      hiring_team { build(:hiring_team, :with_recruiters, number: 1) }
    end

    trait :with_skills do
      transient do
        array_skills { [] }
      end

      after(:build) do |position, evaluator|
        skills = evaluator.array_skills.map do |skill|
          build(:skill, skill: skill)
        end
        position.skills = skills
      end
    end
  end
end
