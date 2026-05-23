import { T } from "@lensed/ui/components/typography";
import { cn } from "@lensed/ui/lib/utils";
import type { ComponentPropsWithoutRef, FC } from "react";

export const Footer: FC<ComponentPropsWithoutRef<"div">> = ({
	className,
	...props
}) => {
	return (
		<div
			className={cn(
				"fixed right-8 top-1/2 translate-x-1/2 rotate-90 w-[70vh] text-center",
				className,
			)}
			{...props}
		>
			<T.Small className="text-muted-foreground">
				Copyright © {new Date().getFullYear()} Michele Memoli. All rights
				reserved.
			</T.Small>
		</div>
	);
};
