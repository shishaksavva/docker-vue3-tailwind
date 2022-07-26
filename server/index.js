const Koa = require("koa");
const serve = require("koa-static");
const Router = require('koa-router');
const path = require("path");

const app = new Koa();
const router = new Router();

const appName = "GitHub Repositories Help";

app.use(serve(path.join(__dirname, '..', 'vue', 'dist')))
// router.get("/", ctx => {
//     ctx.type = "html";
//     ctx.body = `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8" />
//             <link rel="icon" href="/favicon.ico" />
//             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//             <title>${appName}</title>
//             <script type="module" crossorigin src="/assets/index.c6110f71.js"></script>
//             <link rel="stylesheet" href="/assets/index.e61f68a7.css">
//         </head>
//         <body>
//             <div id="app"></div>
//         </body>
//         </html>
//     `;
// })
// app.use(router.routes());
// app.use(router.allowedMethods());

app.listen(8000, () => console.log("Сервер запущен по http://localhost:8000"))