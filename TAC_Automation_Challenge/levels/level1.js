import express from 'express'
import dotenv from 'dotenv'

// Flag configuration
dotenv.config();
const FLAG_2 = process.env["FLAG_2"] || "TAC{fbbbd51b48aa6f39d43c98fc7976b5b17fd185042bf0c1b5e5e1642236d90d34}"
const FLAG_2_COMBINATION = process.env["FLAG_1"] || "23030"

// HTML TEMPLATE
const HTML_HEADERS = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTf-8"/>
    <title>Invasion ~ Level 1</title>
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
        <h1>${FLAG_2}</h1>
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

// Routes Generation
const level1Routes = express.Router();

level1Routes.get("/:char0?/:char1?/:char2?/:char3?/:char4?", (req, res) => {
    
    const combination = `${req.params.char0}${req.params.char1}${req.params.char2}${req.params.char3}${req.params.char4}`
    const char4 = req.params.char4

    if(FLAG_2_COMBINATION === combination){
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(HTML_HEADERS + HTML_FLAG_BODY));
        
    } else if(char4) { 
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(HTML_HEADERS + HTML_END_BODY));
    
    } else {
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(HTML_HEADERS + HTML_PATH_BODY));
    }
})

export default level1Routes