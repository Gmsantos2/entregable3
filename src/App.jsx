import axios from "axios";
import { useEffect, useState } from "react";
import { getRandomNumber } from "./helpers/random";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";

function App() {
  const [locationInfo, setLocationInfo] = useState(null)
  useEffect(() => {
    const randomDimension = getRandomNumber(126);
    axios.get(`https://rickandmortyapi.com/api/location/${randomDimension}`)
    .then(({data}) => setLocationInfo(data))
    .catch((err)  => console.log(err)) 
  }, [])
  return (
    <main  className="bg-[url('/bg.png')] bg-repeat-y min-h-screen ">
      {
        locationInfo ? ( 
        <section>
        <Location locationInfo={locationInfo} setLocationInfo={setLocationInfo}/> 
        <ResidentList residents={locationInfo?.residents ?? []}/>
        </section>
        ): 
        (
          <h1 className="text-white font-firaCode text-xl">Loading...</h1>
        )
      }
      
    </main>
  );
}

export default App;
