class CreateHomePages < ActiveRecord::Migration
  def change
    create_table :home_pages do |t|
      t.string :title
      t.text :description
      t.integer :sequence
      t.boolean :status
      t.string :button
      t.string :link

      t.timestamps
    end
  end
end
