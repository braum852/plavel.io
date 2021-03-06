class Api::V1::PlacesController < ApplicationController
  before_action :set_place, only: [:show, :update, :destroy]

  
  def index
    @places = Place.all
    render json: @places
  end
  # GET /places

  
  def show
    render json: @place
  end
  # GET /places/1

  
  def create
    @place = Place.new(place_params)

    if @place.save
      render json: @place, status: :created
    else
      render json: @place.errors, status: :unprocessable_entity
    end
  end
  # POST /places

  # PATCH/PUT /places/1
  def update
    if @place.update(place_params)
      render json: @place
    else
      render json: @place.errors, status: :unprocessable_entity
    end
  end

  # DELETE /places/1
  def destroy
    @place.destroy(params[:id])
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_place
    @place = Place.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def place_params
    params.require(:place).permit(:name, :address, :phone_number, :lat, :lng, :photo, :place_id, :google_url, :url, :trip_id, :city_id)
  end
end
