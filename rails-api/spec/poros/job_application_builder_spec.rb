require 'rails_helper'

describe JobApplicationBuilder do
  let(:job_application_builder) { described_class }
  let(:build_job_application)   { job_application_builder.build!(params) }
  let(:expected_applicant)      { build(:applicant, skills: skills) }

  let(:applicant_params) do
    {
      'first_name' => expected_applicant.first_name,
      'last_name' => expected_applicant.last_name,
      'email' => expected_applicant.email,
      'skills' => expected_applicant.skills
    }
  end

  let(:params) do
    {
      'applicant' => applicant_params,
      'position_id' => position_id
    }
  end

  describe '#build!' do
    context 'with valid params' do
      let(:position)    { create(:position, :with_hiring_team) }
      let(:position_id) { position.id }
      let(:skills)      { position.skills }

      it 'build job application with correct attributes' do
        job_application = build_job_application
        expect(job_application.state).to            eq('unmatched')
        expect(job_application.applicant.email).to  eq(expected_applicant.email)
        expect(job_application.applicant.skills).to eq(expected_applicant.skills)
        expect(job_application.position_id).to      eq(position.id)
      end
    end

    context 'with empty skills' do
      let(:skills) { [] }

      it 'raise an error' do
        expect { build_job_application }.to raise_error
      end
    end

    context 'with unexisting hiring team' do
      let(:position_id) { 'fake' }
      let(:skills)      { build_list(:skill, 1) }

      it 'raise an error' do
        expect { build_job_application }.to raise_error(ActiveRecord::RecordNotFound)
      end
    end
  end
end
