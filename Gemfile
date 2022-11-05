source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 3.9.2"
# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins
# If you have any plugins, put them here!
group :jekyll_plugins do
    gem "jekyll-paginate"
    gem "jekyll-feed"
    gem "jekyll-seo-tag"
    gem "jekyll-sitemap"
    gem "jekyll-redirect-from"
    gem "jekyll-mentions", "1.5.1"
    gem "jekyll-watch"
    gem "jekyll-tabs"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 2.0"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Custom gems
gem "webrick", "~> 1.7"
gem "beautiful-jekyll-theme", "5.0.0"

# Fix eventmachine on Windows (https://stackoverflow.com/a/65547010/14416954)
gem "eventmachine", "1.2.7", git: "https://github.com/eventmachine/eventmachine.git", tag: "v1.2.7"
