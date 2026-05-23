import { T } from "@lensed/ui/components/typography";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { allGuides } from "content-collections";
import { SafeMdxRenderer } from "safe-mdx";
import { mdxParse } from "safe-mdx/parse";

export const Route = createFileRoute("/guide/$slug")({
	component: GuidePage,
	loader: async ({ params }) => {
		const guidePage = allGuides.find((p) => p.slug === params.slug);
		if (!guidePage) throw notFound();
		return { page: guidePage };
	},
});

function GuidePage() {
	const { page } = Route.useLoaderData();
	const ast = mdxParse(page.content);

	return (
		<>
			<header className="mb-12">
				<div className="mb-4">
					<T.Small className="text-muted-foreground text-sm uppercase tracking-wide">
						{page.category}
					</T.Small>
				</div>
				<T.H1 className="text-balance font-mono text-[4rem] sm:text-[6rem] leading-20 sm:leading-24 uppercase my-8">
					{page.title}
				</T.H1>
				<div className="max-w-2xl">
					<T.Lead>{page.description}</T.Lead>
				</div>
			</header>

			<div className="prose max-w-none">
				<SafeMdxRenderer
					markdown={page.content}
					mdast={ast}
					components={{
						p({ children, ...props }) {
							return <T.P {...props}>{children}</T.P>;
						},
						h1({ children, ...props }) {
							return <T.H1 {...props}>{children}</T.H1>;
						},
						h2({ children, ...props }) {
							return <T.H2 {...props}>{children}</T.H2>;
						},
						h3({ children, ...props }) {
							return <T.H3 {...props}>{children}</T.H3>;
						},
						img: ({ src, alt }) => (
							<img src={src} alt={alt} loading="lazy" className="shadow-md" />
						),
						a({ children, href }) {
							if (href?.startsWith("/"))
								return <Link to={href}>{children}</Link>;
							return <a href={href}>{children}</a>;
						},
					}}
				/>
			</div>
		</>
	);
}
