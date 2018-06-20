class AddLangAttrToNewsItem < ActiveRecord::Migration
  def change
    add_column :news_items, :language, :string
  end
end
