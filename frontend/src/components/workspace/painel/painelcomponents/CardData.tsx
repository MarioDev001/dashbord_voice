interface CardData {
    title: string;
    content: string;
    color:string
}
export const CardData = ({title, content, color}:CardData) => {
    return(
        <div className="text-color-n7 ">
            <h2 className="font-medium mb-4">{title}</h2>
            <h3 className="flex gap-3 items-center justify-center font-bold text-2xl">
                <div className={`rounded-full h-2 w-2 ${color}`}></div>
                {content}
            </h3>
        </div>
    )
}