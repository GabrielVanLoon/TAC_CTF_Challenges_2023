import express from 'express'
import dotenv from 'dotenv'

// Flag configuration
dotenv.config();
const FLAG_1 = process.env["FLAG_1"] || "TAC{cbfa41bfc7a02097a787b210fe612fd3ee4b93e84e7c1ace07dd8391f73ac6e8}"
const FLAG_1_COMBINATION = process.env["FLAG_1"] || "23"

// HTML TEMPLATE
const HTML_HEADERS = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTf-8"/>
    <title>Invasion ~ Level 0</title>
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
        <h1>${FLAG_1}</h1>
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
const level0Routes = express.Router();

level0Routes.get("/:char0?/:char1?", (req, res) => {
    
    const char0 = req.params.char0
    const char1 = req.params.char1

    if(char0 == FLAG_1_COMBINATION[0] && char1 == FLAG_1_COMBINATION[1]){
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(HTML_HEADERS + HTML_FLAG_BODY));
        
    } else if(char1) { 
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(HTML_HEADERS + HTML_END_BODY));
    
    } else {
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(HTML_HEADERS + HTML_PATH_BODY));
    }
})

export default level0Routes