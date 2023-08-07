import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { InvoiceProvider } from '../../database/providers/invoiceprovider';
import { InvoiceModel } from '../../database/models';
import { FormatDataInvoice } from '../../shared/services/FormatDataInvoice';



export const getAll = async (req: Request<{}, {}, InvoiceModel>, res: Response) => {
  
  const result= await InvoiceProvider.GetAll();
  

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({errors: 'An error occurred'});
  }

  return res.status(StatusCodes.CREATED).json(result);
};
