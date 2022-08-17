// import { createVueComponentGenerator } from '@teleporthq/teleport-component-generator-vue'
import nuxtGenerator from "@teleporthq/teleport-project-generator-nuxt"
import { uidl } from './UIDLtest.js'
// const { uidl } = require('./UIDLtest')


// const uidl = {
//     "name": "My First Component",
//     "node": {
//         "type": "element",
//         "content": {
//             "elementType": "text",
//             "children": [{
//                 "type": "static",
//                 "content": "Hello World!"
//             }]
//         }
//     }
// }

// const generator = createVueComponentGenerator();
// const { files } = await generator.generateComponent(uidl)
// console.log(files[0].content)

const result = await nuxtGenerator.createNuxtProjectGenerator(uidl)
console.log(result);