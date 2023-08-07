
export const NumberClient = (e:string):number => {
    const regex = / +/g;

    // Substituir os espaços em branco por um único traço e remover espaços no início e no final depois separa em uma array
    const result = e.replace(regex, '-').trim().split('-')[1];
    // console.log(result);
    
    if (result) {
        const numberClient = Number(result);
        return numberClient
    } else {
        throw new Error("Nenhuma dado foi encontrada.");
    }
    
}