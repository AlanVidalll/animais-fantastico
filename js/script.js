
import ScrollSuave from './modules/scroll-suave.js'
import initAnimacaoScroll from './modules/scroll-animacao.js'
import initAccordion from './modules/accordion.js'
import initTabNav from './modules/tab-nav.js'
import initModal from './modules/modal.js'
import initTolltip from './modules/tooltip.js'
import initDropdownMenu from './modules/dropdown-menu.js'
import initMenuMobile from './modules/menu-mobile.js'
import initFuncionamento from './modules/funcionamento.js'
import initFetchAniamis from './modules/fetch-animais.js'
import initFetchBiticoin from './modules/fetch-biticoin.js'


const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^= "#"]');
scrollSuave.init();
initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initTolltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAniamis();
initFetchBiticoin();