FactoryBot.define do
  factory :position do
    title       { Faker::Job.title }
    description { Faker::Lorem.paragraph }
    skills      { build_list(:skill, Random.rand(1..5)) }
    state       { 'open' }
  end
end
