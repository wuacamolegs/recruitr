module Api
  module V1
    class RecruitersController < ApiController
      def index
        render json: { recruiters: serialized_recruiters }
      end

      private

      def serialized_recruiters
        Recruiter.all.limit(50).map { |r| RecruiterSerializer.new(r).as_json }
      end
    end
  end
end
