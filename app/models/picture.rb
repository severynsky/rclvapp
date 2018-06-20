class Picture < ActiveRecord::Base

  # belongs_to :imageable, polymorphic: true
  belongs_to :gallery, polymorphic: true

  has_attached_file :picture, :styles => { :cover => "1000x800#", :thumb => "300x300#", :small => "100x100" }, :default_url => "/images/missing.png"
  validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/


end
