ActiveAdmin.register NewsItem do
  includes :image, :category, :gallery

  controller do
    def edit
      # binding.pry
    end
  end

  permit_params :title, :intro_text, :body, :category_id, image_attributes:[:picture, :is_main, :_destroy, :id], gallery_attributes:[:title, :_destroy, :id, :galleryable_newsitem, images_attributes:[:picture, :description, :_destroy, :id]], seotool_attributes:[:title, :description, :keywords, :id]
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

  form :html => { multipart: true } do |f|
    
    f.inputs "News" do
      f.input :title
      f.input :category  
      f.input :intro_text
      f.input :body, :as => :ckeditor, :input_html => { :ckeditor => {:toolbar => 'Full'}}

      # f.input :gallery, new_record: true, collection: Gallery.all.map {|image| [image.title, image.id] }
      # f.input :galleryable_newsitem, new_record: true, collection: Gallery.all.map {|image| [image.title, image.id] }
      # f.has_many :galleryable, new_record: true do |glr|
        # glr.input :galleryable_newsitem, collection: Gallery.all
      # end
      
    end

    f.inputs "Gallery", new_record: true  do |glr|
      glr.input :title
      # fa.input :id, label: "Gallery", as: :select, collection: Gallery.all, :hint => fa.present? \
      #   ? fa.object.title
      #   : content_tag(:span, "no cover page yet")
      # fa.input :title, :required => false
      # fa.input :_destroy, :as=>:boolean, :required => false, :label => 'Remove Gallery'
      glr.has_many :images, heading: 'іmages', allow_destroy: true, new_record: true do |img|
        img.input :picture, :as => :file, :hint => img.object.picture.present? \
          ? image_tag(img.object.picture.url(:small))
          : content_tag(:span, "no cover page yet")
        img.input :description
      end
    end 

    f.inputs "Seo tool", for: [:seotool, f.object.seotool || Seotool.new] do |seo|
      seo.input :title
      seo.input :description
      seo.input :keywords
    end

    f.inputs "images", for: [:image, f.object.image || Image.new] do |img|
      img.input :picture, :as => :file, :hint => img.object.picture.present? ? image_tag(img.object.picture.url(:small))
        : content_tag(:span, "no cover page yet")
        img.input :_destroy, :as=>:boolean, :required => false, :label => 'Remove image'
    end

    f.actions
  end

end
