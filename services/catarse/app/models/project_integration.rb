class ProjectIntegration < ActiveRecord::Base
  belongs_to :project

  validates :project, :integration_key, :integration_code, presence: true
  validates :integration_key, inclusion: { in: %w[google_analytics facebook_pixel] }
  validates :integration_key, uniqueness: { scope: :project }
end
