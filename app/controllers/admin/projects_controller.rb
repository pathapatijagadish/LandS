class Admin::ProjectsController < ApplicationController
  before_action :authenticate_admin!
  layout "admin"
  before_action :set_project, only: [:show, :edit, :update, :destroy]

  def index
    @projects = Project.all
  end

  def show
  end
  
  def new
    @project = Project.new
  end

  def edit
  end

  def create
    @project = Project.new(project_params)
    #render :text=>params and return false

    respond_to do |format|
      if @project.save
        format.html { redirect_to admin_projects_url, notice: 'Project was successfully created.' }
        format.json { render :show, status: :created, location: @project }
      else
        format.html { render :new }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @project.update(project_params)
        format.html { redirect_to admin_projects_url, notice: 'Project was successfully updated.' }
        format.json { render :show, status: :ok, location: @project }
      else
        format.html { render :edit }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end


  def destroy
    @project.destroy
    respond_to do |format|
      format.html { redirect_to admin_projects_url, notice: 'Project was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

    def set_project
      @project = Project.find(params[:id])
    end

    def project_params
      params.require(:project).permit(:title, :description, :sequence,:photo,images_attributes: [:id,:photo,:sequence,:story_id,:_destroy])
    end
end
