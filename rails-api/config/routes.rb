Rails.application.routes.draw do
  scope module: 'api' do
    namespace :v1 do
      resources :positions, only: [:index, :show, :create] do
        member do
          get :applications
        end
      end
      resources :hiring_teams, only: [:index] do
        member do
          get :recruiters
        end
      end
      resources :job_applications, only: [:show, :create, :update]
    end
  end
end
