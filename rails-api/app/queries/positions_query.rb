class PositionsQuery
  attr_reader :positions

  def initialize
    @positions = Position.all
  end

  def with_title(title)
    @positions = positions.where('title ~* ?', title) if title.present?
    self
  end

  def with_state(state)
    @positions = positions.where(state: state) if state.present?
    self
  end

  def with_skills(skills)
    @positions = positions.where('skills ?& array[:skills]', skills: skills) if skills.present?
    self
  end

  def order(order_str)
    @positions = positions.order('positions.' + order_str) if order_str.present?
    self
  end

  def limit(limit)
    @positions = positions.last(limit) if limit.present?
    self
  end

  def call
    @positions
  end
end
