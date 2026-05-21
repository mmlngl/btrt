import * as Option from "effect/Option";
import { createContext } from "react";
import type * as Model from "./model";

export const SkillEntityContext = createContext<
	Option.Option<Model.SkillModel>
>(Option.none());
