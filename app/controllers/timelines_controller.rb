class TimelinesController < ApplicationController

  def show
    followings_ids = current_user.followings.pluck(:id)
    like_articles = Article.left_joins(:likes).where(user_id: followings_ids)
    @articles = like_articles.group(:id).order('count(article_id) desc').limit(5)
    
  end
end