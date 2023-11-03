import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import {schemaTypes} from "../portfolio/sanity/schemas/index";


const config =  defineConfig({
    projectId: 'rl5a80u6',
    dataset: 'production',
    title: 'My Personal Portfolio',
    apiVersion: '2021-03-25',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {types: schemaTypes}
  })

  export default config;