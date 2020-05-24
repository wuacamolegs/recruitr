class PositionBuilder
  attr_reader :params, :position

  TITLE =       'title'.freeze
  DESCRIPTION = 'description'.freeze
  SKILLS =      'skills'.freeze
  HIRING_TEAM = 'hiring_team_id'.freeze

  def self.build!(params)
    builder = new(params)
    builder.set_position
    builder.set_skills
    builder.set_hiring_team
    builder.position
  end

  def initialize(params)
    @position = Position.new
    @params = params
  end

  def set_position
    position.title = params[TITLE]
    position.description = params[DESCRIPTION]
  end

  def set_skills
    raise 'undefined skills' if params[SKILLS].blank?

    position.skills = params[SKILLS].map do |skill|
     Skill.new(skill: skill['skill'], seniority: skill['seniority']&.to_i)
   end
  end

  def set_hiring_team
    hiring_team = HiringTeam.find(params[HIRING_TEAM])
    position.hiring_team = hiring_team
  end
end
