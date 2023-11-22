import express from 'express'
import dotenv from 'dotenv'
import crypto from 'crypto'
import level3Tree from './level3Tree.js';

// Flag configuration
dotenv.config();
const FLAG_4 = process.env["FLAG_4"] || "TAC{6ca79670b2dfe2e2059ccbbece565676c53ece8b46b2cfca46fdc3361c906fbd}"
// const FLAG_3_COMBINATION = process.env["FLAG_1"] || "23030" // fans dope pair boat

// HTML TEMPLATE
const HTML_HEADERS = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTf-8"/>
    <title>Invasion ~ Level 3</title>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" type="text/css" href="/style.css">
    <style>
        // area, img:hover, map:hover { cursor: url('/images/pendrive-cursor.gif'), auto;}
    </style>
</head>
`
const HTML_FLAG_BODY = `
<body>
    <div>
        <h1>${FLAG_4}</h1>
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

const HTML_ALARM_BODY = `
<body>
    <div>
        <h1>ALARME DISPARADO!</h1>
    </div>
    <img src="/images/alarme.jpg"/>
</body> 
</html>
`

// Dynamic Template Generator
function buildPaths(paths) {
    return `
    <body>
        <div>
            <h1 id="titleMessage">Encontre o Servidor!</h1>
        </div>
        <img src="/images/corredor.jpg" usemap="#mymap"/>
        <map name="mymap">
            <area shape="rect" coords="0,0,500,500"      onclick="clickCallback('${paths[0]}')" alt="path-1" title="path-${paths[0]}">
            <area shape="rect" coords="500,0,1000,500"    onclick="clickCallback('${paths[1]}')" alt="path-2" title="path-${paths[1]}">
            <area shape="rect" coords="0,500,500,1000"    onclick="clickCallback('${paths[2]}')" alt="path-3" title="path-${paths[2]}">
            <area shape="rect" coords="500,500,1000,1000"  onclick="clickCallback('${paths[3]}')" alt="path-4" title="path-${paths[3]}">
        </map>
        <script type="text/javascript"  src="/proof-of-work.js"></script>
    </body> 
    </html>
    `
}


// Routes Generation
const level3Routes = express.Router();

level3Routes.get("/:char0?/:char1?/:char2?/:char3?", (req, res) => {
    
    // Get current path based on path
    let currentPath = level3Tree
    currentPath = req.params.char0 ? currentPath.paths[req.params.char0] : currentPath
    currentPath = req.params.char1 && currentPath != undefined ? currentPath.paths[req.params.char1] : currentPath
    currentPath = req.params.char2 && currentPath != undefined ? currentPath.paths[req.params.char2] : currentPath
    currentPath = req.params.char3 && currentPath != undefined ? currentPath.paths[req.params.char3] : currentPath

    // Calculate Proof of Work
    const code = req.query.code || '1' 
    const userHash = req.query.hash || ''
    const nonce = `level3${req.params.char0 || ''}${req.params.char1 || ''}${req.params.char2 || ''}${req.params.char3 || ''}`
    const computedHash = crypto.createHash('sha256').update(`${code}${nonce}`).digest('hex')
    // const computedHash = crypto.createHash('md5').update(`${code}${nonce}`).digest('hex')

    if(req.params.char0 && (userHash != computedHash || !computedHash.startsWith('0000'))){
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(HTML_HEADERS + HTML_ALARM_BODY));
        
    } else if(currentPath && currentPath.flag){
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(HTML_HEADERS + HTML_FLAG_BODY));
        
    } else if(currentPath && Object.keys(currentPath.paths).length == 0) { 
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(HTML_HEADERS + HTML_END_BODY));
    
    } else if(currentPath){
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(HTML_HEADERS + buildPaths(Object.keys(currentPath.paths))));
    } else {
        res.redirect('/level3/');
    }
})


export default level3Routes