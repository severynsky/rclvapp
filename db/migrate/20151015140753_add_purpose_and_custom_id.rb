class AddPurposeAndCustomId < ActiveRecord::Migration
  def change
    add_column :projects, :purpose, :string
    add_column :projects, :custom_id, :string
  end
end
