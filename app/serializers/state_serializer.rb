class StateSerializer < ActiveModel::Serializer
  attributes :name, :abbrev, :hs_rate, :hs_rank, :ba_rate, :ba_rank, :adv_rate, :adv_rank, :fill_color

    def fill_color
      case object.hs_rate
      when 0..85 then
        "LOW"
      when 85..90 then
        "MEDIUM"
      when 90..100 then
        "HIGH"
      else
        "UNDEFINED"
      end
    end

end
