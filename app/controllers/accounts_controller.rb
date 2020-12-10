class AccountsController < ApplicationController

  def show
    @user = User.find(params[:id])
    @articles = @user.articles
    if @user == current_user
      redirect_to profile_path
    end
  end
end