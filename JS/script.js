let center = [55.79421591012304,37.59262661010866];
function init(){
    let map = new ymaps.Map('map1', {
        center: center,
        zoom: 16
    });

let placemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: 'Images/Other/res1.svg',
    iconImageSize: [60, 60],
    iconImageOffset: [-30, -58]
});
map.geoObjects.add(placemark);
}
ymaps.ready(init);