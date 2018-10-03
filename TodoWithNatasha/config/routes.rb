Rails.application.routes.draw do


  root to: 'static_pages#root'

  namespace :api, except: [:new], defaults: {format: :json} do
    resources :todos, except: [:new]
  end
end
