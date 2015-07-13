class EventsController < ApplicationController
  
  def index
    @events = Event.order('created_at DESC').all
  end

  def show
    @event = Event.find(params[:id]);
  end
end
