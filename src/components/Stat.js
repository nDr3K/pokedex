const Stat = ({color, gradient, value, name}) => {
    return (
        <div className="tableStat">
            <div className="statName" style={{backgroundColor: gradient}}>
                <div className="statText" style={{color: color}}>{name}</div>
            </div>
            <div className="statValue" style={{backgroundColor: color}}>
                <div className="statBar" style={{width: 10+(value/255*90)+"%", backgroundImage: "linear-gradient(to right,"+gradient+","+color+")"}}>
                    <div className="statText" style={{color: color}}>{value}</div>
                </div>
            </div>
        </div>
    )
}

export default Stat