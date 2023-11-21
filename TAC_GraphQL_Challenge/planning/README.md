# Trilha Desafios GraphQL - Tempest Conference Academy (2023)

Trilha de desafios envolvendo exploração de falhas em uma API graphQL de uma aplicação de RH ainda em desenvolvimento.

## Flags

- Flag 1 -> TAC{98df942e78b89d3941e9767e73cba98c31ab7e3c40f3b7694d44aa6358385ce9}
- Flag 2 -> TAC{69763c166cc0fcff891ceb609ccc0d550539272910c247a2ade9aeb1fec4737d}
- Flag 3 -> TAC{454368a6cdfa4fa069627495d2da909f691de7398e04bd71879719c256aaf99a}
- Flag 4 -> TAC{dd11af7b65881444c4611d5bd2d3e6972ab9be46b682bff71c5c2140b89a3d17}
- Flag 5 -> TAC{6a2e8e751076217efdacdbba739fef5fddcfa8d5c7a3c0e2c83baa16aacff09d}


## Resumo dos Desafios (Ideia Inicial)

1. Será fornecido ao jogador um link com a URL para a página de Login do novo sistema de RH
    - A página de login não estará funcional, e ao submeter o formulário será informado que o sistema inda está em construção;
    - A primeira flag se encontrará no arquivo main.js, nas variáveis de ambiente
    - Lá também estará exposto a flag do path da API graphQL

2. Ao analisar a api GraphQL, o jogador poderá notar que a API possui habilitado o recurso de Introspection
    - Análise das Queries e Types declarados no Schema GraphQL
    - A flag se encontrara em um uma query de `settings` presente; 
        - Nela também irá leakar um token de Authorization de baixo privilégio.
        - Nela também irá leakar uma chave de criptografia AES.

3. Com o token em mãos, o usuário poderá começar a executar uma maior quantidade de queries
    - O usuário poderá listar informações salvas no sistema, mas não poderá acessar dados postados por outros usuários
    - Para obter a flag, o usuário terá que acessar um dos registros de forma indireta, navegando por meio do grafo exposto pelo GraphQL
        - Junto da flag, o usuário terá acesso a um novo par de credenciais leakados, estes com maiores privilégios.

4. Com acesso as credenciais de maior privilégio, o usuário poderá visualizar uma maior quantidade de dados do graphQL
    - Ao analisar os novos dados, ele poderá perceber que é possível realizar o download de Anexos do servidor.
    - Uma das postagens irá conter um arquivo PDF com uma senha numérica de 4 digitos numéricos, dentro dele estará uma das flags

5. Ao fazer a análise do formato de como os arquivos são salvos, o jogador terá que perceber que está sendo utilizado o AES leakado no `settings`
    - Haverá uma listagem de arquivos salvos (nome original) no servidor e a quais postagens elas estão linkadas
    - Um desses arquivos será o flag.txt e o usuário poderá acessar e baixar o mesmo.

## Resumo dos Desafios (Final)

1. Será fornecido ao jogador um link com a URL para a página de Login do novo sistema de RH
    - A página de login se trata de um app REACT sem nenhuma interface
    - Aplicação realiza um ping para o GraphQL e possui código não ofuscado
    - No código fonte se encontra a primeira flag e um token JWT leakado

2. Ao analisar a api GraphQL, o jogador poderá notar que a API possui habilitado o recurso de Introspection
    - Análise das Queries e Types declarados no Schema GraphQL
    - O usuário consegue listar maioria das queries ao utilizar o Authorization token.
    - A flag se encontrara em um uma query de `development` presente; 
        - Nela também irá leakar uma chave utilizada por um algoritmo HMAC md5

3. O usuário deverá analisar seu token JWT, verificar seu userId e tentar acessar a página que possui acesso.
    - Navegando pelo grafo, o usuário conseguirá acessar a página que possui a flag
    - A página também irá expor um link de download para um arquivo PDF (sem senha alguma)

4. Ao analisar o link, o usuário deverá descobrir por tentativa e erro que o nome do arquivo foi substituido
   pelo seu hmac (i.e.: novo_filename = md5_hmace(filename) + '.ext', secretKey).
   - Ao descobrir tal padrão, o usuário conseguirá fazer o download do arquivo restante e conseguir a ultima flag.

5. A quinta flag se encontra no mesmo documento, porém com seu texto em branco para se camuflar ao background do arquivo PDF.