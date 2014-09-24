class Equipment < ActiveRecord::Base
	mount_uploader :photo, PhotoUploader
end
