# Website

Contains the webpage that is displayed at parchmentmc.net and parchmentmc.org

## Usage

### Installation

Install the Bundler and Jekyll gems by following the [installation instructions at Jekyll](https://jekyllrb.com/docs/installation/).

Install the gems used by the website:

```text
bundle install
```

### Building

For building the site, run the following command and find the site files under the `_site` folder.

```text
bundle exec jekyll build
```

### Development

For site development, the following command builds the site on each change and serves the site through a local webserver.

```text
bundle exec jekyll serve
```

Note that changes to the `_config.yml` file requires a full restart of Jekyll (exit and rerun the above command).
