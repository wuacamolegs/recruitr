class JobApplicationSerializer < ActiveModel::Serializer
  attributes :id, :score_cards, :applicant, :position, :state

  has_one :applicant, serializer: ApplicantSerializer

  def position
    { id: object.position.id, title: object.position.title }
  end
end
