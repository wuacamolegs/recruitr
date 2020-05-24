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
        render json: { applications: serialize_job_applications(position.job_applications) }
      end

      def create
        position = PositionBuilder.build!(position_params)
        position.save!
        render json: position, status: :created
      end

      private

      def position_params
        params.require(:position).permit(:title, :description, :hiring_team_id, skills: [:skill, :seniority])
      end

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

      def serialize_job_applications(_job_applications)
        position.job_applications.map { |j| JobApplicationSerializer.new(j).as_json }
      end

      # TODO: add pagination
      def serialize_positions(positions)
        serialized_positions = positions.map { |p| PositionSerializer.new(p).as_json }
        { positions: serialized_positions }
      end
    end
  end
end
