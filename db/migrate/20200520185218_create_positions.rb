class CreatePositions < ActiveRecord::Migration[6.0]
  def change
    create_table :positions do |t|
      t.string :title, null: false
      t.jsonb  :description, null: false
      t.jsonb  :skills

      t.timestamps null: false
    end
  end
end
