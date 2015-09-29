class Event < ActiveRecord::Base

  validates :address, presence: true
  validates :date, presence: true
  validates :meeting_time, presence: true

  geocoded_by :address
  after_validation :geocode
end
