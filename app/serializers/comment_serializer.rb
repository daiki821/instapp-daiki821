class CommentSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :content, :avatar_url, :accountname

  def avatar_url
    user = object.user
    if user&.profile&.avatar&.attached?
      url_for(user.profile.avatar)
    else
      '/assets/default-avatar.png'
    end
  end


  def accountname
    object.user.accountname
  end



end

