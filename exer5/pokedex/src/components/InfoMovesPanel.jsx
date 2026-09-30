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
        <div className="w-[486px] h-[828px] mb-[53px] mr-[116px] flex flex-col">
            <h1 className="text-center text-[36px] font-bold">{isInfo ? "Info" : "Moves"}</h1>
            <div className="h-[598px] pl-[33px] pt-[32px] bg-[#E8E8E8]">
                {isInfo ? 
                    pokeStats?.map(([stat, value]) => (
                        <p key={stat} className="text-left text-[36px]">{`${stat}: ${value}`}</p>
                    ))
                    : 
                    abilities?.map((a) => (<p className="text-left text-[36px]" key={a.ability.name}>{a.ability.name}</p>))
                }
            </div>
            <div className="flex items-center justify-center gap-x-[43px] mt-[81px]">
                <button 
                    onClick={() => setInfo(true)} 
                    disabled={isInfo}
                    className={`w-[173px] h-[69px] text-[36px] rounded-[10px] bg-${isInfo ? "[#7CFF79]" : "[#E8E8E8]"}`}
                >
                    Info
                </button>
                <button 
                    onClick={() => setInfo(false)} 
                    disabled={!isInfo}
                    className={`w-[173px] h-[69px] text-[36px] rounded-[10px] bg-${!isInfo ? "[#7CFF79]" : "[#E8E8E8]"}`}
                >
                    Moves
                </button>
            </div>
        </div>
    )
}