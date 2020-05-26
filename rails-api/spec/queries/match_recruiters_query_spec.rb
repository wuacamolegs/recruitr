require 'rails_helper'

describe MatchRecruitersQuery do
  let(:hiring_team)     { create(:hiring_team, :with_recruiters, number: 1) }
  let(:position)        { create(:position, hiring_team: hiring_team) }
  let(:job_application) { create(:job_application, position: position) }
  let(:query)           { described_class.new(hiring_team.id, job_application.id) }
  let(:recruiter)       { hiring_team.recruiters.first }

  context 'when no criteria is specified' do
    it 'returns random matching score' do
      expect(query.call.first.keys).to eq(%i[id full_name matching_score])
    end
  end

  context 'when skills criteria is applied' do
    let(:criteria) { 'skills' }
    before { query.with_criteria(criteria) }

    it 'returns recruiters correctly' do
      expect(query.call.first.keys).to eq(%i[id full_name matching_score])
    end

    context 'when matching all skills' do
      before do
        recruiter.update(skills: position.skills)
      end

      it 'sets matching score correctly' do
        result = query.call.first
        expect(result[:matching_score].round(1)).to eq(1)
      end
    end

    context 'when matching zero skills' do
      before do
        recruiter.update(skills: build_list(:skill, 1, skill: 'fake'))
      end

      it 'sets matching score correctly' do
        result = query.call.first
        expect(result[:matching_score]).to eq(0)
      end
    end

    context 'when matching some skills' do
      before do
        recruiter.update(skills: [position.skills.first])
      end

      it 'sets matching score correctly' do
        result = query.call.first
        expect(result[:matching_score]).to be_between(0, 1)
      end
    end
  end

  context 'when seniority criteria is applied' do
    let(:criteria) { 'seniority' }
    before { query.with_criteria(criteria) }

    it 'returns recruiters correctly' do
      expect(query.call.first.keys).to eq(%i[id full_name matching_score])
    end

    it 'sets matching score correctly' do
      result = query.call.first
      expect(result[:matching_score]).to eq(recruiter.skills.sum { |s| s['proficiency'] })
    end
  end
end
