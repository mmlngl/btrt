import { T } from "@wintr/ui/components/typography";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
	component: AboutPage,
});

function AboutPage() {
	return (
		<div>
			<header className="mb-18">
				<T.H1 className="text-balance font-mono text-[6rem] sm:text-[10rem] leading-20 sm:leading-30 uppercase my-12">
					About
				</T.H1>
				<div className="max-w-2xl">
					<T.Lead>
						Build the Right Thing started as a way to organize everything I know
						about shipping products that matter.
					</T.Lead>
				</div>
			</header>

			<section className="mb-16">
				<T.H2 className="font-mono text-2xl mb-6">The Problem</T.H2>
				<div className="flex flex-col gap-4 max-w-xl">
					<T.P>
						Most product advice is either theoretical (sounds good, doesn't
						work) or tactical (here's a template, fill in the blanks). WINTR
						bridges both.
					</T.P>
					<T.P>
						After years building apps for startups, running my own company, and
						now leading technical product at an agency, I kept hitting the same
						wall: good intentions, bad execution.
					</T.P>
				</div>
			</section>

			<section className="mb-16">
				<T.H2 className="font-mono text-2xl mb-6">What I Know</T.H2>
				<div className="grid md:grid-cols-3 gap-8 max-w-3xl">
					<div>
						<T.H3 className="font-mono text-lg mb-3 text-accent">
							User Research
						</T.H3>
						<T.P>
							UX design, user interviews, usability testing, journey mapping.
							Understanding what users actually need vs. what they say they
							need.
						</T.P>
					</div>
					<div>
						<T.H3 className="font-mono text-lg mb-3 text-accent">
							Business Strategy
						</T.H3>
						<T.P>
							Startup experience, financial planning, proposition refinement,
							feasibility analysis. Making products that make money.
						</T.P>
					</div>
					<div>
						<T.H3 className="font-mono text-lg mb-3 text-accent">
							Software Engineering
						</T.H3>
						<T.P>
							TypeScript, Effect.ts, full-stack development. Building things
							that work and scale. Bridging technical and non-technical
							stakeholders.
						</T.P>
					</div>
				</div>
			</section>

			<section className="mb-16">
				<T.H2 className="font-mono text-2xl mb-6">The Skills</T.H2>
				<div className="flex flex-col gap-4 max-w-xl">
					<T.P>
						WINTR is structured as AI agent skills — reusable workflows that
						encapsulate my experience into actionable steps.
					</T.P>
					<T.P>
						Each skill handles a specific phase of product development. Use them
						individually or together as a framework.
					</T.P>
				</div>
			</section>

			<section>
				<T.H2 className="font-mono text-2xl mb-6">The Deal</T.H2>
				<div className="flex flex-col gap-4 max-w-xl">
					<T.P>
						90% of content is free. The remaining 10% is premium — bundled
						packages that go deeper, with more examples and advanced patterns.
					</T.P>
					<T.P>
						This is a work in progress. I'm building in public, iterating as I
						go, and using these skills daily in my own work.
					</T.P>
				</div>
			</section>
		</div>
	);
}
