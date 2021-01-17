export default function initFetchBiticoin() {

  fetch('https://www.blockchain.com/ticker').then((response) =>
    response.json()
  ).then((biticoin) => {
    const btcPreco = document.querySelector('.btc-preco')
    btcPreco.innerText = (1000 / biticoin.BRL.sell).toFixed(4);
  }).catch((error) =>{
  console.log(Error(error));
  })
}