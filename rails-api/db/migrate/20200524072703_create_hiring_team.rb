class CreateHiringTeam < ActiveRecord::Migration[6.0]
  def change
    create_table :hiring_teams do |t|
      t.string :title, null: false
      t.timestamps null: false
    end
  end
end
