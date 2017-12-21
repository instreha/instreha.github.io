# Default task is to build the site
task default: :build

task :build do
  sh "jekyll", "build"
end

task :server do
  sh "serveit", "-s", "_site", "jekyll build"
end
