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

    context 'when the job application exists' do
      let(:position)        { create(:position, :with_hiring_team) }
      let(:applicant)       { create(:applicant) }
      let(:job_application) do
        create(:job_application,
               position: position,
               applicant: applicant)
      end
      let(:params) { { id: job_application.id } }

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

  describe 'GET #create' do
    let(:expected_applicant) { build(:applicant) }
    let(:applicant) do
      {
        'first_name' => expected_applicant.first_name,
        'last_name' => expected_applicant.last_name,
        'email' => expected_applicant.email,
        'skills' => expected_applicant.skills
      }
    end

    let(:params) do
      {
        applicant: applicant,
        position_id: position_id
      }
    end

    context 'when position doesnt exists' do
      let(:position_id) { 'fake' }

      before do
        allow(JobApplicationBuilder).to receive(:build!).and_raise(ActiveRecord::RecordNotFound)
        post :create, params: { job_application: params }
      end

      it 'returns a not found status code' do
        expect(response).to have_http_status(:not_found)
      end
    end

    context 'when the position exists' do
      let(:position) { create(:position, :with_hiring_team) }
      let(:position_id) { position.id }

      before do
        post :create, params: { job_application: params }
      end

      it 'returns created status' do
        expect(response).to have_http_status(:created)
      end

      it 'returns job application correctly' do
        expect(response_body['state']).to eq('unmatched')
      end

      it 'returns applicant attrs correctly' do
        applicant = response_body['applicant']
        expect(applicant['full_name']).to eq(expected_applicant.full_name)
        expect(applicant['email']).to eq(expected_applicant.email)
        expect(applicant['skills']).to eq(expected_applicant.skills)
      end

      it 'returns position attrs correctly' do
        expect(response_body['position']['id']).to eq(position.id)
        expect(response_body['position']['title']).to eq(position.title)
      end
    end
  end

  describe 'GET #update' do
    let(:position)        { create(:position, :with_hiring_team) }
    let(:applicant)       { create(:applicant) }
    let(:job_application) do
      create(:job_application,
             position: position,
             applicant: applicant)
    end
    let(:params) do
      {
        recruiter_id: recruiter_id,
        id: job_application.id
      }
    end

    context 'when recruiter doesnt exists' do
      let(:recruiter_id) { 'fake' }

      before do
        put :update, params: params
      end

      it 'returns a not found status code' do
        expect(response).to have_http_status(:not_found)
      end
    end

    context 'when the recruiter exists' do
      let(:recruiter)       { create(:recruiter) }
      let(:recruiter_id)    { recruiter.id }

      before do
        put :update, params: params
      end

      it 'returns created status' do
        expect(response).to have_http_status(:ok)
      end

      it 'changes job application state' do
        expect(response_body['state']).to eq('matched')
      end

      it 'returns applicant attrs correctly' do
        expect(response_body['applicant']['full_name']).to eq(applicant.full_name)
        expect(response_body['applicant']['email']).to     eq(applicant.email)
        expect(response_body['applicant']['skills']).to    eq(applicant.skills)
      end

      it 'returns position attrs correctly' do
        expect(response_body['position']['id']).to    eq(position.id)
        expect(response_body['position']['title']).to eq(position.title)
      end

      it 'returns recruiter attrs correctly' do
        expect(response_body['recruiter']['id']).to eq(recruiter.id)
        expect(response_body['recruiter']['full_name']).to eq(recruiter.full_name)
      end
    end
  end
end
