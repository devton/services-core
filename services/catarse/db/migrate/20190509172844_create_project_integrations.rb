class CreateProjectIntegrations < ActiveRecord::Migration
  def change
    create_table :project_integrations do |t|
      t.references :project, null: false
      t.string :integration_key, null: false
      t.string :integration_code, null: false
      t.jsonb :integration_data, null: false, default: {}

      t.timestamps null: false
    end

    add_index :project_integrations, [:project_id, :integration_key], unique: true, name: 'uidx_integration_project_int_key'
  end
end
