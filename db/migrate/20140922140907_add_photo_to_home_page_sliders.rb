class AddPhotoToHomePageSliders < ActiveRecord::Migration
  def change
    add_column :home_page_sliders, :photo, :string
  end
end
