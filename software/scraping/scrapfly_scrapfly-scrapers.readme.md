# ScrapFly Scrapers 🕷️

This repository contains educational example scrapers for popular web scraping targets using the [ScrapFly](https://scrapfly.io) web scraping API and Python.
Most Scrapers use a simple web scraping stack:
- Python version 3.10+
- [Scrapfly's Python SDK](https://github.com/scrapfly/python-scrapfly) for sending HTTP request, bypass blocking and parsing the HTML using the built-in [parsel](https://pypi.org/project/parsel/) selector.
- [asyncio](https://pypi.org/project/asyncio/) for writing concurrent code using the async/await syntax.
- [JMESPath](https://pypi.org/project/jmespath/) and [nested-lookup](https://pypi.org/project/nested-lookup/) for JSON parsing when needed.
- [loguru](https://pypi.org/project/loguru/) for logging.

To learn more about web scraping see our full tutorials on how to scrape these targets (and many others) see the [scrapeguide directory](https://scrapfly.io/blog/tag/scrapeguide/).

## List of Scrapers
Below is the list of available web scrapers for the supported domains along with their scrape guide, sample datasets, and status. 👇

    Domain
    Guide
    Sample Datasets
    Status

    Aliexpress.com
    How to Scrape Aliexpress.com (2025 Update)

        Product pages
        Search pages
        Product reviews

    Amazon.com
    How to Scrape Amazon.com Product Data and Reviews

        Product pages
        Search pages
        Product reviews

    BestBuy.com
    How to Scrape BestBuy Product, Offer and Review Data

        Sitemap pages
        Product pages
        Review pages
        Search pages

    Bing.com
    How to Scrape Bing Search with Python

        SERP data
        Keyword data
        Rich snippet data

    Booking.com
    How to Scrape Booking.com (2025 Update)

        Hotel pages
        Search pages

    Crunchbase.com
    How to Scrape Crunchbase in 2025

        Company pages
        Investor pages

    Domain.com.au
    How to Scrape Domain.com.au Real Estate Property Data

        Property pages
        Search pages

    Ebay.com
    How to Scrape Ebay Using Python (2025 Update)

        Product pages
        Product pages with variant
        Search pages

    Etsy.com
    How to Scrape Etsy.com Product, Shop and Search Data

        Product pages
        Shop pages
        Search pages

    Fashionphile.com
    How to Scrape Fashionphile for Second Hand Fashion Data

        Product pages
        Search pages

    Glassdoor.com
    How to Scrape Glassdoor (2025 update)

        Job pages
        Review pages
        Salary pages

    Goat.com
    How to Scrape Goat.com for Fashion Apparel Data in Python

        Product pages
        Search pages

    Goodreads.com

        Book pages
        Review pages
        List pages
        Search pages

    Google.com
    How to Scrape Google Search Results - How to Scrape Google Maps

        SERP data
        Keyword data
        Google Maps place URLs
        Google Maps place data

    Homegate.ch
    How to Scrape Homegate.ch Real Estate Property Data

        Property pages
        Search pages

    Idealista.com
    How to Scrape Idealista.com in Python - Real Estate Property Data

        Property pages
        Search pages
        Provinces pages

    Immobilienscout24.de
    How to Scrape Immobilienscout24.de Real Estate Data

        Property pages
        Search pages

    Immoscout24.ch
    How to Scrape Immoscout24.ch Real Estate Property Data

        Property pages
        Search pages

    Immowelt.de
    How to Scrape Immowelt.de Real Estate Data

        Property pages
        Search pages

    Indeed.com
    How to Scrape Indeed.com (2025 Update)

        Job pages
        Search pages

    Instagram.com
    How to Scrape Instagram in 2025

        User data
        All user posts
        Multi image post
        Video Post

    Leboncoin.fr
    How to Web Scrape Leboncoin.fr using Python

        Ad pages
        Search pages

    Nordstorm.com
    How to Scrape Nordstrom Fashion Product Data

        Product pages
        Search pages

    Realestate.com.au
    How to Scrape Realestate.com.au Property Listing Data

        Property pages
        Search pages

    Realtor.com
    How to Scrape Realtor.com - Real Estate Property Data

        Property pages
        Search pages
        Feed pages

    Reddit.com
    How to Scrape Reddit Posts, Subreddits and Profiles

        Post pages
        Subreddit pages
        User comment pages
        User post pages

    Redfin.com
    How to Scrape Redfin Real Estate Property Data in Python

        Property pages for sale
        Property pages for rent
        Search pages

    Rightmove.com
    How to Scrape RightMove Real Estate Property Data with Python

        Property pages
        Search pages

    Seloger.com
    How to Scrape Seloger.com - Real Estate Listing Data

        Property pages
        Search pages

    Shopify stores
    How to Scrape Shopify Stores for Products, Prices, and Variants

        Storefront preflight
        Catalog products.json
        Collection products
        Product pages
        Sitemap product urls

    Similarweb.com
    How to Scrape SimilarWeb Website Traffic Analytics

        Website pages
        Website compare pages
        Trend pages
        Sitemaps

    Stockx.com
    How to Scrape StockX e-commerce Data with Python

        Product pages
        Search pages

    Threads.net
    How to scrape Threads by Meta using Python (2025 Update)

        Profile pages
        Thread pages

    TikTok.com
    How To Scrape TikTok in 2025

        Comment data
        Post data
        Profile data
        Channel data
        Search data

    Tripadvisor.com
    How to Scrape TripAdvisor.com (2025 Updated)

        Hotel pages
        Search pages
        Location pages

    Trustpilot.com
    How to Scrape Trustpilot.com Reviews and Company Data

        Company pages
        Reviews pages
        Search pages

    Twitter(X).com
    How to Scrape X.com (Twitter) using Python (2025 Update)

        Profile pages
        Tweet pages

    VestiaireCollective.com
    How to Scrape Vestiaire Collective for Fashion Product Data

        Product pages
        Search pages

    G2.com
    How to Scrape G2 Company Data and Reviews

        Review pages
        Search pages
        Alternatives pages

    Walmart.com
    How to Scrape Walmart.com Product Data (2025 Update)

        Product pages
        Search pages

    Wellfound.com
    How to Scrape Wellfound Company Data and Job Listings

        Company pages
        Search pages

    Linkedin.com
    How to Scrape LinkedIn in 2025

        Profile pages
        Company pages
        Job search pages
        Job pages
        Article pages

    Yellowpages.com
    How to Scrape YellowPages.com in 2025

        Business pages
        Search pages

    Yelp.com
    How to Web Scrape Yelp.com (2025 update)

        Business pages
        Review pages
        Search pages

    YouTube.com
    How to Scrape YouTube in 2025

        Channel videos
        Channel metadata
        Channel videos
        Video metadata
        Video comments
        Shorts' metadata

    Zillow.com
    How to Scrape Zillow Real Estate Property Data in Python

        Property pages
        Search pages

    Zoominfo.com
    How to Scrape Zoominfo Company Data (2025 Update)

        Company pages
        Directory pages
        FAQs data

    Zoopla.co.uk
    How to Scrape Zoopla Real Estate Property Data in Python

        Property pages
        Search pages

## Fair Use and Legal Disclaimer

This repository contains _educational_ reference material to illustrate how accessible web scraping can be and the provided programs are not intented to be used in web scraping production.
That being said, Scrapfly team is constantly updating and improving all of this code for optimal experience.

Scrapfly does not offer legal advice and as always, consult a lawyer when creating programs that interact with other people's websites though here's a good general intro of what NOT to do:
- Do not store PII (personally identifiable information) of EU citizens who are protected by GDPR.
- Do not scrape and repurpose entire public datasets which can be protected by database protection laws in some countries.
- Do not scrape at rates that could damage the website and scrape only publicly available data.
