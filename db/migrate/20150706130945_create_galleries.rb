class CreateGalleries < ActiveRecord::Migration
  def change
    create_table :galleries do |t|
      t.integer :galleryable_id
      t.string :galleryable_type
      t.string :title
      t.timestamps null: false
    end
  end
end
