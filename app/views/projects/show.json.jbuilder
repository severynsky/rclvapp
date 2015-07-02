json.id @project.id
json.created_at @project.created_at
json.title @project.title
json.description @project.description
json.status @project.status
if @project.seotool
  json.seotitle @project.seotool.title
  json.seodescription @project.seotool.description
  json.seokeywords @project.seotool.keywords
end
