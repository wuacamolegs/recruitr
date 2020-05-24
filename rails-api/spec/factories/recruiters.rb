FactoryBot.define do
  factory :recruiter do
    first_name  { Faker::Name.first_name }
    last_name   { Faker::Name.last_name }
    email       { Faker::Internet.email }
    hiring_team { build(:hiring_team) }
  end
end
