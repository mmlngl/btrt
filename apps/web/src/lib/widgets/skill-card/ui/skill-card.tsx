import { T } from "@btrt/ui/components/typography";
import { cn } from "@btrt/ui/lib/utils";
import { Link } from "@tanstack/react-router";
import type { ComponentPropsWithoutRef, FC } from "react";
import type { SkillModel } from "~lib/entities/skill";
import { ArrowBigRight } from "lucide-react";

export type SkillCardWidgetProps = ComponentPropsWithoutRef<"a"> & {
	skill: SkillModel;
};

export const SkillCardWidget: FC<SkillCardWidgetProps> = ({
	skill,
	className,
	...props
}) => {
	return (
		<Link
			to="/skill/$slug"
			params={{ slug: skill.slug }}
			className={cn("flex items-end justify-between group", className)}
			{...props}
		>
			<span className="flex items-center">
				<span className="w-0 group-hover:w-6 transition-all">
					<ArrowBigRight className="scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all text-primary" />
				</span>
				<T.H3 className="group-hover:text-primary">{skill.name}</T.H3>
			</span>

			<T.Small className="text-muted-foreground group-hover:text-primary mb-2">
				{skill.oneliner}
			</T.Small>
		</Link>
	);
};
