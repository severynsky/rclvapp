json.projects @projects do |project|
  json.id project.id
  json.title project.title
  json.description project.description
  json.status project.status
end