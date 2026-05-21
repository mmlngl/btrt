import { T } from "@btrt/ui/components/typography";
import { createFileRoute, Link } from "@tanstack/react-router";
import { allSkills } from "content-collections";
import { Masthead } from "~lib/widgets/masthead";
import { SkillCardWidget } from "~lib/widgets/skill-card";

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
		<div>
			<header>
				<T.H1 className="text-balance font-mono text-[6rem] sm:text-[10rem] leading-20 sm:leading-30 uppercase my-12">
					Build The Right Thing
				</T.H1>
			</header>

			<div className="flex flex-col gap-16">
				<section className="max-w-md">
					<T.H1 className="border-b border-t py-2 mb-4">Skills</T.H1>

					<ul>
						{skills.map((skill) => (
							<SkillCardWidget skill={skill} key={skill.slug} />
						))}
					</ul>
				</section>
				<section className="max-w-md">
					<T.H1 className="border-b border-t py-2 mb-4">About</T.H1>

					<T.P>
						Nullam nec ultricies lectus. Aenean elit ante, lacinia fermentum
						hendrerit vel, porttitor et mi. Quisque euismod porttitor ex, nec
						feugiat felis iaculis eget. Cras lacus augue, placerat eget
						hendrerit vel, blandit nec enim. Quisque mattis fringilla eleifend.
						Duis dapibus sagittis diam, vitae ultrices tortor congue sit amet.
						Sed euismod nulla nulla, sit amet pretium lorem tempor in.{" "}
					</T.P>
				</section>
			</div>
		</div>
	);
}
