ActiveAdmin.register NewsItem do
  includes :image, :category
  permit_params :title, :intro_text, :body, :category_id, image_attributes:[:picture, :is_main, :_destroy, :id]

  menu priority: 2
  menu label: "Новини"
  
  # @newsitem.build_image

  form :html => { multipart: true } do |f|
    
    f.inputs "News" do
      f.input :title
      f.input :category
      f.input :intro_text
      f.input :body
    end
    f.inputs "images", for: [:image, f.object.image || Image.new] do |img|
      img.input :picture
    end

    f.actions
  end

end
