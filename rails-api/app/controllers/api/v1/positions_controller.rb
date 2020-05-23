module Api
  module V1
    class PositionsController < ApiController
      def index
        positions = filter_positions
        render json: serialize_positions(positions)
      end

      def show
        render json: position
      end

      def applications
        render json: { applications: position.job_applications }
      end

      private

      def position
        Position.find(params[:id])
      end

      def filter_positions
        PositionsQuery.new
                      .with_state(params[:state])
                      .with_title(params[:title])
                      .with_skills(params[:skills])
                      .order(params[:order])
                      .limit(10)
                      .call
      end

      # TODO: add pagination
      def serialize_positions(positions)
        serialized_positions = positions.map { |p| PositionSerializer.new(p).as_json }
        { positions: serialized_positions }
      end
    end
  end
end
