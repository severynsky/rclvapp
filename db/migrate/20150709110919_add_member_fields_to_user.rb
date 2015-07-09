class AddMemberFieldsToUser < ActiveRecord::Migration
  def change
    add_column :users, :name, :string
    add_column :users, :role, :string
    add_column :users, :address, :string
    add_column :users, :phone, :string
    add_column :users, :full_data, :text
    add_column :users, :languages, :text
    add_column :users, :nationality, :text
    add_column :users, :date_of_birth, :text
  end
end
