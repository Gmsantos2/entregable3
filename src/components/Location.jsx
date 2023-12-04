import { IconSearch } from "@tabler/icons-react";
import axios from "axios";

const Location = ({ locationInfo, setLocationInfo }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const newLocationId = event.target.newLocation.value;
        axios
            .get(`https://rickandmortyapi.com/api/location/${newLocationId}`)
            .then(({ data }) => setLocationInfo(data))
            .catch((err) => console.log(err));
    }
    return (
        <section >
            <div className="w-screen h-[290px] ">
                <div className="relative translate-y-[-2%] left-1/2 
                -translate-x-1/2 w-[745px] h-[322px] ">
                <img className="fixed" src="/portal.svg" alt="" />
                </div>
              
                <img className="absolute top-10 left-1/2 
                -translate-x-1/2 w-[340px] h-auto mx-auto" src="/logo.png" alt="" />
            
            </div>
            <form className="flex justify-center" onSubmit={handleSubmit} >
                <div className="flex p-4 items-center justify-center">
                    <input
                        className="bg-black/60 text-white text-base font-medium font-firaCode border-green-400 border-2 pt-2 pb-2 pl-6 pr-6"
                        type="text"
                        name="newLocation"
                        placeholder="Type a location ID..."
                        required
                    />
                    <button type="submit">
                        <div className="flex gap-4 items-center  bg-green-600 p-2   
                        border-green-400 border-t-2 border-r-2 border-b-2">
                        <span className="hidden sm:block text-white text-xs font-medium font-firaCode">Search</span>
                        <IconSearch className="text-white" />
                        </div>
                        
                    </button>
                </div>
            </form>
            <div className="flex justify-center items-center p-8">
            <article className="flex flex-col gap-4 justify-center content-center border-2 border-green-400
            items-center max-w-[900px] pt-4 pb-4 pl-7 pr-7">
                <h2 className="text-green-400 text-lg font-firaCode">Welcome to {locationInfo?.name}!</h2>
                <ul className="flex gap-9">
                    <li className="text-white/40 text-sm font-semibold font-firaCode">Type: {locationInfo?.type}</li>
                    <li className="text-white/40  text-sm font-medium font-firaCode">Dimension: {locationInfo?.dimension}</li>
                    <li className="text-white/40  text-sm font-medium font-firaCode">Population: {locationInfo?.residents?.length}</li>
                </ul>
            </article>
            </div>
            

        </section>
    )
}
export default Location