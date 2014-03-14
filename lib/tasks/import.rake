require "#{Rails.root}/lib/import_ed"

namespace :import do
  desc "Import state education data"
  task ed: :environment do
    ImportEd.import
  end

end