import { createFileRoute, notFound } from "@tanstack/react-router";
import { allSkills } from "content-collections";
import { SkillEntity } from "~lib/entities/skill";
import { SkillCanvas, SkillContent, SkillHeader } from "~lib/features/skill";

export const Route = createFileRoute("/skill/$slug")({
	component: SkillDetail,
	loader: async ({ params }) => {
		const skill = allSkills.find((p) => p.slug === params.slug);
		if (!skill) throw notFound();
		return { skill };
	},
});

function SkillDetail() {
	const { skill } = Route.useLoaderData();
	return (
		<div>
			<SkillEntity skill={skill}>
				<SkillCanvas className="h-40" />
				<SkillHeader />
				<SkillContent />
			</SkillEntity>
		</div>
	);
}
