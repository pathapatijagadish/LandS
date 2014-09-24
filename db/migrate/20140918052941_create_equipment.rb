class CreateEquipment < ActiveRecord::Migration
  def change
    create_table :equipment do |t|
      t.string :title
      t.text :description
      t.integer :sequence

      t.timestamps
    end
  end
end
