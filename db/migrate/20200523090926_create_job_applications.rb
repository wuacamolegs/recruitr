class CreateJobApplications < ActiveRecord::Migration[6.0]
  def change
    create_table :job_applications do |t|
      t.references :position, null: false
      t.references :applicant, null: false
      t.integer    :state, default: 0, null: false
      t.jsonb      :score_cards

      t.timestamps null: false
    end
  end
end
