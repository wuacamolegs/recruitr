class JobApplicationSerializer < ActiveModel::Serializer
  attributes :id, :score_cards, :applicant, :position, :state, :created_at, :recruiter

  has_one :applicant, serializer: ApplicantSerializer

  def position
    { id: object.position.id, title: object.position.title, hiring_team_id: object.position.hiring_team_id }
  end

  def recruiter
    return {} if object.recruiter_id.nil?

    { id: object.recruiter.id, full_name: object.recruiter.full_name }
  end
end
