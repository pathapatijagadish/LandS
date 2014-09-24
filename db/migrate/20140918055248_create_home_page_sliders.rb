class CreateHomePageSliders < ActiveRecord::Migration
  def change
    create_table :home_page_sliders do |t|
      t.text :image_text
      t.integer :sequence
      t.string :link

      t.timestamps
    end
  end
end
