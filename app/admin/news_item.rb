ActiveAdmin.register NewsItem do
  includes :image, :category
  permit_params :title, :intro_text, :body, :category_id, image_attributes:[:picture, :is_main, :_destroy, :id], seotool_attributes:[:title, :description, :keywords]

  index do 
    column "Image" do |image|
        image_tag image.image.picture.url(:small)
    end
    column :title
    column :category
    column :intro_text
    column :created_at
    actions
  end

  menu priority: 2
  menu label: "Новини"
  
  # @newsitem.build_image

  form :html => { multipart: true } do |f|
    
    f.inputs "News" do
      f.input :title
      f.input :category
      f.input :intro_text
      f.input :body, :as => :ckeditor, :input_html => { :ckeditor => {:toolbar => 'Full'}}
    end
    f.inputs "Seo tool", for: [:seotool, f.object.seotool || Seotool.new] do |seo|
      seo.input :title
      seo.input :description
      seo.input :keywords
    end
    f.inputs "images", for: [:image, f.object.image || Image.new] do |img|
      img.input :picture
    end

    f.actions
  end

end
