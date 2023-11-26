# Tempest Academy Conference CTF (2023)

Trilhas de Desafios criados para o Tempest Conference Academy CTF - 2023

## Como executar

Execute os seguintes comandos no terminal para construir e executar os containers dos desafios:

```bash
# Trilha de Desafios de Automação
docker build -t tac-automation-challenge ./TAC_Automation_Challenge/
docker run -d -p 4000:4000 tac-automation-challenge
# Visite http://localhost:4000/

# Trilha de Desafios de GraphQL
docker build -t tac-graphql-challenge ./TAC_GraphQL_Challenge/
docker run -d -p 4001:4000 tac-graphql-challenge
# Visite http://localhost:4001/
```

## Trilhas de Desafios

O evento contou com quatro trilhas de desafios distintas, cujas descrições e resoluções podem ser encontradas nos *links* a seguir:

- **Wicked Offices**
    - **Desafios:** [TRILHA_WICKED_OFFICES.md](TRILHA_WICKED_OFFICES.md)
    - **Write-ups:** [TRILHA_WICKED_OFFICES.md](WRITEUP_WICKED_OFFICES.md)

- **Wicked Wiki**
    - **Desafios:** [TRILHA_WICKED_OFFICES.md](TRILHA_WICKED_WIKI.md)
    - **Write-ups:** [TRILHA_WICKED_OFFICES.md](WRITEUP_WICKED_WIKI.md)

- **Wicked SA:**
    - **Github:** [https://github.com/Shinji-Mimura/ShinjiPath/](https://github.com/Shinji-Mimura/ShinjiPath/)

- **NexusLab**
    - **Github:** [https://github.com/aplneto/nexuslab](https://github.com/aplneto/nexuslab) 

## Lore do Evento

Os desafios criados possuiam como tema central uma *lore* envolvendo a *Wicked Corp*, uma corporação multinacional, suspeita de uma série de crimes. As informações podem ser encontradas no seguinte *link*: [OPERACAO_DERRUBADA.md](OPERACAO_DERRUBADA.md).