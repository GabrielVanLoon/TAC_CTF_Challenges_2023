# Trilha Pentest "Físico" ~ Tempest Conference Academy (2023)

Trilha de desafios voltado para prática de métodos de brute force em uma aplicação de RH. Cada desafio irá forçar o usuário
a realizar um script de automação para encontrar a flag em um "labirinto" de paths e páginas.

## Resumo dos desafios

0. Labirinto 4 Dummyes
    - 20 paginas que o usuário poderá navegar na mão para achar a flag, esse desafio irá setar o clima do que está por vir.

1. Labirinto iniciante
    - A página inicial irá conter a imagem de um edifício, cuja entrada irá ser um link para uma segunda página. (`entrance.html`)
    - As demais páginas irão conter a imagem de um corredor contendo 4 portas, cada portá irá levar para um outro corredor (`0,1,2 ou 3`)
    - O jogador terá que faz um fuzz de 4^5 páginas para encontrar a combinção em que a flag se encontra (e.g: `/level1/1/3/3/2/1`)

2. Labirinto médio
    - Semelhante ao desafio anterior, porém dessa vez os paths serão valores alfanuméricos aleatórios 
    - O usuário terá que extrair as possibilidades de path na mão e fazer um código de DFS para encontrar a flag (e.g: `/level2/type/ugly/bark/node`)
    - O prédio da página inicial desse edifício será um pouco maior que o anterior

4. Labirinto Hard
    - Vai ser semelhante ao desafio 2, porém cada página possui um desafio de Proof of Work usando md5

3. Labirinto Challenge (Fica para a próxima edição)
    - Semelhance ao desafio 1, porém cada página irá conter um desafio de CAPTCHA (que pode ser quebrado utilizando OCR)