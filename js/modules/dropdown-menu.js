import outsideClick from './outsideClick.js'

export default function initDropdownMenu() {

  const dropdownMenus = document.querySelectorAll('[data-dropdown]')


  dropdownMenus.forEach((menu) => {
    //menu.addEventListener('click', handleClick);
    //menu.addEventListener('touchstart', handleClick);
    // posso criiar um evento por vez ou com array usando foreach como está abaixo.
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    })
  })

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active')
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }

}