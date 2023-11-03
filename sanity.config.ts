import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import {schemaTypes} from "../portfolio/sanity/schemas/index";


const config =  defineConfig({
    projectId: 'p0ipwu50',
    dataset: 'production',
    title: 'My Personal Portfolio',
    apiVersion: '2023-05-04',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {types: schemaTypes}
  })

  export default config;