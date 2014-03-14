class CreateStates < ActiveRecord::Migration
  def change
    create_table :states do |t|
      t.string :name
      t.float :hs_rate
      t.integer :hs_rank
      t.float :ba_rate
      t.integer :ba_rank
      t.float :adv_rate
      t.integer :adv_rank

      t.timestamps
    end
  end
end
