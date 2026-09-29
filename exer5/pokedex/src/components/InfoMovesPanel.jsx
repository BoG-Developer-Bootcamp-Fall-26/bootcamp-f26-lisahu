import { useState } from "react"

export const InfoMovesPanel = ({ props }) => {
    const [isInfo, setInfo] = useState(true);
    const pokeStats = [
        ["height", `${(props?.height / 10.0).toFixed(1)}m`],
        ["weight", `${(props?.weight / 10.0).toFixed(1)}kg`],
        ...(props?.stats ?? []).map((st) => [st.stat.name, st.base_stat]),
    ]
    const abilities = props?.abilities;
    return (
        <div>
            <ul>
                {isInfo ? 
                    pokeStats?.map(([stat, value]) => (
                        <li key={stat}>{`${stat}: ${value}`}</li>
                    ))
                    : 
                    abilities?.map((a) => (<li key={a.ability.name}>{a.ability.name}</li>))
                }
            </ul>
            <button onClick={() => setInfo(true)} disabled={isInfo}>Info</button>
            <button onClick={() => setInfo(false)} disabled={!isInfo}>Moves</button>
        </div>
    )
}