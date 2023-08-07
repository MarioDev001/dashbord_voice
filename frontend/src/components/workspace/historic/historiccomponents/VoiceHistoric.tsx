import { Popup } from "@/components/popup/Popup";
import { DataLocalStorage } from "@/functions/localstorege/DataLocalStorage";
import React from "react";

interface VoiceHistoric {
    pdfView: boolean;
    setPdfView: React.Dispatch<React.SetStateAction<boolean>>
}
//vai receber uma array com os dados e os campos vão se criado por ela
export const VoiceHistoric = ({ pdfView, setPdfView }:VoiceHistoric) => {
    const DataLocal = DataLocalStorage();
    let [pdfId, setPdfId] = React.useState(0)
    
    function openPdf(id:number) {
        setPdfId(id)
        setPdfView(!pdfView)
    }
    return(
        <>
  
            {   
                pdfView ?
                <Popup pdfId={pdfId} /> :
                <div className="pt-6 scroll flex flex-col gap-2 overflow-y-scroll h-130">
                    {
                        DataLocal?.map((value) => (
                            <div className="p-4 lh:h-12 font-medium text-color-n7 bg-color-n1 flex flex-col lg:flex-row  lg:items-center rounded-lg justify-between text-sm">
                                <h3 className=" text-base font-semibold">Dados da fatura</h3>
                                <div className="flex gap-6 lg:p-0 py-4 justify-between">
                                    <h2 className="flex gap-1">Nº do Cliente:<p className="text-color-n9">{value.idCliente}</p></h2>
                                    <div className="flex gap-1">Mês de Referencia:<p className="text-color-n9">{value.referenceMonth.data}</p></div>
                                </div>
                                <div className=" bg-color-n10 py-1 px-4 rounded-lg text-sm">
                                    <button onClick={() => openPdf(value.id)} >PDF</button>
                                </div>
                            </div>
                        ))
                    }
                </div> 
            }  
        </>
        
    )
}