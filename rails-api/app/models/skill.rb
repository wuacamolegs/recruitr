class Skill < Dry::Struct
  attribute :skill, Types::String.constrained(max_size: 25)
  attribute :seniority, Types::Coercible::Integer.default(10)

  schema do
    required(:skill).filled
    required(:seniority).filled
  end
end
