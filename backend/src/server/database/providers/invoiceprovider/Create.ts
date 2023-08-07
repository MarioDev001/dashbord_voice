import { PrismaClient } from '@prisma/client';
import { InvoiceModel } from '../../models';


export const Create = async (invoiceData: InvoiceModel) => {
    const prisma = new PrismaClient();
    
    try {
        const invoice = prisma.invoice.create({
            data: invoiceData
        })
        return await invoice
    } catch (error) {
        console.error('Erro ao criar fatura:', error);
        return error; 
    } finally {
        await prisma.$disconnect(); 
    }
}