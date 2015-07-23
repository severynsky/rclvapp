class AddTimeToEvent < ActiveRecord::Migration
  def change
    add_column :events, :meeting_time, :time
  end
end
