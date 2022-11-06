import {renderAdverts, renderMap} from'./map.js';
import { activateForm, disableForm } from './form.js';
import { disableFilters } from './map-filters.js';
import {getData} from './server.js';
import { showServerError } from './messages.js';

const createAdverts = getData(renderAdverts, showServerError);

disableForm();
disableFilters();

const mapLoaded = renderMap();

const handleActiveState = (status)=>{
  if(status){
    activateForm();
    createAdverts(); }
};

handleActiveState(mapLoaded);


