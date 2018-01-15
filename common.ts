const superagent = require('superagent');
require('superagent-proxy')(superagent);
const eventproxy = require('eventproxy');
const ep = eventproxy();

class Common {
  constructor() { };

  //Get pageUrls
  getPageUrls(sites, pageUrls) {
    sites.forEach(site => {
      for (let i = 1; i <= (site.num ? site.num : 1); i++) {
        let pageUrl = {};
        pageUrl.name = site.name ? site.name : 'undefined';
        pageUrl.pageNum = site.pageNum;
        pageUrl.pageItem = site.pageItem;
        pageUrl.url = (site.startUrl ? site.startUrl : '') + i + (site.endUrl ? site.endUrl : '');
        pageUrls.push(pageUrl);
      };
    });
  };

  //http request

};
const common = new Common();
exports.c = common;