class ServicesController < ApplicationController

  def index
    @services = Service.all
    @banners=Banner.where(:section=>"Services")

  end

  private
   
    def service_params
      params.require(:service).permit(:title, :description, :sequence,images_attributes: [:id,:photo,:sequence,:_destroy])
    end
end
