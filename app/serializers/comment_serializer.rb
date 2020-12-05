class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content,:article_id, :user_id
end
