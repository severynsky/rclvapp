class Gallery < ActiveRecord::Base

  has_many :images, as: :imageable, dependent: :destroy

  belongs_to :galleryable, polymorphic: true

  accepts_nested_attributes_for :images, :reject_if => lambda {|a| a[:picture].blank?}, allow_destroy: true

  def galleryable_newsitem
      self.galleryable.id if self.galleryable.is_a? NewsItem
  end

end
