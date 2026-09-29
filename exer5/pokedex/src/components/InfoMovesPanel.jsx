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
            <div className="flex flex-col">
                {isInfo ? 
                    pokeStats?.map(([stat, value]) => (
                        <p key={stat}>{`${stat}: ${value}`}</p>
                    ))
                    : 
                    abilities?.map((a) => (<p key={a.ability.name}>{a.ability.name}</p>))
                }
            </div>
            <button onClick={() => setInfo(true)} disabled={isInfo}>Info</button>
            <button onClick={() => setInfo(false)} disabled={!isInfo}>Moves</button>
        </div>
    )
}