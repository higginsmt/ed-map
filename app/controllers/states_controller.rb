class StatesController < ApplicationController
  def index
    @states = State.all

    respond_to do |format|
      format.html
      format.json { render json: @states, root: false }
    end
  end
end
