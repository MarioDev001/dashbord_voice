import { DataGetApiLocalStorage } from "@/functions/localstorege/DataGetApiLocalStorage"
import { CardData } from "./painelcomponents/CardData"
import { CardHistoric } from "./painelcomponents/CardHistoric"
import { CardPriceFinish } from "./painelcomponents/CardPriceFinish"
import { CardValue } from "./painelcomponents/CardValues"
import LineChart from "./painelcomponents/LineChart"
import { DataLocalStorage } from "@/functions/localstorege/DataLocalStorage"
import React from "react"
import { DashbordModel } from "@/models/DashBordModel"



export const Painel = () => {
    const [data, setData] = React.useState<DashbordModel | null>(null);
    const DataLocal = DataLocalStorage();

    React.useEffect(() => {
        if (DataLocal && DataLocal.length > 0) {
            setData(DataLocal[0]);
        }

    }, []);
    
    

    if(data){
        return (
            <div className="w-full h-full flex justify-center items-center">
                <div className="lg:w-128 w-96 lg:h-128 lg:grid grid-cols-4 grid-rows-5 gap-6 flex flex-col py-14 lg:p-0 px-5">
                    <div className="bg-color-n2 rounded-md p-4">
                        <CardData 
                            title="Nº do Cliente"
                            content={String(data.idCliente)}
                            color="bg-color-n6"
                        />
                    </div>
                    <div className="bg-color-n2 rounded-md p-4">
                        <CardData 
                            title="Mês Referencia"
                            content={data.referenceMonth.data}
                            color="bg-color-n9"
                        />
                    </div>
                    <div className="bg-color-n2 rounded-md p-4">
                        <CardData 
                            title="Data de Vencimento"
                            content={data.dueDate}
                            color="bg-color-n9"
                        />
                    </div>
                    <div className="bg-color-n2 rounded-md row-span-5 p-4 h-full">
                        <CardHistoric invoiceActive={setData} />
                    </div>
                    <div className="bg-color-n2 rounded-md col-span-2 row-span-2">
                        <LineChart 
                            month={data.referenceMonth.month}
                        />
                    </div>
                    <div className="bg-color-n2 rounded-md row-span-2 p-4">
                        <CardPriceFinish price={data.amount} />
                    </div>
                    <div className=" bg-color-n2 rounded-md col-span-3 row-span-2 p-4">
                        <CardValue 
                            invoiceItems={data.invoiceItems}
                        />
                    </div>
                </div>
            </div>
        )
    }
}