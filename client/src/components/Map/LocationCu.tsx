// import React from "react";
import { useState, useMemo } from "react";
import Location from "./Location";

const LocationCu = () => {
  const [arr, setArr] = useState<object[]>([]);
  const location = Location();
  const { kakao } = window;
  const places = new kakao.maps.services.Places();

  const callback = (result: any, status: any) => {
    if (status === kakao.maps.services.Status.OK) {
      setArr(result);
    }
  };

  useMemo(() => {
    if (typeof location !== "string") {
      places.keywordSearch("CU", callback, {
        location: new kakao.maps.LatLng(location.latitude, location.longitude),
      });
    }
  }, [location]);
  return arr;
};

export default LocationCu;
