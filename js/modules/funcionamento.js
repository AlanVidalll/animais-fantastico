export default function initFuncionamento() {

  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}


























/*const agora = new Date();
const futuro = new Date('Dec 24 2021 23:45');

console.log(agora);
console.log(agora.getDate() + ': dia do mês');
console.log(agora.getDay() + ': dia da semana de 0 à 6,  é igual a domingo e assim sucessivamente!');
console.log(agora.getMonth() + ': mês do ano');


console.log(futuro);
const diasAgora = transformarDias(agora.getTime());
const diasFuturo = transformarDias(futuro.getTime());

function transformarDias(tempo) {
  return tempo / (24 * 60 * 60 * 1000)
}
console.log(Math.floor(transformarDias(agora.getTime())));

console.log(Math.floor(diasFuturo - diasAgora));*/