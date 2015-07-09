class NewsItem < ActiveRecord::Base
  before_save :check_img
  
  belongs_to :category
  has_one :image, as: :imageable, dependent: :destroy
  has_one :seotool, as: :seotoolable, dependent: :destroy
  belongs_to :gallery, dependent: :destroy

  accepts_nested_attributes_for :image, :reject_if => lambda {|a| a[:picture].blank?}, allow_destroy: true

  accepts_nested_attributes_for :seotool, allow_destroy: true
  accepts_nested_attributes_for :gallery, :reject_if => lambda {|a| a[:image].blank?}, allow_destroy: true

  validates :title, presence: true, length: { minimum: 8 }
  validates :intro_text, presence: true, length: { minimum: 90, maximum: 200 }
  validates :body, presence: true, length: { minimum: 150 }
  validates :category_id, presence: true
  validates :image, presence: true

  def check_img
    # binding.pry
  end

end
