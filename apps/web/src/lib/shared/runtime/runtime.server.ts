import * as Layer from "effect/Layer";
import * as ManagedRuntime from "effect/ManagedRuntime";
import * as SkillRepo from "./skill-repo.server";
import * as WorkerEnv from "./worker-env.server";

export const CfLayer = Layer.mergeAll(WorkerEnv.WorkerEnv.layerFromEnv);

export const ServicesLayer = Layer.mergeAll(SkillRepo.SkillRepo.layer).pipe(
	Layer.provideMerge(CfLayer),
);

export const runtime = ManagedRuntime.make(ServicesLayer);
