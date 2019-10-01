class Post < ApplicationRecord
    #Every post is going to belong to a category and it's author (user)
    belongs_to :user
    belongs_to :category
end
