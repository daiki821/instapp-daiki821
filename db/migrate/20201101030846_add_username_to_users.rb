class AddUsernameToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :accountname, :string, null: false
    add_index :users, :accountname, :unique => true
  end
end
