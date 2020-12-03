class Api::CommentsController < Api::ApplicationController

  def index
    article = Article.find(params[:article_id])
    @comments = article.comments.all

    render json: @comments
  end
end