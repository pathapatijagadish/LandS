class EquipmentController < ApplicationController

  def index
    @equipment = Equipment.all
    @banners=Banner.where(:section=>"Equipment")
  end

  private

    def equipment_params
      params.require(:equipment).permit(:title, :description, :sequence,images_attributes: [:id,:photo,:sequence,:_destroy])
    end
end
