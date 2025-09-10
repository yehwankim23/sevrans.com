const latLng = new naver.maps.LatLng(37.5277, 126.7017);

const map = new naver.maps.Map("map", {
  center: latLng,
});

const marker = new naver.maps.Marker({
  position: latLng,
  map: map,
});
