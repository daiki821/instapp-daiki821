class AddUsernameToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :accountname, :string
    add_index :users, :accountname, :unique => true
  end
end
