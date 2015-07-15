ActiveAdmin.register User do
    includes :image
  permit_params :name, :role, :password, :address, :phone, :email, :full_data, :languages, :nationality, :date_of_birth, image_attributes:[:picture, :is_main, :_destroy, :id]

  index do 
    column "Image" do |image|
      if image.image != nil
        image_tag image.image.picture.url(:small)
      end
    end
    column :name
    column :role
    column :phone
    column :email
    actions
  end

  menu priority: 3
  menu label: "Users"

  form :html => { multipart: true } do |f|
    
    f.inputs "Members" do
      f.input :name, :placeholder => "Engar Allan Poe"
      f.input :role, :as => :select, collection: %w[president committies regular admin]
      f.input :email, :placeholder => "somedomain@some.com"
      f.input :password
      f.input :phone, :placeholder => "+3 (8) 099 99 99"
      f.input :address, :placeholder => "79000, Ukraine, Lviv, Some str 11/9"
      f.input :languages, :placeholder => "First goes native, fluent, good, basic"
      # f.input :nationality, :placeholder => "Ukrainian, English, Danish"
      f.input :nationality, :as => :select, collection: %w[ Ukrainian English Austrian Belarusian Belgian Bulgarian Croat Cyprian Czech Danish Estonian Finn French German Greek Hungarian Irish Italian Latvian Lithuanian Luxembourger Moldavian Netherlander Norwegian Polish Portuguese Romanian Russian Swiss Swede Spaniard Slovenian Slovak Serb  Slovac ]
      f.input :date_of_birth, :as => :datepicker, :placeholder => "1970-05-21 as (YYYY-MM-DD)"
      f.inputs "images", for: [:image, f.object.image || Image.new] do |img|
        img.input :picture
      end
      f.input :full_data, :as => :ckeditor, :input_html => { :ckeditor => {:toolbar => 'Full'}}
    end

    f.actions
  end
end
