import { defineCollection, defineConfig } from "@content-collections/core";
import * as Schema from "effect/Schema";

const Skill = Schema.Struct({
	name: Schema.String,
	slug: Schema.String,
	oneliner: Schema.String,
	description: Schema.String,
	category: Schema.String,
	themeColor: Schema.String,
	fragmentShader: Schema.String,
	vertexShader: Schema.String,
	content: Schema.String,
});

const skills = defineCollection({
	name: "skills",
	directory: "../../../content/skills",
	include: "*.mdx",
	schema: Schema.toStandardSchemaV1(Skill),
});

const config = defineConfig({
	content: [skills],
});

export default config;
