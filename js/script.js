
import ScrollSuave from './modules/scroll-suave.js'
import Accordion from './modules/accordion.js'
import TabNav from './modules/tab-nav.js'
import initModal from './modules/modal.js'
import initTolltip from './modules/tooltip.js'
import initDropdownMenu from './modules/dropdown-menu.js'
import initMenuMobile from './modules/menu-mobile.js'
import initFuncionamento from './modules/funcionamento.js'
import initFetchAniamis from './modules/fetch-animais.js'
import initFetchBiticoin from './modules/fetch-biticoin.js'
import initAnimacaoScroll from './modules/scroll-animacao.js'


const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^= "#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init();

const tabNav  = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

initModal();
initTolltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAniamis();
initFetchBiticoin();
initAnimacaoScroll();