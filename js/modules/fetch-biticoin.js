export default function fetchBiticoin(url, target) {

  fetch(url).then((response) =>
    response.json()
  ).then((biticoin) => {
    const btcPreco = document.querySelector(target)
    btcPreco.innerText = (1000 / biticoin.BRL.sell).toFixed(4);
  }).catch((error) => {
    console.log(Error(error));
  })
}