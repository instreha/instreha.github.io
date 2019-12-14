# Default task is to build the site
task default: :build

task :build do
  sh "bundle", "exec", "jekyll", "build", "--config", "_config.yml,_config.dev.yml"
end

task :serve do
  sh "serveit", "-s", "_site", "bundle exec jekyll build --config _config.yml,_config.dev.yml"
end

task :clean do
  sh "bundle", "exec", "jekyll", "clean"
end
