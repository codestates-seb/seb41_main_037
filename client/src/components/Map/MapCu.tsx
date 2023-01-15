import React, { MutableRefObject, useEffect, useRef } from "react";
import styled from "styled-components";
import Location from "./Location";
import LocationCu from "./LocationCu";

declare global {
  interface Window {
    kakao: any;
  }
}

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 400px;
  font-size: 12px;
`;

const MapCu = () => {
  const { kakao } = window;
  const location = Location();
  const ref = useRef<HTMLElement | null>(null);
  const data_cu: any = LocationCu();
  // console.log(data_cu);

  const location_cu: any = data_cu.map((e: any) => ({
    content: `${e.place_name}:${e.phone}`,
    latlng: new kakao.maps.LatLng(e.y, e.x),
  }));
  // console.log(location_cu);

  useEffect(() => {
    kakao.maps.load(() => {
      if (typeof location !== "string") {
        const container = document.getElementById("mapCu");
        const options = {
          center: new kakao.maps.LatLng(location.latitude, location.longitude),
          level: 4,
        };

        let map = new kakao.maps.Map(container as HTMLElement, options);
        (ref as MutableRefObject<any>).current = map;
        const imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        for (let i = 0; i < location_cu.length; i++) {
          // 마커 이미지의 이미지 크기 입니다
          let imageSize = new kakao.maps.Size(24, 35);

          // 마커 이미지를 생성합니다
          let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

          // 마커를 생성합니다
          let markerTest = new kakao.maps.Marker({
            position: location_cu[i].latlng, // 마커를 표시할 위치
            image: markerImage, // 마커 이미지
          });
          markerTest.setMap(map);

          // 마커에 표시할 인포윈도우를 생성
          let infowindow = new kakao.maps.InfoWindow({
            content: location_cu[i].content, // 인포윈도우에 표시할 내용
          });

          // 마커에 mouseover 이벤트, mouseout 이벤트를 등록
          // 이벤트 리스너로는 클로저를 만들어 등록
          // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록
          kakao.maps.event.addListener(
            markerTest,
            "mouseover",
            makeOverListener(map, markerTest, infowindow)
          );
          kakao.maps.event.addListener(
            markerTest,
            "mouseout",
            makeOutListener(infowindow)
          );
        }

        let markerPosition = new kakao.maps.LatLng(
          location.latitude,
          location.longitude
        );
        // console.log(markerPosition);
        let marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      }
    });
  }, [location, location_cu, kakao.maps]);
  return (
    <>
      <MapContainer id="mapCu" />
    </>
  );
};

export default MapCu;

function makeOverListener(map: any, marker: any, infowindow: any) {
  infowindow.close();
  return function () {
    infowindow.open(map, marker);
  };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
function makeOutListener(infowindow: any) {
  return function () {
    infowindow.close();
  };
}
