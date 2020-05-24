class ScoreCard < Dry::Struct
  attribute :dynamism, Types::Coercible::Integer
  attribute :experience, Types::Coercible::Integer
  attribute :interest_in_company, Types::Coercible::Integer
  attribute :interview_notes, Types::String.default('')

  schema do
    required(:dynamism).filled
    required(:experience).filled
    required(:interest_in_company).filled
  end
end
