FROM ubuntu as builder

RUN apt-get update -y && apt-get install ruby-full build-essential zlib1g-dev git -y
# We need to expand the PATH to include the RubyGems executables
ENV PATH="$PATH:/root/gems/bin"
ENV GEM_HOME="/root/gems"
RUN gem install jekyll bundler

FROM builder as compile
WORKDIR /app
COPY . .
RUN bundle install
RUN bundle exec jekyll build

FROM docker.io/nginx:alpine as runtime
COPY --from=compile /app/_site /usr/share/nginx/html
COPY nginx/etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf