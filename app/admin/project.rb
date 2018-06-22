ActiveAdmin.register Project do
  includes :image
  includes :pictures
  permit_params :title, :description, :custom_id, :purpose, :status, seotool_attributes:[:title, :description, :keywords], image_attributes:[:picture, :is_main, :_destroy, :id], pictures_attributes:[:picture, :is_main, :_destroy, :id]

  menu priority: 3
  menu label: "Projects"

  index do
    column "Image" do |image|
      if image.image != nil
        image_tag image.image.picture.url(:small)
      end
    end
    column :id
    column :title
    column "custom ID", :custom_id
    column :status
    column :created_at
    actions
  end

  form do |f|
    f.inputs do
      f.input :title
      f.inputs "images", for: [:image, f.object.image || Image.new] do |img|
        img.input :picture, :as => :file, :hint => img.object.picture.present? \
        ? image_tag(img.object.picture.url(:small))
        : content_tag(:span, "no cover page yet")
        img.input :_destroy, :as=>:boolean, :required => false, :label => 'Remove image'
      end
      f.input :custom_id, :label => "custom ID"
      f.input :description, :as => :ckeditor, :input_html => { :ckeditor => {:toolbar => 'Full'}}
      f.input :purpose, :as => :ckeditor, :input_html => { :ckeditor => {:toolbar => 'Full'}}
      f.input :status, :as => :select, collection: %w[new running completed]
      f.has_many :pictures, heading: 'gallery', allow_destroy: true, new_record: true do |img|
        img.input :picture, :as => :file, :hint => img.object.picture.present? \
          ? image_tag(img.object.picture.url(:small))
          : content_tag(:span, "no cover page yet")
      end  
    end
    f.inputs "Seo tool", for: [:seotool, f.object.seotool || Seotool.new] do |seo|
      seo.input :title
      seo.input :description
      seo.input :keywords
    end
    f.actions
  end
  
end


    