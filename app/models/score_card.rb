class ScoreCard < Dry::Struct
  attribute :dynamism, Types::Coercible::Integer.default(0)
  attribute :experience, Types::Coercible::Integer.default(0)
  attribute :interest_in_company, Types::Coercible::Integer.default(0)
  attribute :interview_notes, Types::String.default('')
end
