export const PokemonDisplay = ({ props }) => {
    const name = props?.name;
    const spriteUrl = props?.sprites?.front_default;
    return (
        <div className="flex flex-col w-[463px]">
            <div>
                <img className="w-[463px] h-[463px] border-[4px] border-black" src={spriteUrl} />
            </div>
            <div className="flex items-center justify-center mt-[31px] h-[67px] border border-black rounded-[10px] bg-[#E8E8E8] text-[36px]">
                {name}
            </div>
        </div>
    )
}