class Api::TasksController < ApplicationController 
  before_action :require_user
  # before_action :require_notes

  def index
    if params[:list_id]
      @tasks = current_user.tasks.where(list_id: params[:list_id])
    else
      @tasks = current_user.tasks
    end
    # @tasks = List.find(params[:list_id]).tasks.find_by(params[:id])
    # @tasks = Task.all
    # render :index
  end

  def show
    @task = current_user.tasks.find_by(id: params[:id])
    # @task = List.find_by(params[:list_id])tasks.find_by(params[:id])
    render :show
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = List.find(params[:list_id]).tasks.find(params[:id])
    # @task.due = Date.parse(task_params[:due])
    
    params[:task][:notes] ||= []
    
    if @task.update(task_params)
      # task_params[:notes] = task_params[:notes] ||= []
      # debugger
      render :show
    else
      render json: @task.errors.full_messages
    end
  end

  def destroy
    @task = List.find(params[:list_id]).tasks.find(params[:id])
    @task.destroy
    # render :show
  end

  private
  def task_params
    params.require(:task).permit(:id, :task_name, :list_id, :start, :due, :completed, notes: [])
  end

  # def require_notes
  #   task_params[:notes] = task_params[:notes] ||= []  
  # end

end