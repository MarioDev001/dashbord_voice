
export const Amount = (e:string):number => {
    const regex = / +/g; 

    // Substituir os espaços em branco por um único traço e remover espaços no início e no final depois separa em uma array
    const amount = e.replace(regex, '-').trim().split('-')[3];
    //console.log(amount);   
    
    if (amount) {
        const amountValue = parseFloat(amount.replace(',', '.'));
        
        return amountValue
    } else {
        throw new Error("Nenhuma numero de referencia foi encontrada.");
    }
}