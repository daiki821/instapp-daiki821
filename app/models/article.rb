# == Schema Information
#
# Table name: articles
#
#  id         :bigint           not null, primary key
#  content    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_articles_on_user_id  (user_id)
#
class Article < ApplicationRecord
  validates :images, presence: true
  validates :images, length: { maximum: 10 } 
  validates :content, presence: true
  belongs_to :user
  has_many_attached :images
end
