export default function initAnimaNumero() {

  function animaNumeros() {

    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start += incremento
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer)
        }
      }, 25 * Math.random())
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }
  const obeserverTarget = document.querySelector('.numeros');
  const observer = new MutationObserver(handleMutation);

  observer.observe(obeserverTarget, {
    attributes: true
  });
}