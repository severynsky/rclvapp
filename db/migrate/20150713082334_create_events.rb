class CreateEvents < ActiveRecord::Migration
  def up  
    create_table :events do |t|
      t.string :title
      t.date :date
      t.text :description
      t.string :address
      t.string :place
      t.float :latitude
      t.float :longitude
      t.timestamps null: false
    end
  end
  def down
    drop_table :events
  end
end
