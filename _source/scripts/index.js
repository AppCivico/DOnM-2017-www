import initMap from './maps';
import initComparison from './comparator';
import initFilter from './filter';
import initToggleBox from './togglebox';

initFilter();
initComparison();
initToggleBox();
window.initMap = initMap;
