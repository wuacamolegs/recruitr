Position.create!([
  {title: "Backend Developer", description: "Help our company enter our scaling phase. Build with the future in mind. Have an impact on the team's technical decisions. Work on, and really own, a part of the company's infrastructure. Be proactive.", skills: [{"skill"=>"Ruby", "proficiency"=>10}, {"skill"=>"Capistrano", "proficiency"=>10}, {"skill"=>"PHP", "proficiency"=>10}], state: "draft", hiring_team_id: 2},
  {title: "FrontEnd Developer", description: "Help our company enter our scaling phase. Build with the future in mind. Have an impact on the team's technical decisions. Work on, and really own, a part of the company's infrastructure. Be proactive.", skills: [{"skill"=>"Backbone", "proficiency"=>10}, {"skill"=>"HAML", "proficiency"=>10}, {"skill"=>"Angular 2+", "proficiency"=>10}], state: "draft", hiring_team_id: 1}
])
Recruiter.create!([
  {first_name: "Johnston", last_name: "Satterfield", email: "garryprosacco@bednar.name", skills: [{"skill"=>"LESS", "proficiency"=>7}, {"skill"=>"SCSS", "proficiency"=>9}], hiring_team_id: 1},
  {first_name: "Reichel", last_name: "Schmitt", email: "rhea@jaskolski.com", skills: [{"skill"=>"ES6/ES2015", "proficiency"=>5}, {"skill"=>"Backbone", "proficiency"=>9}, {"skill"=>"HAML", "proficiency"=>9}, {"skill"=>"RxJS", "proficiency"=>8}, {"skill"=>"Redux", "proficiency"=>10}], hiring_team_id: 1},
  {first_name: "Marquardt", last_name: "Beatty", email: "madelyn@ferrysatterfield.com", skills: [{"skill"=>"CoffeeScript", "proficiency"=>6}, {"skill"=>"SCSS", "proficiency"=>9}, {"skill"=>"HAML", "proficiency"=>7}, {"skill"=>"LESS", "proficiency"=>10}], hiring_team_id: 1},
  {first_name: "Treutel", last_name: "Beer", email: "hunglangworth@swift.co", skills: [{"skill"=>"CoffeeScript", "proficiency"=>7}], hiring_team_id: 1},
  {first_name: "Rutherford", last_name: "Kunze", email: "shelbyritchie@walsh.org", skills: [{"skill"=>"Firebase", "proficiency"=>7}], hiring_team_id: 1},
  {first_name: "Dibbert", last_name: "Pfeffer", email: "kenmraz@damore.info", skills: [{"skill"=>"GraphQL", "proficiency"=>6}, {"skill"=>"ES6/ES2015", "proficiency"=>9}, {"skill"=>"Backbone", "proficiency"=>7}, {"skill"=>"Angular 2+", "proficiency"=>10}, {"skill"=>"Angular 2+", "proficiency"=>10}], hiring_team_id: 1},
  {first_name: "VonRueden", last_name: "Schumm", email: "concettaheathcote@rolfsonschinner.com", skills: [{"skill"=>"Bootstrap", "proficiency"=>8}, {"skill"=>"ES6/ES2015", "proficiency"=>7}, {"skill"=>"JSX", "proficiency"=>8}, {"skill"=>"AngularJS", "proficiency"=>8}, {"skill"=>"jQuery UI", "proficiency"=>6}], hiring_team_id: 1},
  {first_name: "Hand", last_name: "Greenfelder", email: "laurinda@lueilwitzorn.net", skills: [{"skill"=>"Ruby", "proficiency"=>5}, {"skill"=>"Capistrano", "proficiency"=>9}], hiring_team_id: 2},
  {first_name: "Collins", last_name: "Durgan", email: "osvaldo@wehnerchamplin.net", skills: [{"skill"=>"Perl", "proficiency"=>8}, {"skill"=>"Java", "proficiency"=>7}, {"skill"=>"PHP", "proficiency"=>5}], hiring_team_id: 2},
  {first_name: "Schaefer", last_name: "Monahan", email: "jayegoodwin@macgyver.net", skills: [{"skill"=>"Sinatra", "proficiency"=>8}, {"skill"=>"R language", "proficiency"=>10}], hiring_team_id: 2},
  {first_name: "D'Amore", last_name: "Gusikowski", email: "kendra@ebert.net", skills: [{"skill"=>"SOAP", "proficiency"=>10}, {"skill"=>"PHP", "proficiency"=>7}], hiring_team_id: 2},
  {first_name: "Wilderman", last_name: "Schroeder", email: "wynonamuller@wisozk.co", skills: [{"skill"=>"ActiveMQ", "proficiency"=>5}, {"skill"=>".NET Core", "proficiency"=>7}], hiring_team_id: 2}
])
JobApplication.create!([
  {position_id: 2, applicant_id: 3, state: "unmatched", score_cards: nil, recruiter_id: nil},
  {position_id: 2, applicant_id: 4, state: "matched", score_cards: [{"dynamism"=>"10", "experience"=>"8", "interview_notes"=>" Is available to start as soon as possible", "interest_in_company"=>"10"}], recruiter_id: 8},
  {position_id: 1, applicant_id: 2, state: "unmatched", score_cards: nil, recruiter_id: nil}
])
HiringTeam.create!([
  {title: "Backend Team"},
  {title: "Front Team"}
])
Applicant.create!([
  {first_name: "Priscila", last_name: "Schimmel", email: "priscila.schimmel@gmail.com", linkedin: "Priscila Schimmel", angelist: "Priscila Schimmel", skills: [{"skill"=>"Backbone", "proficiency"=>10}, {"skill"=>" HAML", "proficiency"=>10}, {"skill"=>" Angular", "proficiency"=>10}]},
  {first_name: "Brendon", last_name: "Dickens", email: "brendon.dickens@hotmail.com", linkedin: "B. Dickens", angelist: "B. Dickens", skills: [{"skill"=>"Ruby", "proficiency"=>10}, {"skill"=>"Capistrano", "proficiency"=>10}]},
  {first_name: "Margarett", last_name: "Ferry", email: "m.ferry@gmail.com", linkedin: "Margarett F", angelist: "Margarett F", skills: [{"skill"=>"Ruby", "proficiency"=>10}, {"skill"=>"Capistrano", "proficiency"=>10}, {"skill"=>"PHP", "proficiency"=>10}]}
])
