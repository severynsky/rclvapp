json.members @members do |member|
  json.id member.id
  json.name member.name
  json.role member.role
  json.address member.address
  json.phone member.phone
  json.email member.email
  json.full_data member.full_data
  json.languages member.languages
  json.nationality member.nationality
  json.date_of_birth member.date_of_birth
  if member.image
    json.image member.image.picture.url(:thumb)
  end
end