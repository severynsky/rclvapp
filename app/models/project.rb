class Project < ActiveRecord::Base

  @status = %w[new running completed]

  validates :title, presence: true, length: { minimum: 8 }
  validates :description, presence: true, length: { minimum: 150 }
  validates :status, presence: true

  has_one :image, as: :imageable, dependent: :destroy
  accepts_nested_attributes_for :image, :reject_if => lambda {|a| a[:picture].blank?}, allow_destroy: true

  has_many :pictures, as: :imageable, dependent: :destroy
  accepts_nested_attributes_for :pictures, :reject_if => lambda {|a| a[:picture].blank?}, allow_destroy: true
  
  has_one :seotool, as: :seotoolable, dependent: :destroy
  accepts_nested_attributes_for :seotool, allow_destroy: true

end
