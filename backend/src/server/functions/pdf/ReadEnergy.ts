import { EnginePdfparse } from "../engine_pdfparse";

export const ReadEnergy = async (typeInvoice: string, pdf: string) => {
    return EnginePdfparse(typeInvoice, pdf)
        .then((result) => {
            
            return result;
        })
        .catch(() => {
            console.log("error na extração de dados");
            throw new Error("Erro na extração de dados");
        });
};
