import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { InvoiceProvider } from '../../database/providers/invoiceprovider';
import { InvoiceModel } from '../../database/models';

export const create = async (req: Request<{}, {}, InvoiceModel>, res: Response) => {
  const result = await InvoiceProvider.Create(req.body);

  if (result instanceof Error || (result as any).message) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({errors: 'An error occurred'});
  }

  return res.status(StatusCodes.CREATED).json(result);
};
