import { server } from './server/Server';
import { PrismaClient } from '@prisma/client';
import { SeedInvoice } from './server/database/seeds/seedinvoice/SeedInvoice';

const prisma = new PrismaClient();

(async function () {
  try {
    const invoice = await prisma.invoice.findMany();
    if(invoice.length === 0){
      SeedInvoice()
    }
    server.listen(process.env.PORT, () => {
      console.log(`App rodando na porta ${process.env.PORT}`);
    });
    
  } catch (error) {
    console.error('Status da Conexão com o db: Error', error);
  } finally {
    await prisma.$disconnect();
  }
})()


