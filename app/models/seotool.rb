class Seotool < ActiveRecord::Base

  belongs_to :seotoolable, polymorphic: true

end
