// Placeholder posts — replace with real ones once the blog exists.
export type Block =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "code"; text: string }

export interface Post {
  title: string
  date: string // YYYY-MM-DD
  summary: string
  // A post gets its own page at /lab/a/writing/<slug> once it has both of these.
  slug?: string
  body?: Block[]
}

const posts: Post[] = [
  {
    title: "Writing custom post-processing passes in three.js",
    date: "2025-09-14",
    summary: "Notes from building a bloom and tone-mapping chain without losing frame rate.",
    slug: "custom-post-processing-three-js",
    // Draft body, to be rewritten in Daniel's own words.
    body: [
      {
        type: "paragraph",
        text: "Post-processing is where a three.js scene starts to look finished. It's also where frame rate quietly disappears, because every pass is another full-screen draw. These are notes on keeping a chain simple enough to stay fast.",
      },
      { type: "heading", text: "Start with a small chain" },
      {
        type: "paragraph",
        text: "EffectComposer renders the scene into a target, then runs each pass over the result. A useful baseline is the scene render, one effect, and an output pass that handles tone mapping and color space conversion last.",
      },
      {
        type: "code",
        text: `import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js"
import { RenderPass } from "three/addons/postprocessing/RenderPass.js"
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js"
import { OutputPass } from "three/addons/postprocessing/OutputPass.js"

const composer = new EffectComposer(renderer)
composer.addPass(new RenderPass(scene, camera))
composer.addPass(new UnrealBloomPass(size, 0.4, 0.5, 0.9))
composer.addPass(new OutputPass())

// In the render loop, in place of renderer.render(scene, camera)
composer.render()`,
      },
      { type: "heading", text: "Write your own pass" },
      {
        type: "paragraph",
        text: "A custom effect doesn't need much. ShaderPass runs a fragment shader over the previous pass, which arrives as the tDiffuse texture.",
      },
      {
        type: "code",
        text: `import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js"

const VignetteShader = {
  uniforms: { tDiffuse: { value: null }, strength: { value: 0.4 } },
  vertexShader: \`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }\`,
  fragmentShader: \`
    uniform sampler2D tDiffuse;
    uniform float strength;
    varying vec2 vUv;
    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      float falloff = distance(vUv, vec2(0.5));
      color.rgb *= 1.0 - falloff * strength;
      gl_FragColor = color;
    }\`,
}

composer.insertPass(new ShaderPass(VignetteShader), 2)`,
      },
      { type: "heading", text: "Keep it fast" },
      {
        type: "paragraph",
        text: "Cost scales with resolution and pass count. Cap the pixel ratio, merge simple effects into one shader instead of stacking passes, and measure on the slowest device you care about. Often the cheapest pass is the one you remove.",
      },
    ],
  },
  {
    title: "What I learned building artist tools in Frostbite",
    date: "2025-06-02",
    summary: "Data types, camera rigs, and why the best tool is the one artists don't notice.",
  },
  {
    title: "Migrating thousands of 3D assets without losing your mind",
    date: "2025-02-20",
    summary: "An ETL pipeline from SharePoint to a DAM, and the edge cases that bit us.",
  },
  {
    title: "Pipeline TD lessons from feature film VFX",
    date: "2024-11-08",
    summary: "What working on Black Panther taught me about tools under deadline pressure.",
  },
]

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" })

export default posts
