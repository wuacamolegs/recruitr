module Api
  module V1
    class HiringTeamsController < ApiController
      def index
        render json: { hiring_teams: HiringTeam.last(10) }
      end

      def recruiters
        render json: { recruiters: filter_recruiters }
      end

      private

      def hiring_team
        HiringTeam.find(params[:id])
      end

      def filter_recruiters
        MatchRecruitersQuery.new(params[:id], params[:job_application_id])
                            .criteria(params[:criteria])
                            .limit(params[:limit])
                            .call
      end
    end
  end
end
