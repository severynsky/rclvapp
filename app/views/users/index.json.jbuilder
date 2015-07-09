json.users @users do |user|
  json.id user.id
  json.name user.name
  json.role user.role
  json.address user.address
  json.phone user.phone
  json.email user.email
  json.full_data user.full_data
  json.languages user.languages
  json.nationality user.nationality
  json.date_of_birth user.date_of_birth
  if user.image
    json.image user.image.picture.url(:thumb)
  end
end

