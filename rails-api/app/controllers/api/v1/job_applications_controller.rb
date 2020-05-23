module Api
  module V1
    class JobApplicationsController < ApiController
      def show
        render json: ::V1::JobApplicationSerializer.new(job_application).as_json
      end

      private

      def job_application
        JobApplication.find(params[:id])
      end
    end
  end
end
