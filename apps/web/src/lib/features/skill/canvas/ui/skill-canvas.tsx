import { WebglCanvas } from "@lensed/ui/components/webgl-canvas";
import { cn } from "@lensed/ui/lib/utils";
import type { ComponentPropsWithoutRef, FC } from "react";
import { useSkill } from "~lib/entities/skill";

export const SkillCanvas: FC<ComponentPropsWithoutRef<"div">> = ({
	className,
	...props
}) => {
	const skill = useSkill();
	return (
		<div
			className={cn("border-4", className)}
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
