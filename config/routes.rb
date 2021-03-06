require 'sidekiq/web'

Rails.application.routes.draw do
  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?
  mount Sidekiq::Web => '/sidekiq' if Rails.env.development?


  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'articles#index'

  resource :timeline, only: [:show]

  resources :articles do
    resource :like, only: [:show, :create, :destroy]

    resources :comments, only: [:index, :create, :destroy]
  end

  resources :accounts, only: [:show] do
    resource :follows, only: [:show, :create]
    resource :unfollows, only: [:create]

    resources :followings, only: [:index]
    resources :followers, only: [:index]
  end

  resource :profile, only: [:show, :edit, :update]
 
end