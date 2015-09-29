class AddUaTitleEvents < ActiveRecord::Migration
  def change
    add_column :events, :title_ua, :string
  end
end
