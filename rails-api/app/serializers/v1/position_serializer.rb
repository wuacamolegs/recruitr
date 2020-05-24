class PositionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :skills, :applications

  def applications
    object.job_applications.count
  end
end
