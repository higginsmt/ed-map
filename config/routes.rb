EdData::Application.routes.draw do
  get "states/index"
  root "states#index"
end
