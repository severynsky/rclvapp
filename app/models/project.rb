class Project < ActiveRecord::Base

  @status = %w[new running completed]

  has_one :seotool, as: :seotoolable, dependent: :destroy

  accepts_nested_attributes_for :seotool, allow_destroy: true

end
