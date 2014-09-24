class RemoveImageFromImages < ActiveRecord::Migration
  def change
  	remove_attachment :images, :image
  end
end
