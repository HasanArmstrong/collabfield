class Post < ApplicationRecord
  #Every post is going to belong to a category and it's author (user)
  default_scope -> { includes(:user).order(created_at: :desc) }
  belongs_to :user
  belongs_to :category
end
