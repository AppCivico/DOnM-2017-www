import initMap from './maps';
import initComparison from './comparator';
import initFilter from './filter';
import initToggleBox from './togglebox';
import initProgressHover from './showProgressLegend';
import normalizeTabControllerClick from './tabs';


initFilter();
initComparison();
initToggleBox();
initProgressHover();
normalizeTabControllerClick();

window.initMap = initMap;
