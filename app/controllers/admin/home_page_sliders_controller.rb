class Admin::HomePageSlidersController < ApplicationController
  before_action :authenticate_admin!
  layout "admin"
	before_action :set_home_page_slider, only: [:show, :edit, :update, :destroy]

  def index
    @home_page_sliders = HomePageSlider.all
  end

  def show
  end

  def new
    @home_page_slider = HomePageSlider.new
  end


  def edit
  end

  def create
    @home_page_slider = HomePageSlider.new(home_page_slider_params)

    respond_to do |format|
      if @home_page_slider.save
        format.html { redirect_to admin_home_page_sliders_url, notice: 'Home page slider was successfully created.' }
        format.json { render :show, status: :created, location: @home_page_slider }
      else
        format.html { render :new }
        format.json { render json: @home_page_slider.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @home_page_slider.update(home_page_slider_params)
        format.html { redirect_to admin_home_page_slider_url, notice: 'Home page slider was successfully updated.' }
        format.json { render :show, status: :ok, location: @home_page_slider }
      else
        format.html { render :edit }
        format.json { render json: @home_page_slider.errors, status: :unprocessable_entity }
      end
    end
  end


  def destroy
    @home_page_slider.destroy
    respond_to do |format|
      format.html { redirect_to admin_home_page_sliders_url, notice: 'Home page slider was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

    def set_home_page_slider
      @home_page_slider = HomePageSlider.find(params[:id])
    end

    def home_page_slider_params
      params.require(:home_page_slider).permit(:image_text, :sequence, :link,:photo)
    end
end
