Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'articles#index'

  resources :articles do
    resource :like, only: [:show, :create, :destroy]

    resources :comments, only: [:index, :new, :create, :destroy]
  end

  namespace :api, defaults: {format: :json}  do
    scope '/articles/:article_id' do
      resources :comments, only: [:index]
    end
  end

  resource :profile, only: [:show, :edit, :update]
end
