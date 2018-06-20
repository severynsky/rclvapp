class User < ActiveRecord::Base
  devise :timeoutable, :timeout_in => 15.minutes
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :recoverable, :rememberable, :trackable, :validatable

  
  has_one :image, as: :imageable, dependent: :destroy
  accepts_nested_attributes_for :image, :reject_if => lambda {|a| a[:picture].blank?}, allow_destroy: true
end
