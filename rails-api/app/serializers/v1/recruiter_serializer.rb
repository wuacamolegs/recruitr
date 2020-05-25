class RecruiterSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :skills

  def full_name
    object.full_name
  end
end
