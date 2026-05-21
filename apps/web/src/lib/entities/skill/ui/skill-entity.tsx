import * as Option from "effect/Option";
import type { FC, PropsWithChildren } from "react";
import * as Lib from "../lib";

export const SkillEntity: FC<PropsWithChildren<{ skill: Lib.SkillModel }>> = ({
	skill,
	children,
}) => {
	return (
		<Lib.SkillEntityContext.Provider value={Option.some(skill)}>
			{children}
		</Lib.SkillEntityContext.Provider>
	);
};
