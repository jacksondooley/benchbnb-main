class Api::SessionController < ApplicationController

  # before_action :require_logged_out, only: [:new, :create]
  # before_action :require_logged_in, only: [:destroy]

  def new
    render :new
  end

  def create 
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    @user.reset_ression_token!
    session[:session_token] = @user.session_token
  end

  def destroy
    @user = current_user
    @user.reset_ression_token!
    session[:session_token] = nil
    render json: {}
  end

end
