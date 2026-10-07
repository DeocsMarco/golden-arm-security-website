// City-level office markers; owner-confirmed offices, OSM/Nominatim city centroids.
// This enhances the existing assessment map without changing its fifteen areas.
export const OFFICES=Object.freeze([
 Object.freeze({id:'san-juan',name:'San Juan City',role:'Head office · Luzon',lat:14.6044363,lng:121.0299469,dx:-48,dy:-28}),
 Object.freeze({id:'iloilo',name:'Iloilo City',role:'Regional office · Visayas',lat:10.6932884,lng:122.5732604,dx:-66,dy:-28}),
 Object.freeze({id:'cagayan-de-oro',name:'Cagayan de Oro',role:'Regional office · Mindanao',lat:8.4756417,lng:124.6421532,dx:-48,dy:-28})
]);
export function projectOffice({lat,lng}){
 const bounds={minLng:116.969531,maxLng:126.593359,minLat:5.060205,maxLat:20.84126};
 return {x:(22+(lng-bounds.minLng)/(bounds.maxLng-bounds.minLng)*376)/420*100,y:(22+(bounds.maxLat-lat)/(bounds.maxLat-bounds.minLat)*636)/680*100};
}
export function enhanceOfficeMap(container){
 const stage=container.querySelector('.service-map__stage');
 if(!stage||stage.querySelector('.cc-office-markers'))return false;
 const panel=container.closest('.service-access-map-panel');if(!panel)return false;
 const group=document.createElement('div');group.className='cc-office-markers';group.setAttribute('role','group');group.setAttribute('aria-label','Golden Arm office cities');
 const status=document.createElement('p');status.className='cc-office-selection';status.setAttribute('role','status');status.setAttribute('aria-live','polite');status.hidden=true;
 const legend=document.createElement('p');legend.className='cc-office-legend';legend.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z"/></svg><span>Office city (approximate)</span><span class="cc-office-legend-dot" aria-hidden="true"></span><span>Assessment area</span>';
 const clear=()=>{for(const b of group.querySelectorAll('button'))b.setAttribute('aria-pressed','false');status.hidden=true;status.textContent='';};
 for(const office of OFFICES){
  const point=projectOffice(office);const b=document.createElement('button');b.type='button';b.className='cc-office-marker';b.dataset.office=office.id;b.setAttribute('aria-label',`${office.name} — ${office.role}. City-level office location.`);b.setAttribute('aria-pressed','false');b.title=`${office.name} — ${office.role}`;
  b.style.setProperty('--office-x',point.x+'%');b.style.setProperty('--office-y',point.y+'%');b.style.setProperty('--office-dx',office.dx+'px');b.style.setProperty('--office-dy',office.dy+'px');b.style.setProperty('--office-line',Math.hypot(office.dx,office.dy)+'px');b.style.setProperty('--office-angle',Math.atan2(-office.dy,-office.dx)*180/Math.PI+'deg');
  b.innerHTML='<span class="cc-office-leader" aria-hidden="true"></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z"/></svg>';
  b.addEventListener('click',()=>{clear();const active=stage.querySelector('[data-area-index][aria-pressed="true"]');if(active)active.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}));b.focus({preventScroll:true});b.setAttribute('aria-pressed','true');status.textContent=`${office.name} — ${office.role}. City-level location, not an exact office address.`;status.hidden=false;});
  b.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();clear();b.focus({preventScroll:true});}});
  group.append(b);
 }
 stage.append(group);stage.setAttribute('aria-label','Philippine map with fifteen assessment areas and three office cities');
 container.insertAdjacentElement('afterend',legend);legend.insertAdjacentElement('afterend',status);
 for(const area of stage.querySelectorAll('[data-area-index]')){area.addEventListener('click',clear);area.addEventListener('keydown',event=>{if(['Enter',' ','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Home','End'].includes(event.key))clear();});}
 return true;
}
if(typeof document!=='undefined'){
 const start=()=>{const container=document.querySelector('#service-access-map');if(!container||enhanceOfficeMap(container))return;const observer=new MutationObserver(()=>{if(enhanceOfficeMap(container))observer.disconnect();});observer.observe(container,{childList:true,subtree:true});window.addEventListener('pagehide',()=>observer.disconnect(),{once:true});};
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
}
