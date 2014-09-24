class AddPhotoToBanners < ActiveRecord::Migration
  def change
    add_column :banners, :photo, :string
  end
end
