import { Router } from 'express';
import { InvoiceController } from '../controllers';

const router = Router();



router.get('/', (_, res) => {
  return res.send('Lumi - teste');
});

router.post('/invoice',  InvoiceController.create);
router.get('/invoice',  InvoiceController.getAll);
router.get('/pdf/:id',  InvoiceController.getPdf);

export { router };
