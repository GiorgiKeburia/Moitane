import useFetch from "./hooks/use-fetch";
import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  const {
    data: bannersData,
    isLoading: bannersIsLoading,
    httpError: bannersError,
  } = useFetch("https://moitane-api.lemon.do/v1/Banners");

  const {
    data: shopsData,
    isLoading: shopsIsLoading,
    httpError: shopsError,
  } = useFetch("https://moitane-api.lemon.do/v1/Shops");

  console.log(bannersData);
  console.log(shopsData);

  return <Header />;
}

export default App;
