class ApplicantSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email

  def full_name
    object.full_name
  end
  end
