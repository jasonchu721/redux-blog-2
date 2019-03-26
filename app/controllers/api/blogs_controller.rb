class Api::BlogsController < ApplicationController
  before_action :set_blog, only: [:show, :update, :destroy]

  def index
    render json: Blog.all
  end 

  def show 
    render json: @blog 
  end 

  def update 

    if @blog.update(blog_params)
      render json: @blog 
    else 
      render json @blog_errors
    end 
  end 

  def create
    blog = Blog.create(blog_params)
      if blog.save
        render json: blog
      else 
        render json: blog.blog_errors
      end 
  end 

  def destroy 
    @blog.destroy
  end

  private 

  def blog_params 
    params.require(:blog).permit(:name, :body)
  end 

  def set_blog 
    @blog = Blog.find(params[:id])
  end 

end
