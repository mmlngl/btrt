import type { FC } from "react";
import * as Entity from "~lib/entities/skill";
import { SkillContent, SkillHeading, SkillImage } from "~lib/features/skill";

export interface SkillWidgetProps {
	poster: Entity.SkillModel;
}

export const SkillWidget: FC<SkillWidgetProps> = ({ poster }) => {
	return (
		<div className="mx-[5vw] my-[8vw]">
			<Entity.SkillEntity poster={poster}>
				<SkillImage />
				<SkillHeading />

				<div className="container mx-auto max-w-md">
					<SkillContent />
				</div>
			</Entity.SkillEntity>
		</div>
	);
};
