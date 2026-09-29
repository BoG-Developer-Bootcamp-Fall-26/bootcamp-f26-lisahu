export const PokemonDisplay = ({ props }) => {
    const name = props?.name;
    const spriteUrl = props?.sprites?.front_default;
    return (
        <div>
            <div>
                <img src={spriteUrl} />
            </div>
            <div>
                {name}
            </div>
        </div>
    )
}