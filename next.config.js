// next.config.js
const withTM = require('next-transpile-modules')(['gsap/ScrollTrigger']); // pass the modules you would like to see transpiled

module.exports = withTM();
// {
//   transpileModules: ['gsap/ScrollTrigger'],
//   exportPathMap: async function(
//     defaultPathMap,
//     { dev, dir, outDir, distDir, buildId }
//   ) {
//     return {
//       "/": { page: "/" },
//       "/team": { page: "/team.html" },
//       "/projects": { page: "/projects.html" }
//     };
//   }
// }