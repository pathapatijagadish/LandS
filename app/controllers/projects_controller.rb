class ProjectsController < ApplicationController
	
  def index
    @projects = Project.all
    @banners=Banner.where(:section=>"Projects")
  end

  private

    def project_params
      params.require(:project).permit(:title, :description, :sequence,images_attributes: [:id,:photo,:sequence,:_destroy])
    end
end
