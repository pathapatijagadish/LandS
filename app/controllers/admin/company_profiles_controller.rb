class Admin::CompanyProfilesController < ApplicationController
  before_action :authenticate_admin!
  layout "admin"
	before_action :set_company_profile, only: [:show, :edit, :update, :destroy]

  def index
    @company_profiles = CompanyProfile.all
  end

  def show
  end

  def new
    @company_profile = CompanyProfile.new
  end


  def edit
  end

  def create
    @company_profile = CompanyProfile.new(company_profile_params)

    respond_to do |format|
      if @company_profile.save
        format.html { redirect_to admin_company_profiles_url, notice: 'CompanyProfile was successfully created.' }
        format.json { render :show, status: :created, location: @company_profile }
      else
        format.html { render :new }
        format.json { render json: @company_profile.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @company_profile.update(company_profile_params)
        format.html { redirect_to admin_company_profiles_url, notice: 'CompanyProfile was successfully updated.' }
        format.json { render :show, status: :ok, location: @company_profile }
      else
        format.html { render :edit }
        format.json { render json: @company_profile.errors, status: :unprocessable_entity }
      end
    end
  end


  def destroy
    @company_profile.destroy
    respond_to do |format|
      format.html { redirect_to admin_company_profiles_url, notice: 'Company Profile was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

    def set_company_profile
      @company_profile = CompanyProfile.find(params[:id])
    end

    def company_profile_params
      params.require(:company_profile).permit(:photo)
    end
end
