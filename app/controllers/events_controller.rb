class EventsController < ApplicationController
  
  def index
    @events = Event.order('date ASC').all
    # @events = Event.all
  end

  def show
    @event = Event.find(params[:id]);
  end
end
