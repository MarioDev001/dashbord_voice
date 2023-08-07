"use-client"

import { DashbordModel } from "@/models/DashBordModel";

export const DataLocalStorage = (): DashbordModel[] | null => {
    const DataLocal = sessionStorage.getItem("data");
    if (DataLocal) {
      try {
        const jsonData: DashbordModel[] = JSON.parse(DataLocal);
        return jsonData;
      } catch (error) {
        console.error("Error parsing JSON:", error);
        return null;
      }
    } else {
      return null;
    }
  };
  
  
  
  
  
  