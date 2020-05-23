class AddIndexToJobApplicationState < ActiveRecord::Migration[6.0]
  def change
    add_index :job_applications, :state
  end
end
