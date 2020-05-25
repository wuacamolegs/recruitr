module Api
  module V1
    class HiringTeamsController < ApiController
      def index
        render json: HiringTeam.last(10)
      end

      def recruiters
        render json: filter_recruiters.to_json
      end

      private

      def hiring_team
        HiringTeam.find(params[:id])
      end

      def filter_recruiters
        MatchRecruitersQuery.new(params[:id], params[:job_application_id])
                            .order_by_best_match(params[:criteria])
                            .call
      end
    end
  end
end
