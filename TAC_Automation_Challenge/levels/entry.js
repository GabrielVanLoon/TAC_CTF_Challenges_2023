import express from 'express'

// Flag configuration

// HTML TEMPLATE
const HTML_START_BODY = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTf-8"/>
    <title>Invasion ~ Wicked Corp Offices</title>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" type="text/css" href="/style.css">
    <style>
        // area, img:hover, map:hover { cursor: url('/images/pendrive-cursor.gif'), auto;}
    </style>
</head>
<body>
    <div>
        <h1>Escolha o Desafio!</h1>
    </div>
    <img src="/images/predios.jpg" usemap="#mymap"/>
    <map name="mymap">
        <area shape="rect" coords="0,0,500,500"      href="/level0/" alt="path-1" title="path-0">
        <area shape="rect" coords="500,0,1000,500"    href="/level1/" alt="path-2" title="path-1">
        <area shape="rect" coords="0,500,500,1000"    href="/level2/" alt="path-3" title="path-2">
        <area shape="rect" coords="500,500,1000,1000"  href="/level3/" alt="path-4" title="path-3">
    </map>
</body> 
</html>
`
// Routes Generation
const entryRoutes = express.Router();

entryRoutes.get("/", (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(HTML_START_BODY));
})

export default entryRoutes