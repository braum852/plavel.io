class CreatePlaces < ActiveRecord::Migration[6.1]
  def change
    create_table :places do |t|
      t.string :name
      t.string :address
      t.string :phone_number
      t.decimal :lat
      t.decimal :lng
      t.string :photo
      t.string :google_url
      t.string :url
      t.references :city, null: false, foreign_key: true

      t.timestamps
    end
  end
end
