require 'rails_helper'

describe Api::V1::HiringTeamsController do
  describe 'GET #index' do
    context 'when empty hiring teams' do
      before do
        get :index
      end

      it 'returns an empty array' do
        expect(response_body['hiring_teams']).to eq([])
      end

      it 'returns ok status' do
        expect(response).to have_http_status(:ok)
      end
    end

    context 'when getting hiring teams' do
      let(:count) { rand(1..5) }

      before do
        create_list(:hiring_team, count)
        get :index
      end

      it 'returns success status' do
        expect(response).to have_http_status :ok
      end

      it 'returns all hiring teams' do
        expect(response_body['hiring_teams'].length).to eq(count)
      end
    end
  end

  describe 'GET #recruiters' do
    let(:hiring_team)    { create(:hiring_team, :with_recruiters, number: 3) }
    let(:hiring_team_id) { hiring_team.id }
    let(:criteria)       { 'random' }
    let(:params) do
      {
        id: hiring_team_id,
        criteria: criteria,
        job_application_id: job_application_id
      }
    end
    before do
      get :recruiters, params: params
    end

    context 'when the hiring team does not exist' do
      let(:hiring_team_id)     { 'FAKE' }
      let(:job_application_id) { '' }

      it 'returns a not found status code' do
        expect(response).to have_http_status(:not_found)
      end
    end

    context 'when the hiring team exists' do
      let(:job_application)    { create(:job_application) }
      let(:job_application_id) { job_application.id }
      let(:recruiters)         { hiring_team.recruiters }

      it 'returns ok status' do
        expect(response).to have_http_status(:ok)
      end

      it 'returns the recruiters' do
        expect(response_body['recruiters'].size).to eq(recruiters.count)
      end

      context 'when filtering positions by random criteria' do
        let(:criteria) { 'random' }

        it 'returns matching_score' do
          expect(response_body['recruiters'].first['matching_score']).to be_present
        end
      end

      context 'when filtering positions by skills criteria' do
        let(:criteria) { 'skills' }

        it 'sets score match correctly' do
          expect(response_body['recruiters'].first['matching_score']).to be_present
        end
      end

      context 'when filtering positions by seniority criteria' do
        let(:criteria) { 'seniority' }

        it 'sets score match correctly' do
          expect(response_body['recruiters'].first['matching_score']).to be_present
        end
      end
    end
  end
end
