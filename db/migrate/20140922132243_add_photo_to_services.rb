class AddPhotoToServices < ActiveRecord::Migration
  def change
    add_column :services, :photo, :string
  end
end
