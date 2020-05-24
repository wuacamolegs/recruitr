class AddRecruiterIdToJobApplication < ActiveRecord::Migration[6.0]
  def change
    add_reference :job_applications, :recruiter, foreign_key: true, null: :true
  end
end
