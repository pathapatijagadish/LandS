class Banner < ActiveRecord::Base
	mount_uploader :photo, PhotoUploader
end
