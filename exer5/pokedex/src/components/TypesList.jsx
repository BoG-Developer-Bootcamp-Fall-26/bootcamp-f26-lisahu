export const TypesList = ({ props }) => {
    const types = (props?.types ?? []).map((t) => t.type.name);
    return (
        <ul>
            {types.map((t) => <li key={t}>{t}</li>)}
        </ul>
    )
}