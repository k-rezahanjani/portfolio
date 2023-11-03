import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from '../portfolio/sanity/schemas/index';

export default defineConfig({
  basePath: '/studio',
  projectId: 'rl5a80u6',
  dataset: 'production',
  schemaTypes,
  apitVersion: '2021-03-25',
  plugins: [
    deskTool(),
  ],
})
