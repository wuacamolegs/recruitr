require 'rails_helper'

describe ApplicantBuilder do
  let(:applicant_builder)  { described_class }
  let(:build_applicant)    { applicant_builder.build!(params) }
  let(:expected_applicant) { build(:applicant) }

  let(:params) do
    {
      'first_name' => expected_applicant.first_name,
      'last_name' => expected_applicant.last_name,
      'email' => expected_applicant.email,
      'skills' => expected_applicant.skills
    }
  end

  describe '#build!' do
    context 'with valid params' do
      it 'build applicant with correct attributes' do
        applicant = build_applicant
        expect(applicant.first_name).to eq(expected_applicant.first_name)
        expect(applicant.last_name).to  eq(expected_applicant.last_name)
        expect(applicant.email).to      eq(expected_applicant.email)
        expect(applicant.skills).to     eq(expected_applicant.skills)
      end
    end

    context 'with empty skills' do
      before do
        params['skills'] = []
      end

      it 'raise an error' do
        expect { build_applicant }.to raise_error
      end
    end
  end
end
