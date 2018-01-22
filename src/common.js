const superagent = require('superagent');
const eventproxy = require('eventproxy');
const fs = require('fs');
const path = require('path');

require('superagent-proxy')(superagent);
const ep = eventproxy();

//Get the pages number
function getPageUrls(pageUrls, sites) {
  sites.forEach(site => {
    for (let i = 1; i <= (site.page ? site.page : 1); i++) {
      let pageUrl = {};
      pageUrl.name = site.name ? site.name : 'undefined';
      pageUrl.pageItem = site.pageItem ? site.pageItem : 'undefined';
      pageUrl.url = (site.startUrl ? site.startUrl : '') + i + (site.endUrl ? site.endUrl : '');
      pageUrls.push(pageUrl);
    };
  });
};

//Http request
function request(url) {
  return new Promise((resolve, reject) => {
    superagent.get(url)
      .end((err, res) => {
        if (err) {
          console.log(err)
        }
        resolve(res)
      });
  });
};

module.exports = {
  getPageUrls,
  request
};


//Create path and file
// mkdirsSync(dirnameStr) {
//   if (fs.existsSync(dirnameStr)) {
//     return true;
//   } else {
//     if (common.mkdirsSync(path.dirname(dirnameStr))) {
//       fs.mkdirSync(dirnameStr);
//       return true;
//     }
//   }
// }
// createFile(pathStr, data) {
//   let dirname = path.dirname(pathStr)
//   common.mkdirsSync(dirname)
//   fs.writeFile(pathStr, data)
// }



//Determine proxy is available
// isUsable(name, stite, pageNum, pageItem) {
//   ep.after(stite, pageNum * pageItem, function (dlUrls) {
//     dlUrls.forEach(function (dlUrl) {
//       superagent.get('http://ip.chinaz.com/getip.aspx')
//         .set('User-Agent', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36')   
//         .proxy(dlUrl)
//         .timeout(3000)
//         .end((err, res) => {
//           if (res === undefined) {
//             console.log(dlUrl + '已失效');
//             return
//           } else {
//             let proxys = [];
//             let proxy = {};
//             proxy.name = name;
//             proxy.url = res;
//             proxys.push(proxy);
//             common.createFile('./proxy/ipUsable.json', JSON.stringify(proxys));
//           }
//         })
//     })
//   })
// }
