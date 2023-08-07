import { InvoiceModel } from "../../../../database/models";
import { Validate } from "../../validate";

export interface EnergyDate {
    kwh: number, 
    unitPrice: number,
    value: number
};


export const InvoiceFormat = (pdfText:string) => {
        // Separe o texto extraído em linhas para processamento
        const lines = pdfText.split('\n');
    
        // Objeto JSON para armazenar os dados formatados
        const invoiceObject:InvoiceModel = {} as InvoiceModel;

        // Objeto JSON para validar as linhas
        const DateInvoiceSearch = {
            numberClient: "Nº DO CLIENTE",
            referenceMonth: "Referente a",
            dueDate: "Referente a",
            energyElectric: "Energia ElétricakWh",
            energyInjected: "Energia injetada HFP",
            energyInjectedV2: "Energia compensada GD IkWh",
            energyIcms: "s/ ICMS",
            contribution: "Contrib Ilum Publica Municipal",
            amount: "Referente a",
        }
        
        let hasError = false;
        
        lines.forEach((e,i) => {
            if (hasError) {
                return; 
            }
 
            
            
            if(e.includes(DateInvoiceSearch.numberClient)){
                const line = lines[i+1]
                try {
                    const numberClient = Validate.NumberClient(line);
                    invoiceObject.idCliente = numberClient;

                  } catch (error) {
                    console.error("Erro:", error);
                    hasError = true;
                  }
            } 
            if(e.includes(DateInvoiceSearch.referenceMonth)){
                const line = lines[i+1]
                
                try {
                    
                    const referenceMonth = Validate.ReferenceMonth(line);
                    invoiceObject.referenceMonth = referenceMonth;

                  } catch (error) {
                    console.error("Erro:", error);
                    hasError = true;        
                  }
            } 
            if(e.includes(DateInvoiceSearch.dueDate)){
                const line = lines[i+1]
                try {
        
                    const dueDate = Validate.DueDate(line);
                    invoiceObject.dueDate = dueDate;

                  } catch (error) {
                    console.error("Erro:", error);
                    hasError = true;        
                  }

            } 
            if(e.includes(DateInvoiceSearch.energyElectric)){
                
                try {
                    const eElectric: EnergyDate = {...Validate.Energy(e)};  
                    invoiceObject.energyElectricKwh = eElectric.kwh;
                    invoiceObject.energyElectricPrice = eElectric.unitPrice;
                    invoiceObject.energyElectricValue = eElectric.value;

                } catch (error) {
                    console.error("Erro:", error);
                    hasError = true;        
                }
            } 
            if(e.includes(DateInvoiceSearch.energyInjected) || e.includes(DateInvoiceSearch.energyInjectedV2)){
                
                try {
                    const injected: EnergyDate = {...Validate.Energy(e)};
                    invoiceObject.energyInjectedKwh = injected.kwh;
                    invoiceObject.energyInjectedPrice = injected.unitPrice;
                    invoiceObject.energyInjectedValue = injected.value;
                   
                } catch (error) {
                    console.error("Erro:", error);
                    hasError = true;        
                }
            } 
            if(e.includes(DateInvoiceSearch.energyIcms)){
                
                try {
                    const icms: EnergyDate = {...Validate.Energy(e)};  
                    invoiceObject.energyIcmsKwh = icms.kwh;
                    invoiceObject.energyIcmsPrice = icms.unitPrice;
                    invoiceObject.energyIcmsValue = icms.value;

                } catch (error) {
                    console.error("Erro:", error);
                    hasError = true;        
                }
            } 
            if(e.includes(DateInvoiceSearch.contribution)){
                
                try {
                    const contribution = Validate.Contribution(e);  
                    invoiceObject.contribution = contribution; 

                } catch (error) {
                    console.error("Erro:", error);
                    hasError = true;        
                }
            } 
            if(e.includes(DateInvoiceSearch.amount)){
                const line = lines[i+1]
                
                try {
                    const amount = Validate.Amount(line);  
                    invoiceObject.amount = amount; 

                } catch (error) {
                    console.error("Erro:", error);
                    hasError = true;        
                }
            }
        })
          
        return invoiceObject;
}       
     