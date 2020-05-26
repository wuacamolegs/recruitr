class CreateRecruiters < ActiveRecord::Migration[6.0]
  def change
    create_table :recruiters do |t|
      t.string  :first_name, null: false
      t.string  :last_name, null: false
      t.string  :email, null: false
      t.jsonb   :skills, null: false
      t.integer :hiring_team_id, null: false

      t.timestamps null: false
    end
    add_index :recruiters, :email, unique: true
  end
end
