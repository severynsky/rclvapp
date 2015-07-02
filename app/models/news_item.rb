class NewsItem < ActiveRecord::Base
  
  belongs_to :category
  has_one :image, as: :imageable, dependent: :destroy
  has_one :seotool, as: :seotoolable, dependent: :destroy

  accepts_nested_attributes_for :image, :reject_if => lambda {|a| a[:picture].blank?}, allow_destroy: true

  accepts_nested_attributes_for :seotool, allow_destroy: true

  validates :title, presence: true, length: { minimum: 8 }
  validates :intro_text, presence: true, length: { minimum: 90 }
  validates :body, presence: true, length: { minimum: 150 }
  validates :category_id, presence: true

end
