class CreateNewsItems < ActiveRecord::Migration
  def change
    create_table :news_items do |t|
      t.string :title
      t.text :intro_text
      t.text :body
      t.integer :category_id
      t.timestamps null: false
    end
  end
end
