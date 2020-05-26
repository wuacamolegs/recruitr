class RecruiterSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :skills, :team

  def full_name
    object.full_name
  end

  def team
    object.hiring_team.title
  end
end
