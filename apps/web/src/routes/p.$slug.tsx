import { createFileRoute, notFound } from "@tanstack/react-router";
import { allPosters } from "content-collections";
import { PosterEntity } from "~lib/entities/poster";
import {
	PosterCanvas,
	PosterContent,
	PosterHeading,
} from "~lib/features/poster";

export const Route = createFileRoute("/p/$slug")({
	component: PosterDetail,
	loader: async ({ params }) => {
		const poster = allPosters.find((p) => p.slug === params.slug);
		if (!poster) throw notFound();
		return { poster };
	},
});

function PosterDetail() {
	const { poster } = Route.useLoaderData();
	return (
		<div className="p-8">
			<PosterEntity poster={poster}>
				<PosterCanvas className="h-100 sm:h-200" />
				<PosterHeading />
				<PosterContent />
			</PosterEntity>
		</div>
	);
}
