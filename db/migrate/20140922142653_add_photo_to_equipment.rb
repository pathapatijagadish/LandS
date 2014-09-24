class AddPhotoToEquipment < ActiveRecord::Migration
  def change
    add_column :equipment, :photo, :string
  end
end
