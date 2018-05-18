class AddBizMailToUser < ActiveRecord::Migration
  def change
  	add_column :users, :bizMail, :text
  end
end
