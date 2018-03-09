const fetch = require('node-fetch');

function getValues() {
  const URIS = [
    'https://api.coindesk.com/v1/bpi/currentprice/USD.json',
    'https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday',
  ];
  return new Promise((resolve, reject) => {
    const values = URIS.map(uri => {
      return fetch(uri)
        .then(res => res.json())
        .catch(err => reject(err));
    });
    Promise.all(values)
      .then(values => {
        resolve(values);
      })
      .catch(err => {
        reject(err);
      });
  });
}

module.exports = {getValues};
