
export const DueDate = (e:string):string => {
    const regex = / +/g;

    // Substituir os espaços em branco por um único traço e remover espaços no início e no final depois separa em uma array
    const referenceDueDate = e.replace(regex, '-').trim().split('-')[2];
    //console.log(referenceDueDate);

    function formatDate(inputDate: string): string {
        const parts = inputDate.split('/');
        const year = parts[2];
        const month = (parseInt(parts[1]) - 1).toString(); 
        const day = parts[0];
      
        const formattedDate = new Date(Date.UTC(Number(year), Number(month), Number(day), 12, 0, 0));
        return formattedDate.toISOString();
    }
    
    if (referenceDueDate) {
        const dataSql = formatDate(referenceDueDate)
        //console.log(dataSql);
        
        return dataSql
    } else {
        throw new Error("Nenhuma dado foi encontrada.");
    }
}