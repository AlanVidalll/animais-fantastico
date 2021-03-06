export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass
  }
  
  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]);
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
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