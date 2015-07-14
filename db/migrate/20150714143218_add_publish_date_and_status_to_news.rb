class AddPublishDateAndStatusToNews < ActiveRecord::Migration
  def change
    add_column :news_items, :status, :string
    add_column :news_items, :publish_date, :date
  end
end
