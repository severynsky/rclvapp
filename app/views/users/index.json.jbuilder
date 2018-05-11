json.users @users do |user|
  json.id user.id
  json.name user.name
  json.role user.role
  json.position user.position
  json.nationality user.nationality
  if user.image
    json.image user.image.picture.url(:thumb)
  end
end

