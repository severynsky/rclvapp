class Image < ActiveRecord::Base
  before_save :check_img

  belongs_to :imageable, polymorphic: true

  has_attached_file :picture, :styles => { :cover => "1000x800#", :thumb => "300x300#", :small => "100x100" }, :default_url => "/images/missing.png"
  validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/

  def check_img
    # binding.pry
  end

end
