import { InvoiceModel } from "../../database/models";
import { DashbordModel } from "../../database/models/DashbordModel";
import { DateFormat } from "./DateFormat";

export const FormatDataInvoice = (result: InvoiceModel[]): DashbordModel[] => {
  const arrayFinish: DashbordModel[] = [];

  function stringToMonth(monthStr: string): string {
    const months = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];

    const monthVerif = monthStr.slice(0, 3).toLowerCase();

    const foundMonth = months.find((e) => e.toLowerCase().startsWith(monthVerif));

    return foundMonth || "Error"; 
  }

  result.forEach((e) => {
    try {
      
      const resultFinish: DashbordModel = {
        id: e.id,
        idCliente: e.idCliente,
        dueDate: DateFormat(e.dueDate),
        amount: String(e.amount.toFixed(2)),
        referenceMonth: {
          data: e.referenceMonth,
          month: stringToMonth(e.referenceMonth),
        },
        invoiceItems: {
          energyElectric: {
            kwh: e.energyElectricKwh,
            price: e.energyElectricPrice,
            value: e.energyElectricValue,
          },
          energyInjected: {
            kwh: e.energyInjectedKwh,
            price: e.energyInjectedPrice,
            value: e.energyInjectedValue,
          },
          energyIcms: {
            kwh: e.energyIcmsKwh,
            price: e.energyIcmsPrice,
            value: e.energyIcmsValue,
          },
          contribution: {
            value: e.contribution,
          },
        },
      };
  
      arrayFinish.push(resultFinish);
    } catch (error) {     
      console.error("Erro ao formatar os dados:", error);
    }
  });

  return arrayFinish;
};

  