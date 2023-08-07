"use client"
import React from "react"

import { Menu } from "@/components/menu/Menu";
import { WorkSpace } from "@/components/workspace/WorkSpace";
import Loading from "@/components/loading/Loading";
import { DataGetApiLocalStorage } from "@/functions/localstorege/DataGetApiLocalStorage";


export default function Home() {
  const [pageActive, setPageActive] = React.useState("painel")
  const [data, setData] = React.useState(false)
  
  React.useEffect(() => {
    async function ValideData(){
      const dataLocal = sessionStorage.getItem('data');
  
      if (dataLocal) {  
        setData(true);
      } else {
        const dataGet = await DataGetApiLocalStorage();
        if(dataGet){
            sessionStorage.setItem("data", JSON.stringify(dataGet))
            setData(true)
        } 
      }
    }
    ValideData()
  }, [])
  
  
  return (
    <main className="h-full w-full lg:flex ">
      <Menu pageActive={setPageActive} />
      {
        data ? <WorkSpace page={pageActive}/> : <Loading />
      }

    </main>
  )
}
