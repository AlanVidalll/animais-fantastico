export default function initTolltip() {

  const toolTip = document.querySelectorAll('[data-tolltip]');

  toolTip.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  })

  function onMouseOver(event) {
    const tooltipBox = criarTolltipBox(this);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave)
  }

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    }
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + 'px';
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
  }

  function criarTolltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label')
    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox)
    return tooltipBox;
  }
}