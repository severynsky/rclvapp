class CreateSeotools < ActiveRecord::Migration
  def change
    create_table :seotools do |t|
      t.integer :seotoolable_id
      t.string :seotoolable_type

      t.string :title
      t.string :description
      t.text :keywords
      
      t.timestamps null: false
    end
  end
end
