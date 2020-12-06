class CommentSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :content, :accountname, :avatar_url


  def accountname
    object.user.accountname
  end

  def avatar_url
    user = object.user
    if user&.profile&.avatar&.attached?
      url_for(user.profile.avatar)
    else
      '/assets/default-avatar.png'
    end
  end

 

end

