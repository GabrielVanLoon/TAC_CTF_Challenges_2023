# Tempest Academy Conference CTF (2023)

Trilhas de Desafios criados para o Tempest Conference Academy CTF - 2023

## Como executar

Execute os seguintes comandos no terminal para buildar e executar os containers dos desafios:

```bash
# Trilha de Desafios de Automação
docker build -t tac-automation-challenge ./TAC_Automation_Challenge/
docker run -d -p 4000:4000 tac-automation-challenge

# Trilha de Desafios de GraphQL
docker build -t tac-graphql-challenge ./TAC_GraphQL_Challenge/
docker run -d -p 4001:4000 tac-graphql-challenge
```

# Trilha de Desafios 1 ~ Automação

## Level 0

- **Descrição** 
    - A Wicked Corp se envolveu em um escandalo recente, onde foi acusada de estar financiando projetos de cyberespionagem. 
    - Diante disso, você foi escalado por um grupo de hacker ativistas para tentar invadir os escritórios da Wicked e exfiltrar dados de seus servidores.
    - Sua primeira missão é entrar em uma sede menor no seguinte *site*: [LINK], boa sorte!
- **Dica:** 
    - Navegue calmamente pela aplicação e repare nos padrões das URLs

## level 1

- **Descrição**
    - Sua próxima missão será em um dos prédios comerciais da Wicked, localizado no seguinte *site*: [LINK], continue com o ótimo trabalho!
- **Dica:** 
    - Lembre-se que um dos grandes prazeres da computação é o de automatizar tarefas repetitivas. Só cuidado para não derrubar o edifício :)

## level 2

- **Descrição**
    - Sua próxima missão será no Head Quarter principal da Wicked, localizado no seguinte *site*: [LINK]. Boatos dizem que lá parece um grande labirinto, então mova-se com cautela!
- **Dica:** 
    - Lembre-se que um dos grandes prazeres da computação é o de automatizar tarefas repetitivas. Só cuidado para não derrubar o edifício :)

## level 3

- **Descrição**- **Descrição**
    - Sua próxima missão será em um dos prédios comerciais da Wicked, localizado no seguinte *site*: [LINK], continue com o ótimo trabalho!
- **Dica:** 
    - Lembre-se que um dos grandes prazeres da computação é o de automatizar tarefas repetitivas. Só cuidado para não derrubar o edifício :)
    - O time de Threat Intelligence descobriu nossas intenções de invadir o Data Center da Wicked Corp, e então instalaram travas de segurança digitais em todas as salas.
    - Vá para o *site* [LINK] e obtenha para nós as últimas evidências que precisamos. Cuidado para não disparar os alarmes!
- **Dica:** 
    - Preste atenção nas operações realizadas pelo navegador, nele haverá dicas valiosas.


# Trilha de Desafios 2 ~ GraphQL

## Wicked Wiki ~ Desafio 0

- **Descrição**
    - A Wicked Corp se envolveu em um escandalo recente, onde foi acusada de estar financiando projetos de cyberespionagem.
    - Diante disso, você foi escalado por um grupo de hacker ativistas para tentar extraviar dados que comprovem a conduta ilegal dos membros dessa corporação!

    - Um informante anônimo informou ao grupo que o *link* a seguir se trata de um sistema de Wiki ainda em desenvolvimento pela empresa e 
    que possui falhas de segurança que permitem vazar as evidência que precisamos. Acesse o *site* [LINK] e obtenha os dados para nós.
    - Missão: obtenha uma forma de obter acesso à API do sistema.
- **Dica**
    - Atente-se ao tráfego de rede e aos arquivos do site. Mesmo incompleto, ainda é possível obter informações valiosas.

## Wicked Wiki ~ Desafio 1

- **Descrição**
    - A Wicked Corp se envolveu em um escandalo recente, onde foi acusada de estar financiando projetos de cyberespionagem.
    - Diante disso, você foi escalado por um grupo de hacker ativistas para tentar extraviar dados que comprovem a conduta ilegal dos membros dessa corporação!

    - Um informante anônimo informou ao grupo que o *link* a seguir se trata de um sistema de Wiki ainda em desenvolvimento pela empresa e 
    que possui falhas de segurança que permitem vazar as evidência que precisamos. Acesse o *site* [LINK] e obtenha os dados para nós.
    - Missão: faça uma varredura inicial nas funcionalidades expostas pela API
- **Dica**
    - Não seja tímido e pesquise formas e ferramentas que permitem enumerar o tipo de API utilizada pela aplicação;

## Wicked Wiki ~ Desafio 2

- **Descrição**
    - A Wicked Corp se envolveu em um escandalo recente, onde foi acusada de estar financiando projetos de cyberespionagem.
    - Diante disso, você foi escalado por um grupo de hacker ativistas para tentar extraviar dados que comprovem a conduta ilegal dos membros dessa corporação!

    - Um informante anônimo informou ao grupo que o *link* a seguir se trata de um sistema de Wiki ainda em desenvolvimento pela empresa e 
    que possui falhas de segurança que permitem vazar as evidência que precisamos. Acesse o *site* [LINK] e obtenha os dados para nós.
    - Missão: Tente obter acesso aos arquivos restritos, nossa missão depende dessas informações.
- **Dica**
    - Mova-se com cautela, enquanto desbrava as consultas disponíveis com cada vez mais PROFUNDIDADE.

## Wicked Wiki ~ Desafio 3 

- **Descrição**
    - A Wicked Corp se envolveu em um escandalo recente, onde foi acusada de estar financiando projetos de cyberespionagem.
    - Diante disso, você foi escalado por um grupo de hacker ativistas para tentar extraviar dados que comprovem a conduta ilegal dos membros dessa corporação!

    - Um informante anônimo informou ao grupo que o *link* a seguir se trata de um sistema de Wiki ainda em desenvolvimento pela empresa e 
    que possui falhas de segurança que permitem vazar as evidência que precisamos. Acesse o *site* [LINK] e obtenha os dados para nós.
    - Missão: Tente realizar o download dos documentos PDF presente na aplicação.
- **Dica**
    - Além da flag anterior, que outros conhecimentos e insights você conseguiria obter do conteúdo da publicação? 

## Wicked Wiki ~ Desafio 4

- **Descrição**
    - A Wicked Corp se envolveu em um escandalo recente, onde foi acusada de estar financiando projetos de cyberespionagem.
    - Diante disso, você foi escalado por um grupo de hacker ativistas para tentar extraviar dados que comprovem a conduta ilegal dos membros dessa corporação!

    - Um informante anônimo informou ao grupo que o *link* a seguir se trata de um sistema de Wiki ainda em desenvolvimento pela empresa e 
    que possui falhas de segurança que permitem vazar as evidência que precisamos. Acesse o *site* [LINK] e obtenha os dados para nós.
    - Missão: Nosso informante nos disse que a empresa encontra-se em um momento de tensão e os funcionários estão enviando comunicações secretas por meio dos documentos internos. Consiga tais evidências para nós.
- **Dica**
    - Analise com mais afinco o mesmo documento em que obteve a flag do desafio 3.