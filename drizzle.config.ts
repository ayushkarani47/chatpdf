import * as dotenv from 'dotenv';
import { Config, defineConfig } from 'drizzle-kit';
dotenv.config({ path: ".env" });

export default defineConfig({
  schema: './src/lib/db/schema.ts',
  //out: './drizzle',
  dialect: 'postgresql',
  
  
  dbCredentials: {
    url: process.env.Database_Url!,
  },
})satisfies Config;
