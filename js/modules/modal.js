export default class Modal {

  constructor(btnAbrir, btnFechar, containerModal) {
    this.botaoAbrir = document.querySelector(btnAbrir)
    this.botaoFechar = document.querySelector(btnFechar)
    this.containerModal = document.querySelector(containerModal)

    /*bind this ao callback para 
    fazer refência ao objeto da classe*/

    this.eventoToggleModal = this.eventoToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }
  // abre ou fecha o modal.
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // adiciona o evento de toggle ao modal
  eventoToggleModal(event){
    event.preventDefault();
    this.toggleModal();

  }

 // fecha o  modal ao clicar do lado de fora.
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

 // adiciona os eventos aos elementos do modal.
  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventoToggleModal);
    this.botaoFechar.addEventListener('click', this.eventoToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}