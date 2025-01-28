## The Robots.txt File

### Overview

The `robots.tx`t file is a plain text file used to give instructions to web crawlers (robots or bots) about **which parts of a website they are allowed to crawl and index**. It is part of the **Robots Exclusion Protocol** and is commonly placed in the root directory of a website.

This file provides control of search engine behavior by specifying which pages or sections of a site to include or exclude from their indexes. Furthermore, this can stop bots from accessing or indexing non-public or sensitive areas, such as admin pages or scripts.

Search engine optimization is improved by specifying important and relevant pages to crawl, rather than wasting resources on unimportant or duplicate content.

Temporary blocking can be enabled during development to prevent incomplete or work-in-progress sites from being indexed.

The `robots.txt` file **does not enforce restrictions**; it relies on bots voluntarily adhering to the rules. <ins>Malicious bots can still ignore it</ins>.

The `robots.txt` file is publicly accessible, so sensitive data should not be placed in areas only "hidden" by robots.txt. If no `robots.txt` file is found by a bot, it assumes full access to crawl the website.

### Basic Structure

```
User-agent: *
Disallow: /admin/
Disallow: /private/
Allow: /public-info/
Sitemap: https://example-site.com/sitemap.xml
```
* `User-agent: *`: Applies the rules to all bots.
* `Disallow: /admin/`: Blocks bots from crawling the `/admin/` directory.
* `Disallow: /private/`: Blocks bots from crawling the `/private/` directory.
* `Allow: /public-info/`: Explicitly allows access to /public-info/ (even if its parent directory is disallowed).
* `Sitemap`: Indicates where the XML sitemap can be found for better indexing.