class PositionSerializer < ActiveModel::Serializer
  attributes  :id, :title, :description, :skills, :state
end
