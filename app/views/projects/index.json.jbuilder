json.new_projects @new_projects do |project|
  json.id project.id
  json.title project.title
  json.description project.description
  json.status project.status
  if project.image
    json.image project.image.picture.url
  end
  if project.seotool
    json.seotitle project.seotool.title
    json.seodescription project.seotool.description
    json.seokeywords project.seotool.keywords
  end
end
json.running_projects @running_projects do |project|
  json.id project.id
  json.title project.title
  json.description project.description
  json.status project.status
  if project.seotool
    json.seotitle project.seotool.title
    json.seodescription project.seotool.description
    json.seokeywords project.seotool.keywords
  end
end
json.completed_projects @completed_projects do |project|
  json.id project.id
  json.title project.title
  json.description project.description
  json.status project.status
  if project.seotool
    json.seotitle project.seotool.title
    json.seodescription project.seotool.description
    json.seokeywords project.seotool.keywords
  end
end