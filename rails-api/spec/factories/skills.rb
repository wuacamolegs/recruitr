FactoryBot.define do
  factory :skill, class: Skill do
    skill     { Faker::Job.key_skills }
    proficiency { Faker::Number.between(1, 10) }

    initialize_with { new(attributes) }
    skip_create
  end
end
