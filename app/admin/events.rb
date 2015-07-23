ActiveAdmin.register Event do

  permit_params :title, :date, :place, :description, :address, :latitude, :meeting_time, :longitude

  menu priority: 6
  menu label: "Events"

  index do
    column :title
    column :address
    column :date
    column :meeting_time
    column :created_at
    actions
  end

  form do |f|
    f.inputs do
      f.input :title, :placeholder => "Зустріч гостей"
      f.input :address, :placeholder => "Львів, Староєврейська 12"
      f.input :place, :placeholder => "Готель Жорж"
      f.input :description, :as => :ckeditor, :input_html => { :ckeditor => {:toolbar => 'Full'}}
      f.input :meeting_time
      f.input :date, :as => :datepicker, :placeholder => "1970-05-21 as (YYYY-MM-DD)"
    end
    f.actions
  end
  
end


    