json.id @user.id
json.name @user.name
json.image @user.image.picture(:thumb)
json.role @user.role
json.email @user.email
json.phone @user.phone
json.address @user.address
json.full_data @user.full_data
json.languages @user.languages
json.nationality @user.nationality
json.date_of_birth @user.date_of_birth