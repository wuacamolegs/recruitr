module Api
  module V1
    class ApiController < ApplicationController
      rescue_from ActiveRecord::RecordNotFound, with: :not_found
      rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

      private

      def invalid_record(error)
        render json: { errors: error.record.errors.messages.as_json }, status: :bad_request
      end

      def not_found
        render json: { errors: 'Object not found' }, status: :not_found
      end
    end
  end
end
