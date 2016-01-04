ActiveAdmin.register Event do

  permit_params :title, :title_ua, :date, :event_type, :place, :description, :address, :latitude, :meeting_time, :longitude

  menu priority: 6
  menu label: "Events"

  index do
    column :title
    column :title_ua
    column :event_type
    column :address
    column :date
    column :meeting_time
    column :created_at
    actions
  end

  form do |f|
    f.inputs do
      f.input :event_type, :as => :select, collection: ["regular", "field session", "trip", "social event"], :required => true
      f.input :title, :placeholder => "Guests meeting", :required => true
      f.input :title_ua, :placeholder => "Short additional info", :required => true
      f.input :address, :placeholder => "Lviv, Horodotska 44"
      f.input :place, :placeholder => "Hotel Astoria"
      f.input :description, :as => :ckeditor, :input_html => { :ckeditor => {:toolbar => 'Full'}}
      f.input :meeting_time
      f.input :date, :as => :datepicker, :placeholder => "1970-05-21 as (YYYY-MM-DD)"
    end
    f.actions
  end
  
end


    
