require 'rails_helper'

describe PositionBuilder do
  let(:position_builder)  { described_class}
  let(:build_postion)     { position_builder.build!(params) }
  let(:expected_position) { build(:position) }
  let(:hiring_team) { create(:hiring_team, :with_recruiters, number: 1) }
  let(:params) do
    {
      'title' => expected_position.title,
      'description' => expected_position.description,
      'hiring_team_id' => hiring_team.id,
      'skills' => expected_position.skills
    }
  end

  describe '#build!' do
    context 'with valid params' do
      it 'build position with correct attributes' do
        position = build_postion
        expect(position.title).to          eq(expected_position.title)
        expect(position.description).to    eq(expected_position.description)
        expect(position.hiring_team_id).to eq(hiring_team.id)
        expect(position.skills).to         eq(expected_position.skills)
      end
    end
  end
end
