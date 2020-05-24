class PositionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :skills, :applications, :hiring_team

  def applications
    object.job_applications.count
  end

  def skills
    object.skills.map { |s| s['skill'] }
  end
end
