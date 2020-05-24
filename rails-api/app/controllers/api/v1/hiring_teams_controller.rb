module Api
  module V1
    class HiringTeamsController < ApiController
      def index
        render json: HiringTeam.last(10)
      end

      def recruiters
        render json: hiring_team.recruiters
      end

      private

      def hiring_team
        HiringTeam.find(params[:id])
      end
    end
  end
end
