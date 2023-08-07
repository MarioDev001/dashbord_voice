import { ServeFunctions } from '../../../functions';
import { InvoiceProvider } from '../../providers/invoiceprovider';

const pdfs = [
  "01.pdf", 
  "02.pdf", 
  "03.pdf", 
  "04.pdf", 
  "05.pdf", 
  "06.pdf"
]

export const SeedInvoice = async () => {
  for (const pdf of pdfs) {
    console.log(pdf);
    
    try {
      const invoiceData = await ServeFunctions.ReadEnergy("electricity-bill", pdf);

      if (invoiceData) {
        await InvoiceProvider.Create(invoiceData);
        console.log(`Invoice created for ${pdf}`);
      }
    } catch (error) {
      console.error(`Error processing ${pdf}:`, error);
    }
  }
};


