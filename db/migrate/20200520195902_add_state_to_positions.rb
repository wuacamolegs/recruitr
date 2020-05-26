class AddStateToPositions < ActiveRecord::Migration[6.0]
  def change
    add_column :positions, :state, :integer, default: 0, null: false
  end
end
