class CommentsController < ApplicationController

  def index
    @article = Article.find(params[:article_id])
    @comments = @article.comments.all 

    render json: @comments, methods: [:avatar_url]
  end

  def new
    article = Article.find(params[:article_id])
    @comment = article.comments.build(user_id: current_user.id)
  end

  def create
    article = Article.find(params[:article_id])
    @comment = article.comments.build(comment_params.merge(user_id: current_user.id))
    if @comment.save 
      redirect_to root_path, notice: 'コメントを作成しました'
    else
      flash.now[:error] = 'コメントを作成できませんでした'
      render :new
    end
  end
  
  def destroy

  end

  private
  def comment_params
    params.require(:comment).permit(:content)
  end
  
end