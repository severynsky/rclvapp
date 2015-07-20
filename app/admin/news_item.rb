ActiveAdmin.register NewsItem do
  includes :image, :category

  controller do
  end

  permit_params :title, :intro_text, :body, :category_id, :gallery_id, :id, :publish_date, :status, :language, image_attributes:[:picture, :is_main, :_destroy, :id], seotool_attributes:[:title, :description, :keywords]
  index do 
    column "Image" do |image|
      if image.image != nil
        image_tag image.image.picture.url(:small) 
      end
    end
    column :title
    column :category
    column :language
    column :publish_date
    column :gallery
    column :created_at
    actions
  end

  menu priority: 2
  menu label: "Новини"

  form :html => { multipart: true } do |f|
    
    f.inputs "News" do
      f.input :language, :as => :select, collection: %w[ukr eng]
      f.input :title
      f.input :category
      f.input :intro_text, :placeholder => "1-2 short sentences"
      f.input :publish_date
      f.input :status, :as => :select, collection: %w[draft publish archive deleted]
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
