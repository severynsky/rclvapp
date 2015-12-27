class AddWorkEducationInterestsFieldsToUser < ActiveRecord::Migration
  def change
    add_column :users, :work, :text
    add_column :users, :education, :text
    add_column :users, :interests, :text
  end
end
