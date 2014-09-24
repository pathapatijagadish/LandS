class HomeController < ApplicationController
  def index
  	@home_pages = HomePage.all
  	@home_page_sliders = HomePageSlider.all
  end
end
