import { DataLocalStorage } from "@/functions/localstorege/DataLocalStorage";
import { DashbordModel } from "@/models/DashBordModel";
import { Dispatch, SetStateAction } from "react";

interface HistoricProps {
    invoiceActive: Dispatch<SetStateAction<DashbordModel | null>>; // Assinatura da função corrigida
}

export const CardHistoric = ({invoiceActive}:HistoricProps) => {
    const DataLocal = DataLocalStorage();
    return(
        <div>
        <h2 className="font-bold mb-2 text-2xl text-color-n7">Histórico</h2>
            <div className="scroll flex flex-col gap-2 overflow-y-scroll h-130">
                {
                    DataLocal ? 
                    DataLocal.map((data) => (
                        <button onClick={() => invoiceActive(DataLocal[data.id - 1])} className="p-3 text-color-n7 bg-color-n1 rounded-lg flex flex-col justify-between gap-3">
                            <div className="flex justify-between items-center w-full">
                                <h2 className="font-medium text-xs">Nº do Cliente</h2>
                                <div className="bg-color-n4 py-1 px-2 rounded-lg">
                                    <h3 className="text-color-n7 w-fulll text-xs">
                                        {data.referenceMonth.data}
                                    </h3>
                                </div>
                            </div>
                            <h3 className="flex gap-3 items-center font-bold text-1xl">
                                <div className="rounded-full h-2 w-2 bg-color-n6"></div>
                                {data.idCliente}
                            </h3>
                        </button>
                    )) : []
                }
                
            </div>
        </div>
    )
}