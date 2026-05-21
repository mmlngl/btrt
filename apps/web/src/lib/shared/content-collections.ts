import { defineCollection, defineConfig } from "@content-collections/core";
import * as Schema from "effect/Schema";

const Poster = Schema.Struct({
	content: Schema.String,
	date: Schema.DateFromString,
	fragmentShader: Schema.String,
	slug: Schema.String,
	themeColor: Schema.String,
	title: Schema.String,
	vertexShader: Schema.String,
});

const posters = defineCollection({
	name: "posters",
	directory: "../../../content/posters",
	include: "*.mdx",
	schema: Schema.toStandardSchemaV1(Poster),
});

const config = defineConfig({
	content: [posters],
});

export default config;
