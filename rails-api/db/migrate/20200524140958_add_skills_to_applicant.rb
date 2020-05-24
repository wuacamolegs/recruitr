class AddSkillsToApplicant < ActiveRecord::Migration[6.0]
  def change
    add_column :applicants, :skills, :jsonb, null: :false
  end
end
