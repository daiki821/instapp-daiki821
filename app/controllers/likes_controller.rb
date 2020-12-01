class LikesController < ApplicationController

  def create
    article = Article.find(params[:article_id])
    article.likes.create!(user_id: current_user.id)
    redirect_to root_path
  end

  def destroy
    article = Article.find(params[:article_id])
    like = article.likes.find_by!(params[user_id: current_user.id])
    like.destroy!
    redirect_to root_path
  end

end