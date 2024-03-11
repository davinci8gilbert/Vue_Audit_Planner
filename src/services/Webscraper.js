import http from "../http-common.js";

class Webscraper {
    getHeadline(url,selector){
        return http.get(`/scraper?url=${encodeURIComponent(url)}&selector=${encodeURIComponent(selector)}`)
    }

    getWebsiteImageVid(url,selector){
        return http.get(`/scraperimgvid?url=${encodeURIComponent(url)}&selector=${encodeURIComponent(selector)}`)
    }

    getHeadlineLink(url,selector){
        return http.get(`/scraperlink?url=${encodeURIComponent(url)}&selector=${encodeURIComponent(selector)}`)
    }
}

export default new Webscraper();
