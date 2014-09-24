class AddPhotoToHomePages < ActiveRecord::Migration
  def change
    add_column :home_pages, :photo, :string
  end
end
