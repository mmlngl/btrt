import { WebglCanvas } from "@btrt/ui/components/webgl-canvas";
import { cn } from "@btrt/ui/lib/utils";
import type { ComponentPropsWithoutRef, FC } from "react";
import { usePoster } from "~lib/entities/poster";

export const PosterCanvas: FC<ComponentPropsWithoutRef<"div">> = ({
	className,
	...props
}) => {
	const poster = usePoster();
	return (
		<div
			className={cn("border-[1vw] shadow-2xl", className)}
			style={{
				borderColor: poster.themeColor,
				backgroundColor: poster.themeColor,
			}}
			{...props}
		>
			<WebglCanvas
				fragment={poster.fragmentShader}
				vertex={poster.vertexShader}
			/>
		</div>
	);
};
