import { createFileRoute, Link } from "@tanstack/react-router";
import { allSkills } from "content-collections";

export const Route = createFileRoute("/")({
	component: PublicHome,
	loader: () => {
		return {
			skills: allSkills,
		};
	},
});

function PublicHome() {
	const { skills } = Route.useLoaderData();
	return (
		<div className="p-8">
			<Link to="/" className="mb-8 inline-block">
				Home
			</Link>
			<ul>
				{skills.map((skill) => (
					<li key={skill.slug}>
						<Link to="/skill/$slug" params={{ slug: skill.slug }}>
							{skill.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
