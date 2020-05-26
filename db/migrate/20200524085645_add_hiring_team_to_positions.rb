class AddHiringTeamToPositions < ActiveRecord::Migration[6.0]
  def change
    add_reference :positions, :hiring_team, foreign_key: true, null: :false
  end
end
