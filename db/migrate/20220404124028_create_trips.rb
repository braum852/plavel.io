class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string :name
      t.string :create_trips
      t.string :city_name
      t.string :start_date
      t.string :end_date
      t.string :destination

      t.timestamps
    end
  end
end
