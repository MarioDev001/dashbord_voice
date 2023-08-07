import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { join } from 'path';
import fs from 'fs';

interface NumberClient {
    id?: number;
}

export const getPdf = async (req: Request<NumberClient>, res: Response) => {
    const { id } = req.params;
    
    if (!id || isNaN(Number(id))) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O parâmetro "id number client" precisa ser informado como uma string numérica.'
            }
        });
    }

    const pdfDirectory = join(__dirname, `../../public/docs/0${id}.pdf`);
    
    if (fs.existsSync(pdfDirectory)) {
        res.sendFile(pdfDirectory);
    } else {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: 'Arquivo não encontrado.'
            }
        });
    }
};
