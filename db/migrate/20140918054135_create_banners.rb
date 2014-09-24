class CreateBanners < ActiveRecord::Migration
  def change
    create_table :banners do |t|
      t.string :section
      t.text :message

      t.timestamps
    end
  end
end
