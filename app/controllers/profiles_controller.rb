class ProfilesController < ApplicationController
  def show
    @profle = current_user.prepare_profile
    @articles = current_user.articles

  end

  def edit
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

