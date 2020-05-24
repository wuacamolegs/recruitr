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
        create_list(:position, count, :with_hiring_team)
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
        create(:position, :with_hiring_team, title: title)
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
      let(:skill)  { Faker::Lorem.word }
      let(:skill2) { Faker::Lorem.word }
      let(:skill3) { Faker::Lorem.word }
      let(:hiring_team) { create(:hiring_team) }

      before do
        create(:position, :with_skills, array_skills: [skill, skill2, skill3], hiring_team: hiring_team)
        create(:position, :with_skills, array_skills: [skill, skill3], hiring_team: hiring_team)
        get :index, params: { skills: [skill2] }
      end

      it 'returns success status' do
        expect(response).to have_http_status :ok
      end

      it 'returns positions that has with given skill' do
        expect(response_body['positions'].length).to eq(1)
      end
    end

    context 'when filtering positions by multiple skills' do
      let(:skill)  { Faker::Lorem.word }
      let(:skill2) { Faker::Lorem.word }
      let(:skill3) { Faker::Lorem.word }
      let(:hiring_team) { create(:hiring_team) }

      before do
        create(:position, :with_skills, array_skills: [skill, skill2, skill3], hiring_team: hiring_team)
        create(:position, :with_skills, array_skills: [skill, skill3], hiring_team: hiring_team)
        create(:position, :with_skills, array_skills: [skill2], hiring_team: hiring_team)
        get :index, params: { skills: [skill, skill3] }
      end

      it 'returns success status' do
        expect(response).to have_http_status :ok
      end

      it 'returns only positions that has both skills' do
        expect(response_body['positions'].length).to eq(2)
      end
    end

    context 'when getting closed positions' do
      before do
        create(:position, :with_hiring_team, state: 'closed')
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

  describe 'GET #show' do
    context 'when position does not exist' do
      let(:params) { { id: 'FAKE ' } }

      before do
        get :show, params: params
      end

      it 'returns a not found status code' do
        expect(response).to have_http_status(:not_found)
      end
    end

    context 'when the position exists' do
      let(:position) { create(:position, :with_hiring_team) }
      let(:params)   { { id: position.id } }

      before do
        get :show, params: params
      end

      it 'returns ok status' do
        expect(response).to have_http_status(:ok)
      end

      it 'returns the position' do
        expect(response_body['id']).to           eq(position.id)
        expect(response_body['title']).to        eq(position.title)
        expect(response_body['description']).to  eq(position.description)
        expect(response_body['skills']).to       eq(position.skills)
        expect(response_body['applications']).to eq(0)
      end
    end

    context 'when having applications' do
      let(:position) { create(:position, :with_hiring_team) }
      let(:params)   { { id: position.id } }
      let(:count)    { rand(1..4) }

      before do
        create_list(:job_application, count, position_id: position.id)
        get :show, params: params
      end

      it 'returns the position' do
        expect(response_body['id']).to          eq(position.id)
        expect(response_body['title']).to       eq(position.title)
        expect(response_body['description']).to eq(position.description)
        expect(response_body['skills']).to      eq(position.skills)
      end

      it 'returns number of applications correctly' do
        expect(response_body['applications']).to eq(count)
      end
    end
  end

  describe 'GET #create' do
    let(:expected_position) { build(:position) }
    let(:params) do
      {
        'title' => expected_position.title,
        'description' => expected_position.description,
        'hiring_team_id' => hiring_team_id,
        'skills' => expected_position.skills
      }
    end

    context 'when hiring team doesnt exists' do
      let(:hiring_team_id) { 'fake' }

      before do
        allow(PositionBuilder).to receive(:build!).and_raise(ActiveRecord::RecordNotFound)
        post :create, params: { position: params }
      end

      it 'returns a not found status code' do
        expect(response).to have_http_status(:not_found)
      end
    end

    context 'when the hiring team exists' do
      let(:hiring_team)    { create(:hiring_team, :with_recruiters, number: 1) }
      let(:hiring_team_id) { hiring_team.id }

      before do
        post :create, params: { position: params }
      end

      it 'returns ok status' do
        expect(response).to have_http_status(:created)
      end

      it 'returns the position' do
        expect(response_body['title']).to        eq(expected_position.title)
        expect(response_body['description']).to  eq(expected_position.description)
        expect(response_body['skills']).to       eq(expected_position.skills)
        expect(response_body['applications']).to eq(0)
      end
    end
  end
end
