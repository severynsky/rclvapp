json.users @users do |user|
  json.id user.id
  json.name user.name
  json.role user.role
  if user.image
    json.image user.image.picture.url(:thumb)
  end
end

