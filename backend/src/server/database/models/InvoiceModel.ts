
export interface InvoiceModel {
  id: number;
  idCliente: number;
  referenceMonth: string;
  dueDate: string ;
  energyElectricKwh: number;
  energyElectricPrice: number;
  energyElectricValue: number;
  energyInjectedKwh: number;
  energyInjectedPrice: number;
  energyInjectedValue: number;
  energyIcmsKwh: number;
  energyIcmsPrice: number;
  energyIcmsValue: number;
  contribution: number;
  amount: number;
}
