class Gallery < ActiveRecord::Base

  has_many :images, as: :imageable, dependent: :destroy
  # belongs_to :news_item

  accepts_nested_attributes_for :images, :reject_if => lambda {|a| a[:picture].blank?}, allow_destroy: true


end
