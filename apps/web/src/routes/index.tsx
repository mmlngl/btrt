import { createFileRoute, Link } from "@tanstack/react-router";
import { allPosters } from "content-collections";

export const Route = createFileRoute("/")({
	component: PublicHome,
	loader: () => {
		return {
			posters: allPosters,
		};
	},
});

function PublicHome() {
	const { posters } = Route.useLoaderData();
	return (
		<div className="p-8">
			<Link to="/" className="mb-8 inline-block">
				Home
			</Link>
			<ul>
				{posters.map((poster) => (
					<li key={poster.slug}>
						<Link to="/p/$slug" params={{ slug: poster.slug }}>
							{poster.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
