export default function List({nomi=[]}){
    
    return(
        <ul>
            {nomi.map((nome) => <li className="custom_list_item" key={nome}>{nome}</li>)}
        </ul>
    )
}
