interface ReferenceMonth {
    data: string;
    month: string
}

interface Energy {
    kwh?: number;
    price?: number;
    value: number
}

export interface DashbordModel {
    id: number;
    idCliente: number;
    referenceMonth: ReferenceMonth;
    dueDate: string ;
    invoiceItems: {
        energyElectric: Energy;
        energyInjected:Energy;
        energyIcms:Energy;
        contribution:Energy
    };
    amount: string;
  }