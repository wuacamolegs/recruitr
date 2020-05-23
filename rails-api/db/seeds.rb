# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

1.times do
 Position.create(title: Faker::Job.title,
                  description: Faker::Lorem.paragraph,
                  skills:  Random.rand(1..5).times.with_object([]){ |i,skills| skills <<  Faker::Job.key_skills },
                  state: 'open')
end

10.times.with_object([]) do |i, positions|
  positions[i] = {
    title: Faker::Job.title,
    description: Faker::Lorem.paragraph,
    skills:  Random.rand(1..5).times.with_object([]){ |i,skills| skills <<  Faker::Job.key_skills },
    state: 'open'
  }
end


positions_params = [{:title=>"Chief Manager", :description=>"Quia vel est. Amet fuga qui. Voluptatibus eum sed.", :skills=>["Organisation", "Proactive", "Technical savvy"], :state=>"open"}, {:title=>"National Manufacturing Producer", :description=>"A dolorem autem. Nam et error. Eius tempore dolorem.", :skills=>["Networking skills", "Networking skills", "Communication"], :state=>"open"}, {:title=>"Customer Marketing Producer", :description=>"Sequi pariatur atque. Et qui sit. Cumque ipsa officia.", :skills=>["Self-motivated"], :state=>"open"}, {:title=>"Central Marketing Officer", :description=>"Exercitationem dicta velit. Laborum aut tempore. Asperiores dolores consectetur.", :skills=>["Networking skills", "Teamwork", "Technical savvy", "Fast learner", "Leadership"], :state=>"open"}, {:title=>"Internal IT Supervisor", :description=>"Laudantium delectus magnam. Sed quisquam est. A rem quaerat.", :skills=>["Technical savvy", "Work under pressure", "Communication", "Technical savvy"], :state=>"open"}, {:title=>"Accounting Engineer", :description=>"Est saepe provident. Ducimus quam ad. Voluptates incidunt ullam.", :skills=>["Teamwork", "Self-motivated", "Confidence", "Networking skills", "Leadership"], :state=>"open"}, {:title=>"Regional Construction Representative", :description=>"Nobis itaque ipsam. Voluptatibus soluta et. Ad totam labore.", :skills=>["Fast learner", "Teamwork", "Proactive", "Communication", "Networking skills"], :state=>"open"}, {:title=>"Corporate Technology Executive", :description=>"Labore eveniet sint. Magni non ut. Omnis quaerat ipsam.", :skills=>["Networking skills"], :state=>"open"}, {:title=>"Senior Community-Services Associate", :description=>"Reiciendis veritatis possimus. Quis facilis blanditiis. Quos veritatis sint.", :skills=>["Networking skills", "Confidence", "Communication", "Technical savvy", "Communication"], :state=>"open"}, {:title=>"Principal Orchestrator", :description=>"Consequatur impedit qui. Suscipit ut qui. Occaecati inventore quia.", :skills=>["Teamwork", "Proactive"], :state=>"open"}]

positions_params.each do |position_params|
  Position.create!(title: position_params[:title],
                   description: position_params[:description],
                   skills:   position_params[:skills],
                   state: 'open')
end
