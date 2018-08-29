import initMap from './maps';
import initComparison from './comparator';
import initFilter from './filter';
import initToggleBox from './togglebox';
import initProgressHover from './showProgressLegend';

initFilter();
initComparison();
initToggleBox();
initProgressHover();

window.initMap = initMap;
