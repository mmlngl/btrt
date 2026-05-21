import * as Layer from "effect/Layer";
import * as ManagedRuntime from "effect/ManagedRuntime";
import * as PosterRepo from "./poster-repo.server";
import * as WorkerEnv from "./worker-env.server";

export const CfLayer = Layer.mergeAll(WorkerEnv.WorkerEnv.layerFromEnv);

export const ServicesLayer = Layer.mergeAll(PosterRepo.PosterRepo.layer).pipe(
	Layer.provideMerge(CfLayer),
);

export const runtime = ManagedRuntime.make(ServicesLayer);
