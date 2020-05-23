module Api
  module V1
    class JobApplicationsController < ApiController
      def show
        render json: job_application
      end

      private

      def job_application
        JobApplication.find(params[:id])
      end
    end
  end
end
