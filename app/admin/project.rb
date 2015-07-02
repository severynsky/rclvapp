ActiveAdmin.register Project do

  permit_params :title, :description, :status, seotool_attributes:[:title, :description, :keywords]

  menu priority: 3
  menu label: "Projects"

  form do |f|
    f.inputs do
      f.input :title
      f.input :description, :as => :ckeditor, :input_html => { :ckeditor => {:toolbar => 'Full'}}
      f.input :status, :as => :select, collection: %w[new running completed]
    end
    f.inputs "Seo tool", for: [:seotool, f.object.seotool || Seotool.new] do |seo|
      seo.input :title
      seo.input :description
      seo.input :keywords
    end
    f.actions
  end
  
end


    