class HomePage < ActiveRecord::Base
	mount_uploader :photo, PhotoUploader
end
