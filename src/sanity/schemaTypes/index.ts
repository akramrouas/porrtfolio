import { type SchemaTypeDefinition } from 'sanity'
import skills from "./skills"
import project from './project'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skills,project],
}
