class CreateCompanyProfiles < ActiveRecord::Migration
  def change
    create_table :company_profiles do |t|
		t.string :photo
      	t.timestamps
    end
  end
end
