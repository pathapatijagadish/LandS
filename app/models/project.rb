class Project < ActiveRecord::Base
	has_many :images,dependent: :destroy
	mount_uploader :photo, PhotoUploader
	accepts_nested_attributes_for :images, :allow_destroy => true
end
