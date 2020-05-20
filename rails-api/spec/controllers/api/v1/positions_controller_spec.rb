require 'rails_helper'

describe Api::V1::PositionsController do
  describe 'GET #index' do
    context 'when empty positions' do
      before do
        get :index
      end

      it 'returns an empty array' do
        expect(response_body['positions']).to eq([])
      end

      it 'returns ok status' do
        expect(response).to have_http_status(:ok)
      end
    end

    context 'when getting positions' do
      let(:count) { rand(1..5) }

      before do
        create_list(:position, count)
        get :index, params: {}
      end

      it 'returns success status' do
        expect(response).to have_http_status :ok
      end

      it 'returns all positions' do
        expect(response_body['positions'].length).to eq(count)
      end
    end

    context 'when filtering positions by title' do
      let(:title) { Faker::Job.title }

      before do
        create(:position, title: title)
        get :index, params: { title: title }
      end

      it 'returns success status' do
        expect(response).to have_http_status :ok
      end

      it 'returns positions that starts with given title' do
        expect(response_body['positions'].length).to eq(1)
      end
    end

    context 'when filtering positions by skill' do
      let(:skill) { Faker::Lorem.word }

      before do
        create(:position, skills: [skill])
        get :index, params: { skills: [skill] }
      end

      it 'returns success status' do
        expect(response).to have_http_status :ok
      end

      it 'returns positions that starts with given title' do
        expect(response_body['positions'].length).to eq(1)
      end
    end

    context 'when filtering positions by multiple skills' do
      let(:skill)  { Faker::Lorem.word }
      let(:skill2) { Faker::Lorem.word }
      let(:skill3) { Faker::Lorem.word }

      before do
        create(:position, skills: [skill, skill2, skill3])
        create(:position, skills: [skill, skill3])
        get :index, params: { skills: [skill, skill2] }
      end

      it 'returns success status' do
        expect(response).to have_http_status :ok
      end

      it 'returns only positions that has both skills' do
        expect(response_body['positions'].length).to eq(1)
      end
    end

    context 'when getting closed positions' do
      before do
        create(:position, state: 'closed')
        get :index, params: { state: 'closed' }
      end

      it 'returns success status' do
        expect(response).to have_http_status :ok
      end

      it 'returns closed positions' do
        expect(response_body['positions'].length).to eq(1)
      end
    end
  end
end
