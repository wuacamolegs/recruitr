FactoryBot.define do
  factory :recruiter do
    first_name  { Faker::Name.first_name }
    last_name   { Faker::Name.last_name }
    email       { Faker::Internet.email }
    skills      { build_list(:skill, Random.rand(1..10)) }
    hiring_team { build(:hiring_team) }
  end
end
