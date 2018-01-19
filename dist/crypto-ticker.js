const cmc = "https://api.coinmarketcap.com/v1/ticker/?limit=10"
let tickers = {}
fetch(cmc)
  .then((resp) => resp.json())
  .then(function (data) {
    tickers = data
    for (let index = 0; index < tickers.length; index++) {
      // console.log(index)
      // console.log(tickers[index])
      var newTrHead = document.createElement("tr");
      if (index === 0) {
        for (const key in tickers[index]) {
          var newTh = document.createElement("th");
          newTh.innerHTML = key
          newTrHead.appendChild(newTh)
        }
        var thead = document.getElementById("thead");
        thead.appendChild(newTrHead)
      }


      var newTr = document.createElement("tr");
      for (const key in tickers[index]) {
        if (tickers[index].hasOwnProperty(key)) {
          const element = tickers[index][key];
          var newTd = document.createElement("td");
          newTd.innerHTML = element
          newTr.appendChild(newTd)
        }
      }
      var tbody = document.getElementById("tbody");
      tbody.appendChild(newTr)
    }
  }
  ).catch(function (error) {
    console.log(error)
  });