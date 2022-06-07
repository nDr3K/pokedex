import Stat from './Stat'

const Stats = ({stats}) => {
    return (
        <>
            <Stat 
                color="#C1FFD3"
                gradient="#E1FFD3"
                value={stats[0].base_stat}
                name="Hp"
            />
            <Stat 
                color="#FFFBA6"
                gradient="#FFFBE6"
                value={stats[1].base_stat}
                name="Attack"
            />
            <Stat 
                color="#FA921D"
                gradient="#FFC499"
                value={stats[2].base_stat}
                name="Defense"
            />
            <Stat 
                color="#26BAE0"
                gradient="#B2E3EF"
                value={stats[3].base_stat}
                name="Sp.Attack"
            />
            <Stat 
                color="#4C6CD4"
                gradient="#9EB5FF"
                value={stats[4].base_stat}
                name="Sp.Defense"
            />
            <Stat 
                color="#EA81C1"
                gradient="#EF8DEC"
                value={stats[5].base_stat}
                name="Speed"
            />
        </>
    )
}

export default Stats