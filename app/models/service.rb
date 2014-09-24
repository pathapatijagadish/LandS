class Service < ActiveRecord::Base
	#has_many :images, as: :imageable
	mount_uploader :photo, PhotoUploader
end
