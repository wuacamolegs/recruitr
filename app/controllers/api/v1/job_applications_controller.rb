module Api
  module V1
    class JobApplicationsController < ApiController
      def show
        render json: job_application
      end

      def create
        application = JobApplicationBuilder.build!(job_application_params)
        application.save!
        render json: application, status: :created
      end

      def update
        job_application.update!(job_application_params)
        render json: job_application
      end

      # PUT recruiter, set recruiter
      def recruiter
        recruiter = Recruiter.find(params[:recruiter_id])
        job_application.update!(recruiter_id: recruiter.id)
        job_application.matched!
        render json: job_application
      end

      private

      def job_application
        JobApplication.find(params[:id])
      end

      def job_application_params
        params.require(:job_application).permit(:position_id, score_cards: %i[dynamism experience interest_in_company interview_notes], applicant: applicant_params)
      end

      def applicant_params
        [:first_name, :last_name, :email, :linkedin, :angelist, skills: %i[skill proficiency]]
      end
    end
  end
end
