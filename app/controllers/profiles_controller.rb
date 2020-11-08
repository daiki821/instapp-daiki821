class ProfilesController < ApplicationController
  def show
    @user = current_user
    @profile = current_user.profile
  end

  def edit
    @profle = current_user.prepare_profile
  end

  def update
    @profile = current_user.prepare_profile
    @profile.assign_attributes(profile_params)
    if @profile.save 
      redirect_to profile_path
    else
      render :edit
    end
  end

  private
  def profile_params
    params.require(:profile).permit(:avatar)
  end
end

