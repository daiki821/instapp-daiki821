class CommentsController < ApplicationController

  def index
    @article = Article.find(params[:article_id])
    @comments = @article.comments.all 

    render json: @comments, methods: [:avatar_url]
  end


  def create
    article = Article.find(params[:article_id])
    @comment = article.comments.build(comment_params.merge(user_id: current_user.id))
    @comment.save!

    render json: @comment, methods: [:avatar_url]
  end
  

  private
  def comment_params
    params.require(:comment).permit(:content)
  end
  
end