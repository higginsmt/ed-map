require 'csv'
require_relative 'states'

class ImportEd
  def self.import
    State.delete_all
    data =  CSV.read("#{Rails.root}/data/ed_data.csv")
    data.each do |row|
        state_name = row[0]
        state_abbrev = STATES[state_name]
        puts "State is #{row[0]}"
        State.create!(name: state_name, hs_rate: row[1].gsub(/%/,'').to_f, hs_rank: row[2], ba_rate: row[3].gsub(/%/,'').to_f, ba_rank: row[4], adv_rate: row[5].gsub(/%/,'').to_f, adv_rank: row[6], abbrev: state_abbrev)
    end
  end
end
