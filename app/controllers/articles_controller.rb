class ArticlesController < ApplicationController
  before_action :authenticate_user!

  def index
    @articles = Article.all
  end

  def show
    @article = Article.find(params[:id])
    @comments = @article.comments
  end


  def new 
    @article = current_user.articles.build
  end

  def create 
    @article = current_user.articles.build(article_params)
    if @article.save
      redirect_to articles_path, notice: '記事を作成しました'
    else
      flash.now[:error] = '記事を保存できませんでした'
      render :new
    end
  end
  private
  def article_params
    params.require(:article).permit(:content, images: [])
  end
end