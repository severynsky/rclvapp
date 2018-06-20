class ProjectsController < ApplicationController

  def index
    @new_projects = Project.order('created_at DESC').where(status: "new")
    @running_projects = Project.order('created_at DESC').where(status: "running")
    @completed_projects = Project.order('created_at DESC').where(status: "completed")
  end

  def show
    @project = Project.find(params[:id])
  end

end
