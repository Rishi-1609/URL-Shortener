CREATE TABLE "urls" (
	"id" char(26) PRIMARY KEY NOT NULL,
	"original_url" text NOT NULL,
	"short_code" varchar(8) NOT NULL,
	"created_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "urls_short_code_unique" UNIQUE("short_code")
);
