import { useState, useEffect } from "react/cjs/react.development";
import useFetch from "../../hooks/use-fetch";
import "./Main.css";
import Card from "./Card";

const Main = () => {
  const [shopsData, setShopData] = useState([]);

  const backImg = [
    "https://images.pexels.com/photos/1508666/pexels-photo-1508666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/1070979/pexels-photo-1070979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/375896/pexels-photo-375896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/375892/pexels-photo-375892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  ];

  const ifShopIsOpen = (arr) => {
    const today = new Date();
    const current = parseFloat(today.getHours() + "." + today.getMinutes());
    const currentDay = today.getDay();

    const shopStarts = parseFloat(
      arr[currentDay].from.slice(0, 5).replace(":", ".")
    );
    const shopEnds = parseFloat(
      arr[currentDay].to.slice(0, 5).replace(":", ".")
    );

    if (shopEnds > shopStarts) {
      if (current >= shopStarts && current <= shopEnds) {
        return true;
      } else {
        return false;
      }
    } else if (shopStarts > shopEnds) {
      if (current >= shopEnds && current <= shopStarts) {
        return true;
      } else {
        return false;
      }
    }
  };

  const {
    isLoading: shopsIsLoading,
    httpError: shopsError,
    sendRequest: fetchShops,
  } = useFetch();

  useEffect(() => {
    const transformShops = (shopObj) => {
      setShopData(shopObj);
    };
    fetchShops("https://moitane-api.lemon.do/v1/Shops", transformShops);
  }, [fetchShops]);

  return (
    <div className="main">
      <div className="main-head">
        <h1>პარტნიორი მაღაზიები</h1>
        <h3>აირჩიე მაღაზია</h3>
      </div>
      {shopsError && <p>Error wile fetchind Data</p>}
      <div className="cards">
        {!shopsIsLoading &&
          shopsData.shops.map((obj, i) => {
            return (
              <Card
                key={obj.id}
                name={obj.name}
                imgUrl={backImg[i]}
                fee={obj.deliveryFee}
                shopIsOpen={ifShopIsOpen(shopsData.shops[i].workingHours)}
                rating={obj.averageRating.toString().slice(0, 3)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Main;
