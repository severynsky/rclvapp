class CreateMembers < ActiveRecord::Migration
  def change
    create_table :members do |t|
      t.string :name
      t.string :role
      t.string :address
      t.string :phone
      t.string :email
      t.text :full_data
      t.string :languages
      t.string :nationality
      t.date :date_of_birth

      t.timestamps null: false
    end
  end
end
