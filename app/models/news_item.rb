class NewsItem < ActiveRecord::Base
  
  belongs_to :category
  has_one :image, as: :imageable, dependent: :destroy

  accepts_nested_attributes_for :image, :reject_if => lambda {|a| a[:picture].blank?}, allow_destroy: true
  
end
