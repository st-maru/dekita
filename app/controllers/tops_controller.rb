class TopsController < ApplicationController
  before_action :move_to_tasks
  before_action :set_q, only: [:index, :search]

  def index
  end

  def search
    @results = @q.result.page(params[:page]).per(10)
  end

  private

  def move_to_tasks
    redirect_to tasks_path if user_signed_in?
  end

  def set_q
    @q = Task.ransack(params[:q])
  end
end
