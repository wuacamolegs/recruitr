module V1
  class PositionSerializer < ActiveModel::Serializer
    attributes :id, :title, :description, :skills
  end
end
