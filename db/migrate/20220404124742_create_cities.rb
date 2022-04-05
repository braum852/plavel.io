class CreateCities < ActiveRecord::Migration[6.1]
  def change
    create_table :cities do |t|
      t.string :name
      t.decimal :lat
      t.decimal :lng
      t.references :trip, null: false, foreign_key: true

      t.timestamps
    end
  end
end
