require 'rails_helper'

describe Api::V1::JobApplicationsController do
  describe 'GET #show' do
    before do
      get :show, params: params
    end

    context 'when the job application does not exist' do
      let(:params) { { id: 'FAKE ' } }

      it 'returns a not found status code' do
        expect(response).to have_http_status(:not_found)
      end
    end

    context 'when the profile exists' do
      let(:job_application) { create(:job_application) }
      let(:applicant)       { job_application.applicant }
      let(:position)        { job_application.position }
      let(:params)          { { id: job_application.id } }

      it 'returns ok status' do
        expect(response).to have_http_status(:ok)
      end

      it 'returns the job application' do
        expect(response_body['id']).to eq(job_application.id)
      end

      it 'returns the position' do
        expect(response_body['position']['id']).to    eq(position.id)
        expect(response_body['position']['title']).to eq(position.title)
      end

      it 'returns the applicant' do
        expect(response_body['applicant']['id']).to        eq(applicant.id)
        expect(response_body['applicant']['full_name']).to eq(applicant.full_name)
        expect(response_body['applicant']['email']).to     eq(applicant.email)
      end
    end
  end
end
