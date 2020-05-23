module V1
  class JobApplicationSerializer < ActiveModel::Serializer
    attributes :id, :position, :applicant

    has_one :applicant, serializer: ApplicantSerializer

    def position
      { id: object.position.id, title: object.position.title }
    end
  end
end
