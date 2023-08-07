export const DataGetApiLocalStorage = async (): Promise<any[] | null> => {
    const url = "http://localhost:3333/invoice";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Erro ao obter os dados.');
      }
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };