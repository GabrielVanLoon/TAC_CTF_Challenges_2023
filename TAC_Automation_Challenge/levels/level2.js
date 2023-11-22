import express from 'express'
import dotenv from 'dotenv'
import level2Tree from './level2Tree.js';

// Flag configuration
dotenv.config();
const FLAG_3 = process.env["FLAG_3"] || "TAC{ea48266a725636fea755acdbcbb921d65abe03c0a18d62b8eb3670cf23663f9d}"
// const FLAG_3_COMBINATION = process.env["FLAG_1"] || "23030" // coos dale deed move

// HTML TEMPLATE
const HTML_HEADERS = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTf-8"/>
    <title>Invasion ~ Level 2</title>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" type="text/css" href="/style.css">
    <style>
        // area, img:hover, map:hover { cursor: url('/images/pendrive-cursor.gif'), auto;}
    </style>
</head>
`

const HTML_PATH_BODY = `
<body>
    <div>
        <h1>Encontre o Servidor!</h1>
    </div>
    <img src="/images/corredor.jpg" usemap="#mymap"/>
    <map name="mymap">
        <area shape="rect" coords="0,0,500,500"      href="0/" alt="path-1" title="path-0">
        <area shape="rect" coords="500,0,1000,500"    href="1/" alt="path-2" title="path-1">
        <area shape="rect" coords="0,500,500,1000"    href="2/" alt="path-3" title="path-2">
        <area shape="rect" coords="500,500,1000,1000"  href="3/" alt="path-4" title="path-3">
    </map>
</body> 
</html>
`

const HTML_FLAG_BODY = `
<body>
    <div>
        <h1>${FLAG_3}</h1>
    </div>
    <img src="/images/servidores.jpg">
</body> 
</html>
`

const HTML_END_BODY = `
<body>
    <div>
        <h1>BUSTED!</h1>
    </div>
    <img src="/images/segurancas.jpg"/>
</body> 
</html>
`

// Dynamic Template Generator
function buildPaths(paths) {
    return `
    <body>
        <div>
            <h1>Encontre o Servidor!</h1>
        </div>
        <img src="/images/corredor.jpg" usemap="#mymap"/>
        <map name="mymap">
            <area shape="rect" coords="0,0,500,500"      href="${paths[0]}/" alt="path-1" title="path-${paths[0]}">
            <area shape="rect" coords="500,0,1000,500"    href="${paths[1]}/" alt="path-2" title="path-${paths[1]}">
            <area shape="rect" coords="0,500,500,1000"    href="${paths[2]}/" alt="path-3" title="path-${paths[2]}">
            <area shape="rect" coords="500,500,1000,1000"  href="${paths[3]}/" alt="path-4" title="path-${paths[3]}">
        </map>
    </body> 
    </html>
    `
}


// Routes Generation
const level2Routes = express.Router();

level2Routes.get("/:char0?/:char1?/:char2?/:char3?", (req, res) => {
    
    // Get current path based on path
    let currentPath = level2Tree
    currentPath = req.params.char0 ? currentPath.paths[req.params.char0] : currentPath
    currentPath = req.params.char1 && currentPath != undefined ? currentPath.paths[req.params.char1] : currentPath
    currentPath = req.params.char2 && currentPath != undefined ? currentPath.paths[req.params.char2] : currentPath
    currentPath = req.params.char3 && currentPath != undefined ? currentPath.paths[req.params.char3] : currentPath

    if(currentPath && currentPath.flag){
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(HTML_HEADERS + HTML_FLAG_BODY));
        
    } else if(currentPath && Object.keys(currentPath.paths).length == 0) { 
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(HTML_HEADERS + HTML_END_BODY));
    
    } else if(currentPath){
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(HTML_HEADERS + buildPaths(Object.keys(currentPath.paths))));
    } else {
        res.redirect('/level2/');
    }
})


export default level2Routes