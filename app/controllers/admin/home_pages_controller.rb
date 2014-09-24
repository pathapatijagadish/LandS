class Admin::HomePagesController < ApplicationController
  before_action :authenticate_admin!
  layout "admin"
 before_action :set_home_page, only: [:show, :edit, :update, :destroy]

  def index
    @home_pages = HomePage.all
  end

  def show
  end

  def new
    @home_page = HomePage.new
  end

  def edit
  end

  def create
    @home_page = HomePage.new(home_page_params)

    respond_to do |format|
      if @home_page.save
        format.html { redirect_to admin_home_pages_url, notice: 'Home page was successfully created.' }
        format.json { render :show, status: :created, location: @home_page }
      else
        format.html { render :new }
        format.json { render json: @home_page.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @home_page.update(home_page_params)
        format.html { redirect_to admin_home_page_url, notice: 'Home page was successfully updated.' }
        format.json { render :show, status: :ok, location: @home_page }
      else
        format.html { render :edit }
        format.json { render json: @home_page.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @home_page.destroy
    respond_to do |format|
      format.html { redirect_to admin_home_pages_url, notice: 'Home page was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_home_page
      @home_page = HomePage.find(params[:id])
    end

    def home_page_params
      params.require(:home_page).permit(:title, :description, :sequence, :status, :button, :link,:photo)
    end
end

