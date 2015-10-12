json.events @events do |event|
  json.id event.id
  json.title event.title
  json.event_type event.event_type
  json.title_ua event.title_ua
  json.date event.date
  json.time event.meeting_time
  json.description event.description
  json.address event.address
  json.place event.place
  json.longitude event.longitude
  json.latitude event.latitude
end