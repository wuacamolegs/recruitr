class AddUniqueIndexToApplicantsEmail < ActiveRecord::Migration[6.0]
  def change
    add_index :applicants, :email, unique: true
  end
end
