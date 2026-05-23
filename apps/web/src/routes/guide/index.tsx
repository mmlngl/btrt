import { T } from "@lensed/ui/components/typography";
import { Link, createFileRoute } from "@tanstack/react-router";
import { allGuides } from "content-collections";

export const Route = createFileRoute("/guide/")({
	component: GuideIndex,
});

function GuideIndex() {
	const sortedGuides = [...allGuides].sort((a, b) => a.order - b.order);

	return (
		<div>
			<header className="mb-18">
				<T.H1 className="text-balance font-mono text-[6rem] sm:text-[10rem] leading-20 sm:leading-30 uppercase my-12">
					Guide
				</T.H1>
				<div className="max-w-2xl">
					<T.Lead>
						Lensed Build skills are AI agent workflows. Use them individually or
						as a framework for building with the right lenses.
					</T.Lead>
				</div>
			</header>

			<div className="flex flex-col gap-12 max-w-2xl">
				<T.P>
					Each guide page covers a specific topic. Start from the beginning or
					jump to what you need.
				</T.P>

				<nav className="flex flex-col gap-4">
					{sortedGuides.map((guide) => (
						<Link
							key={guide.slug}
							to="/guide/$slug"
							params={{ slug: guide.slug }}
							className="group"
						>
							<div className="flex items-baseline gap-4">
								<T.H3 className="font-mono text-xl group-hover:text-accent transition-colors">
									{guide.title}
								</T.H3>
								<T.Small className="text-muted-foreground text-sm">
									{guide.category}
								</T.Small>
							</div>
							<T.P className="text-muted-foreground">{guide.description}</T.P>
						</Link>
					))}
				</nav>
			</div>
		</div>
	);
}
