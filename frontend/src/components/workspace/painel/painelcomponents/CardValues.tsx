import React from 'react';

interface Energy {
  kwh?: number;
  price?: number;
  value: number;
}

interface InvoiceItems {
  energyElectric: Energy;
  energyIcms: Energy;
  energyInjected: Energy;
  contribution: Energy;
}

interface CardValueProps {
  invoiceItems: InvoiceItems;
}

export const CardValue = ({ invoiceItems }: CardValueProps) => {
  const invoiceData = Object.entries(invoiceItems);

  
  return (
    <div className="">
      <h2 className="font-bold mb-2 text-2xl text-color-n7">Valores Faturados</h2>
      <div className="scroll flex flex-col gap-2 overflow-y-scroll lg:h-36 h-full">
        {invoiceData.map(([key, energy]) => (
          <div key={key} className="p-4 lg:h-12 font-medium text-color-n7 bg-color-n1 flex lg:flex-row flex-col lg:items-center rounded-lg justify-between text-sm">
            <h3>{key}</h3>
            <div style={{display: energy.kwh || energy.price ? "flex" : "none" }} className="lg:w-2/6 justify-between lg:p-0 py-3">
              <h2 className="flex gap-1">
                kwh:<p className="text-color-n9">{energy.kwh}</p>
              </h2>
              <div className="flex gap-1">
                Preço Unit:<p className="text-color-n9">{energy.price}</p>
              </div>
            </div>
            <div className="bg-color-n4 py-1 px-4 rounded-lg text-sm">
              <h3 className="flex gap-1">
                Valor:<p className="">{energy.value}</p>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
