import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const ResidentCard = ({residentURL}) => {
    const [residentInfo, setResidentInfo] = useState(null);
    useEffect(() => {
      axios.get(residentURL)
      .then(({data}) => setResidentInfo(data))
      .catch((err) => console.log(err))  
    },[])
    const BgStatus = {
        Alive: 'bg-green-500', 
        Dead: 'bg-red-500', 
        unknown: 'bg-gray-500'
    }
        
    return (
    <article className="hover:bg-green-950">
        <header className="relative">
            <img className="border-green-400 border-t-2 border-r-2 border-l-2 border-b-1" src={residentInfo?.image} alt="" />
            <div className="flex items-center gap-2 absolute bottom-6 left-1/2 
            -translate-x-1/2 bg-black/60 pl-2 pr-2 border-2 border-green-400 text-white">
                <div className={`h-3 aspect-square rounded-full ${BgStatus[residentInfo?.status]}`}></div>
                <span>{residentInfo?.status}</span>
            </div>
        </header>
        <section className="flex flex-col gap-4 justify-center items-baseline p-4 border-green-400 border-2">
            <h5 className="text-white text-xl font-firaCode font-bold line-clamp-1">{residentInfo?.name}</h5>
            <ul className="flex flex-col gap-2">
                <li className="text-white/40 text-sm font-medium font-firaCode line-clamp-1">Species <span className="text-white font-firaCode pl-6 ">{residentInfo?.species} </span></li>
                <li className="text-white/40 text-sm font-medium font-firaCode line-clamp-1">Origin <span className="text-white font-firaCode pl-6 ">{residentInfo?.origin.name}</span></li>
                <li className="text-white/40 text-sm font-medium font-firaCode line-clamp-1">Times appear <span className="text-white font-firaCode pl-6">{residentInfo?.episode.length}</span></li>
            </ul>
        </section>
    </article>
  )
}
export default ResidentCard