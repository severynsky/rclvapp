class EventsController < ApplicationController
  
  def index
    @events = Event.order('date DESC').all
  end

  def show
    @event = Event.find(params[:id]);
  end
end
