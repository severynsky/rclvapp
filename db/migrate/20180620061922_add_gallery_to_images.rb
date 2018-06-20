class AddGalleryToImages < ActiveRecord::Migration
  def change
    change_table :images do |t|
      t.integer :gallery_id
      t.string :gallery_type
    end
  end
end
