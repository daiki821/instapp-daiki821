class LikesController < ApplicationController


  def show
    article = Article.find(params[:article_id])
    like_stauts = current_user.has_liked?(article)

    render json: { hasLiked: like_stauts }
  end


  def create
    article = Article.find(params[:article_id])
    article.likes.create!(user_id: current_user.id)

    render json: { status: 'ok' }
  end

  def destroy
    article = Article.find(params[:article_id])
    like = article.likes.find_by!(params[user_id: current_user.id])
    like.destroy!

    render json: { status: 'ok'}
  end

end