
export const Contribution = (e:string):number => {
    const regex = / +/g;

    // Substituir os espaços em branco por um único traço e remover espaços no início e no final depois separa em uma array
    const contribution = e.replace(regex, '-').trim().split('-')[4];
    //console.log(contribution);

    if (contribution) {
        const valueContribution = Number(contribution.replace(',', '.'));;

        return valueContribution
    } else {
        throw new Error("Nenhuma numero de referencia foi encontrada.");
    }
}