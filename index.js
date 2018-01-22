const cheerio = require('cheerio');

const common = require('./src/common');
const db = require('./constants/db');

let testUrl = 'http://api.douban.com/v2/movie/in_theaters?city=%E4%B8%8A%E6%B5%B7&count=2'

//获取代理池
// let proxyPages = []
// common.getPageUrls(proxyPages, db.proxySites)
// console.log('获取代理池-列表页 √');
let proxys = [];
switch (name) {
  case '开心代理':
    common.request(testUrl)
      .then(res => {
        let $ = cheerio.load(res.text);
        for (let i = 0; i < this.pageItem; i++) {
          let ip = $('tbody tr').eq(i).find('td').first().text();
          let port = $('tbody tr').eq(i).find('td').eq(1).text();
          let dlUrl = 'http://' + ip + ':' + port;
          proxys.push(dlUrl)
        };
      });
    break;

}
