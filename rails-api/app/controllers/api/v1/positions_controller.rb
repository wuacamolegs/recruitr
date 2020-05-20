module Api
  module V1
    class PositionsController < ApiController
      def index
        positions = filter_positions
        render json: { positions: positions }
      end

      private

      def filter_positions
        PositionsQuery.new
                      .with_state(params[:state])
                      .with_title(params[:title])
                      .with_skills(params[:skills])
                      .order(params[:order])
                      .limit(10)
                      .call
      end
    end
  end
end
