import * as Option from "effect/Option";
import { useContext } from "react";
import * as Lib from "../lib";

export const useSkill = () => {
	const posterOption = useContext(Lib.SkillEntityContext);
	return Option.getOrThrowWith(
		posterOption,
		() => new Error("<SkillEntity> Not found"),
	);
};
