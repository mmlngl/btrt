import { cn } from "@lensed/ui/lib/utils";
import type { ComponentPropsWithoutRef, FC } from "react";

export const Footer: FC<ComponentPropsWithoutRef<"div">> = ({
	className,
	...props
}) => {
	return (
		<div
			className={cn("flex justify-between items-baseline", className)}
			{...props}
		>
			{/*footer*/}
		</div>
	);
};
