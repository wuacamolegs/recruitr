class ApplicantSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :linkedin, :angelist, :skills

  def full_name
    object.full_name
  end
end
