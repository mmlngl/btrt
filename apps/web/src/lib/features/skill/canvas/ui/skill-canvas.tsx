import { WebglCanvas } from "@btrt/ui/components/webgl-canvas";
import { cn } from "@btrt/ui/lib/utils";
import type { ComponentPropsWithoutRef, FC } from "react";
import { useSkill } from "~lib/entities/skill";

export const SkillCanvas: FC<ComponentPropsWithoutRef<"div">> = ({
	className,
	...props
}) => {
	const skill = useSkill();
	return (
		<div
			className={cn("border-2 shadow-2xl", className)}
			style={{
				borderColor: skill.themeColor,
				backgroundColor: skill.themeColor,
			}}
			{...props}
		>
			<WebglCanvas
				fragment={skill.fragmentShader}
				vertex={skill.vertexShader}
			/>
		</div>
	);
};
