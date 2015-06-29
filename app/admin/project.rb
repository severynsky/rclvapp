ActiveAdmin.register Project do

  permit_params :title, :description, :status

  menu priority: 3
  menu label: "Projects"

  form do |f|
    f.inputs do
      f.input :title
      f.input :description, :as => :ckeditor, :input_html => { :ckeditor => {:toolbar => 'Full'}}
      f.input :status, :as => :select, collection: %w[new running completed]
    end
    f.actions
  end
  
end
