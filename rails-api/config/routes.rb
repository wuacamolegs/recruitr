Rails.application.routes.draw do
  scope module: 'api' do
    namespace :v1 do
      resources :positions, only: [:index, :show] do
        member do
          get :applications
        end
      end
    end
  end
end
