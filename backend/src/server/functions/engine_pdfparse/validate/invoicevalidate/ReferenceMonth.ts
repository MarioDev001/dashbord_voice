export const ReferenceMonth = (e:string):string => {
    const regex = / +/g;

    // Substituir os espaços em branco por um único traço e remover espaços no início e no final depois separa em uma array
    const referenceMonth = e.replace(regex, '-').trim().split('-')[1];
    //console.log(referenceMonth);
    
    if (referenceMonth) {
        const month = referenceMonth;

        return month
    } else {
        throw new Error("Nenhuma numero de referencia foi encontrada.");
    }
}