class ContactsController < InheritedResources::Base
  respond_to :json
  layout 'admin'
end
