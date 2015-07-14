json.news @news do |news_item|
  json.id news_item.id
  json.title news_item.title
  json.intro news_item.intro_text
  json.body news_item.body
  json.created_at news_item.created_at
  json.category news_item.category
  json.publish_date news_item.publish_date
  json.status news_item.status
  if news_item.image
    json.image news_item.image.picture.url(:thumb)
  end
  if news_item.seotool
    json.seotitle news_item.seotool.title
    json.seodescription news_item.seotool.description
    json.seokeywords news_item.seotool.keywords
  end
  if news_item.gallery
    json.gallery news_item.gallery.images do |img|
      json.image img.picture.path
    end
  end
end