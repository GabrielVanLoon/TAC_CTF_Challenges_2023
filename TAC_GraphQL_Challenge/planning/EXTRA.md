# Trilha Pentest "Físico" ~ Tempest Conference Academy (2023)

Trilha de desafios voltado para prática de métodos de brute force em uma aplicação de RH. Cada desafio irá forçar o usuário
a realizar um script de automação para encontrar a flag em um "labirinto" de paths e páginas.

## Resumo dos desafios

1. Labirinto iniciante
    - A página inicial irá conter a imagem de um edifício, cuja entrada irá ser um link para uma segunda página. (`entrance.html`)
    - As demais páginas irão conter a imagem de um corredor contendo 4 portas, cada portá irá levar para um outro corredor (`index.html`)
    - O jogador terá que faz um fuzz de 4^5 páginas para encontrar a combinção em que a flag se encontra (e.g: `/building1/1/3/3/1/2/1/index.html`)

2. Labirinto médio
    - Semelhante ao desafio anterior, porém dessa vez os paths serão valores alfanuméricos aleatórios 
    - O usuário terá que extrair as possibilidades de path na mão e fazer um código de DFS para encontrar a flag (e.g: `/building2/B/x/H/9/l/C/index.html`)
    - O prédio da página inicial desse edifício será um pouco maior que o anterior

4. Labirinto Hard
    - Vai ser semelhante ao desafio 2, porém cada página possui um desafio de CAPTCHA (que pode ser quebrado utilizando OCR)
    - O pulo do gato vai ser o jogador perceber que se o parametro do CAPTCHA não for enviado, é possível ignorá-lo

3. Labirinto Challenge
    - Semelhance ao desafio 1, porém cada página irá conter um desafio de CAPTCHA (que possa ser quebrável utilizando OCR) que precisa ser quebrado de fato