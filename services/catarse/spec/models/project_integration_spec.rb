# coding: utf-8
# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ProjectIntegration, type: :model do
  describe 'Associations' do
    it { is_expected.to belong_to :project }
  end
end
