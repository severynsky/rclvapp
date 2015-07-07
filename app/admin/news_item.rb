ActiveAdmin.register NewsItem do
  includes :image, :category

  controller do
  end

  permit_params :title, :intro_text, :body, :category_id, :gallery_id, :id, image_attributes:[:picture, :is_main, :_destroy, :id], seotool_attributes:[:title, :description, :keywords]
  index do 
    column "Image" do |image|
        image_tag image.image.picture.url(:small)
    end
    column :title
    column :category
    column :created_at
    column :gallery
    actions
  end

  menu priority: 2
  menu label: "Новини"

  form :html => { multipart: true } do |f|
    
    f.inputs "News" do
      f.input :title
      f.input :category
      f.input :intro_text
      f.input :body, :as => :ckeditor, :input_html => { :ckeditor => {:toolbar => 'Full'}}
    end

    f.inputs "Gallery", for: [:gallery, f.object.gallery || Gallery.new]  do
      f.input :gallery, as: :select, collection: Gallery.all
    end

    f.inputs "Seo tool", for: [:seotool, f.object.seotool || Seotool.new] do |seo|
      seo.input :title
      seo.input :description
      seo.input :keywords
    end
    f.inputs "images", for: [:image, f.object.image || Image.new] do |img|

      img.input :picture, :as => :file, :hint => img.object.picture.present? \
        ? image_tag(img.object.picture.url(:small))
        : content_tag(:span, "no cover page yet")
        # img.input :_destroy, label: "Remove image?", as: :radio
        img.input :_destroy, :as=>:boolean, :required => false, :label => 'Remove image'
    end

    f.actions
  end

end
