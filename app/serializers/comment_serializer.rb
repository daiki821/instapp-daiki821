# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  content    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  article_id :bigint           not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_comments_on_article_id  (article_id)
#  index_comments_on_user_id     (user_id)
#
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

