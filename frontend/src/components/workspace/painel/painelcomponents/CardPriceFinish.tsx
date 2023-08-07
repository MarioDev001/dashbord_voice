interface CardPriceFinish {
    price: string;
}
export const CardPriceFinish = ({price}:CardPriceFinish) => {
    return(
        <div className="flex flex-col items-center">
            <h2 className="font-bold mb-2 text-2xl text-color-n7">Valor Total</h2>

            <div className="p-4 text-color-n7 h-full flex justify-center items-center">
                <div className=" h-28 w-28 bg-color-n3 rounded-full flex justify-center items-center">
                    <div className=" h-129 w-129 bg-color-n2 rounded-full flex justify-center items-center">
                        <h3 className=" font-black text-1xl">R$:{price}</h3>
                    </div>
                </div>
                <div></div>
                
            </div>
        </div>
    )
}