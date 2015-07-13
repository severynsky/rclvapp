json.events @events do |event|
  json.title event.title
  json.date event.date
  json.description event.description
  json.address event.address
  json.place event.place
  json.longitude event.longitude
  json.latitude event.latitude
end