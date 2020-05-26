FactoryBot.define do
  factory :applicant do
    first_name { Faker::Name.first_name }
    last_name  { Faker::Name.last_name }
    email      { Faker::Internet.email }
    skills     { build_list(:skill, Random.rand(1..5)) }

    trait :with_skills do
      transient do
        array_skills { [] }
      end

      after(:build) do |applicant, evaluator|
        skills = evaluator.array_skills.map do |skill|
          build(:skill, skill: skill)
        end
        applicant.skills = skills
      end
    end
  end
end
