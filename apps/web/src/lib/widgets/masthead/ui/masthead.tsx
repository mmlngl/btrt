import { cn } from "@btrt/ui/lib/utils";
import { Link } from "@tanstack/react-router";
import type { ComponentPropsWithoutRef, FC } from "react";

export const Masthead: FC<ComponentPropsWithoutRef<"div">> = ({
	className,
	...props
}) => {
	return (
		<div
			className={cn("flex justify-between items-baseline", className)}
			{...props}
		>
			<nav className="flex items-center gap-2">
				<Link to="/" className="hover:underline">
					BTRT
				</Link>
			</nav>
		</div>
	);
};
