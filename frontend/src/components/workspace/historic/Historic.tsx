
import React from "react"
import { VoiceHistoric } from "./historiccomponents/VoiceHistoric"
import SvgClose from "@/assets/svgs/SvgClose"

export const Historic = () => {
    const [pdfView, setPdfView] = React.useState(false)
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-128 h-128 bg-color-n2 rounded-lg p-10">
                <div className="flex justify-between">
                    <h2 className="font-bold mb-2 text-2xl text-color-n7">Valores Faturados</h2>
                    {pdfView ? <button onClick={() => setPdfView(!pdfView)}><SvgClose /></button> : <></>}
                </div>
                <VoiceHistoric setPdfView={setPdfView} pdfView={pdfView} />
            </div>
        </div>
    )
}