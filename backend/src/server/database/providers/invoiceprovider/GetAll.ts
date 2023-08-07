import { PrismaClient } from '@prisma/client';
import { DashbordModel } from '../../models/DashbordModel';
import { FormatDataInvoice } from '../../../shared/services/FormatDataInvoice';
import { InvoiceModel } from '../../models';


export const GetAll = async (): Promise<DashbordModel[]> => {
    const prisma = new PrismaClient();
    
    try {
        const invoices:InvoiceModel[] = (await prisma.invoice.findMany()).map((invoice) => {
            return {
                id: invoice.id,
                idCliente: invoice.idCliente.toNumber(),
                referenceMonth: invoice.referenceMonth,
                dueDate: invoice.dueDate.toISOString(),
                energyElectricKwh: invoice.energyElectricKwh.toNumber(),
                energyElectricPrice: invoice.energyElectricPrice.toNumber(),
                energyElectricValue: invoice.energyElectricValue.toNumber(),
                energyInjectedKwh: invoice.energyInjectedKwh.toNumber(),
                energyInjectedPrice: invoice.energyInjectedPrice.toNumber(),
                energyInjectedValue: invoice.energyInjectedValue.toNumber(),
                energyIcmsKwh: invoice.energyIcmsKwh.toNumber(),
                energyIcmsPrice: invoice.energyIcmsPrice.toNumber(),
                energyIcmsValue: invoice.energyIcmsValue.toNumber(),
                contribution: invoice.contribution.toNumber(),
                amount: invoice.amount.toNumber(),
            };
        });
        const invoicesFinish = FormatDataInvoice(invoices)
        return invoicesFinish
    } catch (error) {
        console.error('Erro ao consulta fatura:', error);
        return []; 
    } finally {
        await prisma.$disconnect(); 
    }
}