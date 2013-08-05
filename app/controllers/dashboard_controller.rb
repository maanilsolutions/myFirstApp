class DashboardController < ApplicationController
  before_filter :authenticate_user!
  
  def index
    render :layout => 'admin', :nothing => true
  end
end
