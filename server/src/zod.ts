import { z } from "zod";

// creating a schema for strings
const mySchema = z.string();

// parsing
mySchema.parse("hello world");
mySchema.parse(123); // throws error

// 'safe' parsing (doesn't throw error)
mySchema.safeParse("hello world");
mySchema.safeParse(123); // returns {success: false, error: ...}
