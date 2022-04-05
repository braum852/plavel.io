Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users
      resources :places
      resources :trip_users
      resources :trips
      resources :cities
      resources :google, only: [:create]

    end
  end

end