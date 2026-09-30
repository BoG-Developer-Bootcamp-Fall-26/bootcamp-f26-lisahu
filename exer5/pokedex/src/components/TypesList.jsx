import { TypeChip } from "./TypeChip";

export const TypesList = ({ props }) => {
    const types = (props?.types ?? []).map((t) => t.type.name);
    return (
        <div className="flex flex-col items-start justify-center pt-[42px] pb-[42px] gap-[18px]">
            <div className="text-[24px] font-bold">
                Types:
            </div>
            <div className="flex flex-row justify-start items-center gap-[12px]">
                {types.map((t) => <TypeChip key={t} props={t} />)}
            </div>
        </div>
    )
}