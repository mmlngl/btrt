import { allSkills, type Skill } from "content-collections";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";

export interface SkillRepoTrait {
	all(): Effect.Effect<ReadonlyArray<Skill>>;
	getForSlug(slug: string): Effect.Effect<Option.Option<Skill>>;
}

export class SkillRepo extends Context.Service<SkillRepo, SkillRepoTrait>()(
	"SkillRepo",
) {
	static layer = Layer.succeed(
		SkillRepo,
		SkillRepo.of({
			all: Effect.fn("SkillRepo.all")(function* () {
				const sortedPosts = allSkills.sort(
					(a, b) => b.date.getTime() - a.date.getTime(),
				);
				return yield* Effect.succeed(sortedPosts);
			}),

			getForSlug: Effect.fn("SkillRepo.getForSlug")(function* (slug) {
				const found = allSkills.find((poster) => poster.slug === slug);
				return yield* Effect.succeed(Option.fromUndefinedOr(found));
			}),
		}),
	);
}
