class NewsitemsController < ApplicationController

  before_action :find_newsitem, only:[:edit, :show, :update, :destroy]
  before_action :find_categories
  def index
    @news = NewsItem.order('created_at DESC').all
  end

  def new
    @newsItem = NewsItem.new
    @newsItem.build_image
  end

  def create
    @newsItem = NewsItem.new(permit_params)
    if @newsItem.save
      redirect_to '/news_items'
    end
  end

  def edit
    @newsItem.build_image if @newsItem.image == nil
  end

  def update
     if @newsItem.update(permit_params)
       flash[:notice] = "item has been updated"
       redirect_to '/news_items'
     end
  end

  def destroy
    @newsItem.destroy
  end

  private

  def permit_params
    params.require(:news_item).permit(:title, :intro_text, :body, :category_id, image_attributes:[:picture, :is_main, :_destroy, :id])
  end

  def find_newsitem
    @newsItem = NewsItem.find(params[:id])
  end

  def find_categories
    @categories = Category.all
  end
end
