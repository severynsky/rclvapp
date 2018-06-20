class AddNewsItemIdToGallery < ActiveRecord::Migration
  def change
    add_column :galleries, :news_item_id, :integer
    add_column :news_items, :gallery_id, :integer
  end
end
