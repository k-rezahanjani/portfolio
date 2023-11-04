import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import {schemaTypes} from "./sanity/schemas";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";


const config =  defineConfig({
    projectId: 'rl5a80u6',
    dataset: 'production',
    title: 'My Personal Portfolio',
    apiVersion: '2021-03-25',
    basePath: '/admin',
    plugins: [deskTool(), vercelDeployTool()],
    schema: {types: schemaTypes}
  })

  export default config;