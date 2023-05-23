import AddCases from "../AddCases";


interface IParams {
    clientId?: string; 
}
const CasesAddPage = ({params}: {params: IParams}) => {
    const { clientId } = params; 
    return(

    <div>
        <AddCases clientId={clientId} />
    </div>
    )
}

export default CasesAddPage; 