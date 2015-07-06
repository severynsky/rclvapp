ActiveAdmin.register Gallery do

  controller do
  end

  permit_params :title, images_attributes:[:picture, :_destroy, :id, :description]

  index do 
    column :title
    column :created_at
    actions
  end

  menu priority: 4
  menu label: "Galleries"

  form :html => { multipart: true } do |f|
    
    f.inputs "Gallery" do
      f.input :title
      # f.inputs "images", for: [:image, f.object.image || Image.new] do |img|
      #   img.input :picture, :as => :file, :hint => img.object.picture.present? \
      #     ? image_tag(img.object.picture.url(:thumb))
      #     : content_tag(:span, "no cover page yet")
      #   img.input :_destroy, :as=>:boolean, :required => false, :label => 'Remove image'
      f.has_many :images, heading: 'іmages', allow_destroy: true, new_record: true do |img|
        img.input :picture, :as => :file, :hint => img.object.picture.present? \
          ? image_tag(img.object.picture.url(:small))
          : content_tag(:span, "no cover page yet")
        img.input :description
      end  
    end

    f.actions
  end

end
