class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/user/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def edit
    @user = current_user.find(params[:id])
  end

  def update
    @user = current_user.find(params[:id])
    if @user.update(user_params)
      render 'api/user/show' 
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end 

end