import * as fs from 'fs';
import path from 'path';
import pdfParse from "pdf-parse";
import { InvoiceFormat } from './dataformat/invoiceformat/InvoiceFormat';

const typePdf = {
  typeInvoice: "electricity-bill",
}

export const EnginePdfparse = async (typeInvoice: string, pdf: string) => {
    
    if(typeInvoice === typePdf.typeInvoice){
        const filePath = path.join(__dirname + "../../../public/docs/" + pdf);
        
        const dataBuffer = fs.readFileSync(filePath);
        const data = await pdfParse(dataBuffer);
        const pdfText = data.text;
  
  
      const pdfFormat = InvoiceFormat(pdfText);
      //formata e retorna uma objeto com os dados necessarios
      
      return pdfFormat
    } else {
      console.log("type de arquivo não é valido");
      
    }
}

