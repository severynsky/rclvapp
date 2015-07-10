json.id @newsItem.id
json.title @newsItem.title
json.intro @newsItem.intro_text
json.body @newsItem.body
json.сategory @newsItem.category.title
json.created_at @newsItem.created_at
json.image @newsItem.image.picture.url(:cover)
if @newsItem.gallery
  json.gallery @newsItem.gallery.images do |img|
    json.image img.picture.url(:thumb)
    json.description img.description
  end
end
if @newsItem.seotool
  json.seotitle @newsItem.seotool.title
  json.seodescription @newsItem.seotool.description
  json.seokeywords @newsItem.seotool.keywords
end
