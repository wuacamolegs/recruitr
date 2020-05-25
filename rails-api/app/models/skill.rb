class Skill < Dry::Struct
  attribute :skill, Types::String.constrained(max_size: 25)
  attribute :proficiency, Types::Coercible::Integer.default(10)

  schema do
    required(:skill).filled
    required(:proficiency).filled
  end
end
