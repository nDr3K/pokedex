const Types = ({types}) => {
    return(
        <div className="types">
            {types.map(t => (<div className={t.type.name} 
                                  style={{border: "1px solid black", margin: "0 1px", padding:"1px 2px", width:"4rem"}}
                             >
                                {t.type.name}
                            </div>))}
        </div>
    )
}

export default Types;