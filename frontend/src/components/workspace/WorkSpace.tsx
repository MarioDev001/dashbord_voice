import { Historic } from "./historic/Historic"
import { Painel } from "./painel/Painel"

interface WorkSpace{
    page: any
}
export const WorkSpace = ({page}:WorkSpace) => {
    return (
        <div className="bg-color-n1 w-full h-full">
            {
                page === "painel" ? <Painel /> : <Historic />
            }
        </div>
    )
}