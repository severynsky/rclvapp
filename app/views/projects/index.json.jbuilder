json.new_projects @new_projects do |project|
  json.id project.id
  json.title project.title
  json.description project.description
  json.status project.status
end
json.running_projects @running_projects do |project|
  json.id project.id
  json.title project.title
  json.description project.description
  json.status project.status
end
json.completed_projects @completed_projects do |project|
  json.id project.id
  json.title project.title
  json.description project.description
  json.status project.status
end