// eslint-disable-next-line
import Prism from 'prismjs'; // Prism auto initiate itself
import initMap from './maps';
import initComparison from './comparator';
import initFilter from './filter';
import initToggleBox from './togglebox';
import initProgressHover from './showProgressLegend';
import normalizeTabControllerClick from './tabs';
import initDownload from './download';


initFilter();
initComparison();
initToggleBox();
initProgressHover();
initDownload();
normalizeTabControllerClick();

window.initMap = initMap;
