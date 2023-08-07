import { EnergyDate } from "../../dataformat/invoiceformat/InvoiceFormat";


const energyDate:EnergyDate = {} as EnergyDate 

export const Energy = (e:string):EnergyDate => {
    const regex = / +/g;
    const dateKeys = e.split("kWh")[1].replace(regex, " ").trim();
    // separa o texto depois da palavra kwh, e retorna o segundo valor da array que estão os dados
    const valueFormt = dateKeys.split(" ")
    
    function parseDateNumber(v: string): number{
        const value = parseFloat(v.replace(',', '.'));
        return value
    }
    
    energyDate.kwh = parseDateNumber(valueFormt[0])
    energyDate.unitPrice = parseDateNumber(valueFormt[1])
    energyDate.value = parseDateNumber(valueFormt[2])
    
    if (!isNaN(energyDate.kwh) && !isNaN(energyDate.unitPrice) && !isNaN(energyDate.value)) {
        return energyDate
    } else {
        throw new Error("Nenhuma dado foi encontrada.");
    } 
}