class AddPositionAndTitleToUser < ActiveRecord::Migration
  def change
    add_column :users, :title, :text
  	add_column :users, :position, :text
  end
end
