interface pdf{
    pdfId: number
}
export const Popup = ({pdfId}: pdf) => {
    return(
        <div className="w-full">
            <iframe
                src={`http://localhost:3333/pdf/${pdfId}`}
                title="PDF Viewer"
                width="100%"
                height="600px"
                className="h-130 box-border"
            />
        </div>
    )
}