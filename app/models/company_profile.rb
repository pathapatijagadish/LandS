class CompanyProfile < ActiveRecord::Base
	mount_uploader :photo, PhotoUploader
end
