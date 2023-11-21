// Graph Solution Structure
// Start in id 29
// 29 -> Company Culture -> 
//     6/9 -> Company News
//         2 -> Quarters Report
//         3 -> Information Technology
//             20 -> IT Operations
//             20 -> Hardware Infrastructure
//                 10 -> Guides
//                     1/22 -> Human Resources
//                         14 -> Performance Reviews
//                             16 -> Management
                                
//                     15/24 -> Product Development
                
//         25 -> Legal

const pages = [
  {
    "id": "1",
    "title": "Guia de Onboard de Funcionários",
    "summary": "Um guia abrangente elaborado pelo Gerente de Recursos Humanos, Benjamin Reynolds, delineando o processo de integração de funcionários, dando as boas-vindas aos novos contratados na empresa.",
    "content": "\nGuia de Integração de Funcionários:\n\n**Passos Chave:**\n1. Mensagem de Boas-Vindas: Uma calorosa recepção ao novo funcionário, apresentando-os à nossa cultura empresarial.\n2. Documentação: Preenchimento de documentos necessários e fornecimento de identificação exigida.\n3. Orientação: Uma visão geral da história da empresa, valores e estrutura organizacional.\n4. Apresentação da Equipe: Conectar novos contratados com os membros de suas equipes e principais interessados.\n\nGarantindo uma experiência de integração tranquila para cada novo membro de nossa equipe!\n",
    "hasAttachment": false,
    "createdAt": "2023-05-10T10:30:00Z",
    "categories": [
      "3",
      "4",
    ],
    "authorId": 3 // Benjamin - HR Specialist
  },
  
  {
    "id": "2",
    "title": "Atualização da Empresa - T3 2023",
    "summary": "Uma atualização da Executiva Olivia Anderson destacando conquistas-chave, desafios e iniciativas estratégicas para o terceiro trimestre de 2023.",
    "content": "\nAtualização da Empresa - T3 2023:\n\n**Principais Destaques:**\n1. Alcançado crescimento de receita de 20% em comparação com o T2 2023.\n2. Lançamento bem-sucedido de novas funcionalidades do produto aprimorando a experiência do cliente.\n3. Expansão para novos mercados impulsionando a visibilidade da marca.\n4. Reconhecimento dos Funcionários: Reconhecendo contribuições excepcionais de equipes em diversos departamentos.\n\nUma visão abrangente do progresso da empresa e metas futuras!\n",
    "hasAttachment": false,
    "createdAt": "2023-05-11T10:30:00Z",
    "categories": [
      "1",
      "2"
    ],
    "authorId": 4 // Olivia Anderson - CEO
  },
  
  {
    "id": "3",
    "title": "Migração de Dados da Wiki - Atualização do Chefe de TI Samuel Porter",
    "summary": "O Chefe de TI Samuel Porter compartilha informações importantes sobre a migração contínua de dados da wiki para o novo sistema.",
    "content": "\nMigração de Dados da Wiki - Atualização do Chefe de TI Samuel Porter:\n\n**Atualização de Status:**\n1. **Desenvolvimento em Andamento:** O novo sistema para a migração de dados da wiki está atualmente em desenvolvimento, e nossa equipe de TI está trabalhando ativamente em sua implementação.\n\n2. **Aprimoramentos:** O novo sistema visa fornecer recursos aprimorados e uma melhor experiência do usuário, garantindo uma plataforma mais eficiente e amigável para acessar dados da wiki.\n\n3. **Cronograma:** Enquanto o desenvolvimento está em andamento, antecipamos que o processo de migração começará nas próximas semanas. Um cronograma detalhado será compartilhado à medida que nos aproximamos da data de lançamento.\n\n4. **Treinamento de Usuários:** Para garantir uma transição tranquila, conduziremos sessões de treinamento para todos os usuários sobre as funcionalidades do novo sistema.\n\nFique atento para mais atualizações e sinta-se à vontade para entrar em contato com nossa equipe de TI se tiver alguma pergunta ou preocupação específica.\n",
    "hasAttachment": false,
    "createdAt": "2023-05-13T14:45:00Z",
    "categories": [
      "1",
      "6",
    ],
    "authorId": 1 // Samuel Porter - Chief IT
  },

  {
    "id": "4",
    "title": "Guia de Manutenção de Hardware",
    "summary": "Um guia abrangente sobre a manutenção da infraestrutura de hardware para um desempenho ótimo.",
    "content": "\nBem-vindo ao \"Guia de Manutenção de Hardware\"!\n\n**Tarefas Essenciais:**\n1. Limpeza regular dos componentes de hardware.\n2. Verificação e substituição de componentes defeituosos.\n3. Atualização de firmware e drivers.\n4. Monitoramento de temperaturas e desempenho do sistema.\n\nAssegure a longevidade e eficiência de nossa infraestrutura de hardware com essas práticas de manutenção!\n",
    "hasAttachment": false,
    "createdAt": "2023-05-13T15:00:00Z",
    "categories": [
      "8",
      "7"
    ],
    "authorId": 9 // Christopher - Hardware and IT Guy
  },

  {
    "id": "5",
    "title": "Treinamento de Acesso à Intranet",
    "summary": "Um guia abrangente sobre como acessar e navegar nos sistemas de intranet da empresa.",
    "content": "\nBem-vindo à sessão de \"Treinamento de Acesso à Intranet\"!\n\nNeste treinamento, você aprenderá a acessar e navegar efetivamente nos sistemas de intranet da empresa. Siga as etapas abaixo para garantir uma experiência sem problemas.\n\n**Etapa 1: Login na Intranet**\n- Abra seu navegador da web e acesse o portal de intranet da empresa.\n- Use suas credenciais corporativas para fazer login.\n\n**Etapa 2: Navegação na Intranet**\n- Explore as várias seções e recursos disponíveis na intranet.\n- Familiarize-se com links importantes, anúncios e páginas departamentais.\n\n**Etapa 3: Acesso a Documentos e Recursos**\n- Aprenda como encontrar e baixar documentos e recursos armazenados na intranet.\n- Entenda a organização de arquivos e pastas compartilhadas.\n\nParabéns! Você concluiu com sucesso o Treinamento de Acesso à Intranet. Se tiver alguma dúvida ou encontrar algum problema, não hesite em entrar em contato com a equipe de suporte de TI.\n\nObrigado por participar!\n",
    "hasAttachment": false,
    "createdAt": "2023-05-15T10:30:00Z",
    "categories": [
      "8",
      "5",
    ],
    "authorId": 10 // Emily Sutton - Dev and Training Girl
  },

  {
    "id": "6",
    "title": "Visão Estratégica para 2024 - Mensagem aos Funcionários",
    "summary": "Olivia Anderson compartilha a visão estratégica da empresa para o próximo ano, delineando áreas-chave de foco e objetivos.",
    "content": "\nVisão Estratégica para 2024 - Mensagem aos Funcionários:\n\n**Áreas de Foco:**\n1. Inovação: Incentivar uma cultura de inovação contínua e exploração.\n2. Desenvolvimento de Funcionários: Investir em programas de treinamento e desenvolvimento para capacitar nossa força de trabalho.\n3. Iniciativas de Sustentabilidade: Integrar práticas conscientes do meio ambiente em nossas operações.\n4. Abordagem Centrada no Cliente: Fortalecer relacionamentos com clientes por meio de serviços e suporte aprimorados.\n\nUm apelo à ação para todos os funcionários contribuírem para o sucesso da empresa no próximo ano!\n",
    "hasAttachment": false,
    "createdAt": "2023-05-17T13:45:00Z",
    "categories": [
      "1",
      "9",
    ],
    "authorId": 4 // Olivia Anderson - CEO
  },

  {
    "id": "7",
    "title": "Dicas de Organização de Racks de Servidores",
    "summary": "Diretrizes para organizar racks de servidores para maximizar eficiência e acessibilidade.",
    "content": "\nBem-vindo à página \"Dicas de Organização de Racks de Servidores\"!\n\n**Estratégias Chave:**\n1. Gerenciamento adequado de cabos para fácil identificação e manutenção.\n2. Organização de servidores com base no uso e prioridade.\n3. Implementação de gerenciamento adequado de resfriamento e fluxo de ar.\n4. Rotulação e documentação de equipamentos para referência rápida.\n\nOtimize nossos racks de servidores para uma configuração de hardware mais eficiente e organizada!\n",
    "hasAttachment": false,
    "createdAt": "2023-05-21T10:30:00Z",
    "categories": [
      "8",
      "7"
    ],
    "authorId": "9" // Christopher - Hardware and IT Guy
  },

  {
    "id": "8",
    "title": "Notas da Reunião com Prospect - Green Energy Solutions",
    "summary": "Notas detalhadas de uma reunião recente com o prospect Green Energy Solutions, delineando colaborações potenciais.",
    "content": "\nNotas da Reunião - Green Energy Solutions:\n\n**Data:** 2023-06-12\n**Participantes:** Natalie Walker, Mark Thompson (Green Energy Solutions)\n**Pontos de Discussão:**\n- Exploração de soluções de energia renovável para seus projetos.\n- Proposta para um webinar conjunto sobre sustentabilidade na indústria.\n\nFaça o acompanhamento com a Green Energy Solutions para discussões adicionais!\n",
    "hasAttachment": false,
    "createdAt": "2023-05-21T15:15:00Z",
    "categories": [
      "10",
      "11"
    ],
    "authorId": 8 // Natalie Walker - Sales and Prospects
  },

  {
    "id": "9",
    "title": "Dia de Apreciação ao Funcionário - Nota de Agradecimento",
    "summary": "Uma nota sincera da Executiva Olivia Anderson expressando gratidão a todos os funcionários no Dia de Apreciação ao Funcionário.",
    "content": "\nDia de Apreciação ao Funcionário - Nota de Agradecimento:\n\n**Mensagem:**\nCaro Time,\nQuero expressar minha sincera gratidão a cada um de vocês por sua dedicação, trabalho árduo e paixão. Suas contribuições são a força motriz por trás de nosso sucesso, e sou verdadeiramente grata por ter uma equipe tão talentosa e comprometida. Vamos continuar a alcançar a grandeza juntos!\n\nAtenciosamente,\nOlivia Anderson\nCEO\n",
    "hasAttachment": false,
    "createdAt": "2023-05-22T15:00:00Z",
    "categories": [
      "1",
      "9",
    ],
    "authorId": 4 // Olivia Anderson - CEO
  },

  {
    "id": "10",
    "title": "Melhores Práticas em Aquisição de Hardware",
    "summary": "Orientações sobre como adquirir componentes de hardware para a infraestrutura.",
    "content": "\nBem-vindo à página \"Melhores Práticas em Aquisição de Hardware\"!\n\n**Estratégias Eficazes:**\n1. Realização de pesquisas detalhadas sobre especificações de hardware e fornecedores.\n2. Estabelecimento de parcerias com fornecedores confiáveis.\n3. Consideração de escalabilidade e compatibilidade futuras.\n4. Realização de análise de custo-benefício para investimentos em hardware.\n\nGaranta um desempenho ideal seguindo as melhores práticas em aquisição de hardware!\n",
    "hasAttachment": false,
    "createdAt": "2023-05-25T12:15:00Z",
    "categories": [
      "4",
      "8",
      "7"
    ],
    "authorId": 9 // Christopher - Hardware and IT Guy
  },

  {
    "id": "11",
    "title": "Novo Anúncio de Projeto Federal - Aviso Confidencial",
    "summary": "A CEO Olivia Anderson anuncia o início de um novo projeto federal e enfatiza a necessidade crítica de confidencialidade entre todos os funcionários.",
    "content": "\nNovo Anúncio de Projeto Federal - Aviso Confidencial:\n\n**Anúncio:**\nÉ com prazer que informo que nossa empresa conquistou um novo projeto federal com significativa importância estratégica. Este projeto representa um marco importante para nossa organização e abre novas oportunidades de crescimento.\n\n**Aviso de Confidencialidade:**\nDada a natureza sensível deste projeto e a importância de manter uma vantagem competitiva, enfatizo a extrema importância de manter todos os detalhes do projeto em sigilo. Essas informações não devem ser divulgadas a ninguém fora da empresa, incluindo amigos, familiares ou contatos da indústria.\n\n**Implicações Legais:**\nDivulgações de informações confidenciais podem ter implicações legais e impactar negativamente nossa capacidade de entrega bem-sucedida. Confio em cada um de vocês para manter os valores da empresa e proteger a integridade deste projeto.\n\nObrigada pela compreensão e comprometimento com nosso sucesso contínuo.\n\nAtenciosamente,\nOlivia Anderson\nCEO\n",
    "hasAttachment": false,
    "createdAt": "2023-05-30T09:30:00Z",
    "categories": [
      "12",
    ],
    "authorId": 4 // Olivia Anderson - CEO
  },

  {
    "id": "12",
    "title": "Depoimento do Cliente - Global Innovations Ltd.",
    "summary": "Um depoimento do cliente Global Innovations Ltd., expressando satisfação com nossos serviços.",
    "content": "\nDepoimento do Cliente:\n\n**Empresa:** Global Innovations Ltd.\n**Depoimento:**\n\"Trabalhar com Natalie e a equipe foi um divisor de águas para o nosso negócio. Suas soluções melhoraram significativamente nossa eficiência operacional. Recomendamos altamente seus serviços.\"\n\nObrigado, Global Innovations Ltd., pela confiança e parceria!\n",
    "hasAttachment": false,
    "createdAt": "2023-06-03T11:30:00Z",
    "categories": [
      "10",
      "13"
    ],
    "authorId": 8 // Natalie Walker - Sales and Prospects
  },

  {
    "id": "13",
    "title": "Notas Não Oficiais - Venda para Organização Federal Não Nomeada",
    "summary": "Notas informais sobre uma venda bem-sucedida para uma organização federal não nomeada.",
    "content": "\nNotas Não Oficiais - Venda para Organização Federal:\n\n**Data:** 2023-06-20\n**Detalhes:**\n- Fechamento bem-sucedido de um acordo com uma organização federal para soluções de software.\n- Devido à confidencialidade, o nome da organização não é divulgado nos registros oficiais.\n- Pontos-chave discutidos incluem recursos de cibersegurança, escalabilidade e monitoramento.\n- Previsão de início do projeto no T3 2023.\n\nCelebrando o sucesso desta significativa parceria com uma organização federal!\n",
    "hasAttachment": false,
    "createdAt": "2023-06-03T14:45:00Z",
    "categories": [
      "10",
      "12",
    ],
    "authorId": 8 // Natalie Walker - Sales and Prospects
  },

  {
    "id": "14",
    "title": "Processo de Avaliação de Desempenho",
    "summary": "O Gerente de Recursos Humanos Benjamin Reynolds explica o processo de avaliação de desempenho da empresa, fornecendo orientação para funcionários e gestores.",
    "content": "\nProcesso de Avaliação de Desempenho:\n\n**Visão Geral:**\n1. Definição de Metas: Definição colaborativa de metas entre funcionários e gestores no início do ciclo de desempenho.\n2. Feedback Contínuo: Estímulo ao feedback contínuo e comunicação ao longo do ano.\n3. Critérios de Avaliação: Avaliação de desempenho com base em critérios estabelecidos e indicadores-chave de desempenho.\n4. Planos de Desenvolvimento: Identificação de áreas para melhoria e criação de planos de desenvolvimento personalizados.\n\nFomentando uma cultura de melhoria contínua por meio de nosso processo de avaliação de desempenho!\n",
    "hasAttachment": false,
    "createdAt": "2023-06-10T13:45:00Z",
    "categories": [
      "3",
      "14"
    ],
    "authorId": 3 // Benjamin - HR Specialist
  },

  {
    "id": "15",
    "title": "Melhores Práticas de CI/CD",
    "summary": "Explorando as melhores práticas para Integração Contínua e Deploy Contínuo em nosso fluxo de desenvolvimento.",
    "content": "\nBem-vindo à sessão \"Melhores Práticas de CI/CD\"!\n\nNesta sessão, exploraremos as melhores práticas para Integração Contínua (CI) e Deploy Contínuo (CD) em nosso fluxo de desenvolvimento. Siga as diretrizes abaixo para aprimorar nossos processos de desenvolvimento.\n\n**Compreendendo CI/CD**\n- Tenha uma compreensão clara do que envolve Integração Contínua e Deploy Contínuo.\n- Aprenda como essas práticas contribuem para um desenvolvimento de software eficiente e confiável.\n\n**Configurando Builds Automatizadas**\n- Explore a configuração de builds automatizadas para otimizar o processo de integração.\n- Utilize ferramentas como Jenkins ou GitLab CI para automatizar o processo de build.\n\n**Implementando Testes Automatizados**\n- Compreenda a importância dos testes automatizados no pipeline CI/CD.\n- Explore diferentes tipos de testes automatizados e como eles se encaixam no ciclo de desenvolvimento.\n\n**Garantindo a Qualidade do Código**\n- Aprenda a manter a qualidade do código por meio de revisões de código e análise estática.\n- Compreenda o papel da qualidade do código na implementação bem-sucedida de CI/CD.\n\n**Estratégias de Deploy**\n- Explore várias estratégias de deploy, incluindo implementações blue-green e lançamentos canários.\n- Compreenda como minimizar o tempo de inatividade durante o deploy.\n\nParabéns! Você concluiu a sessão de Melhores Práticas de CI/CD. Se tiver alguma dúvida ou precisar de esclarecimentos adicionais, sinta-se à vontade para entrar em contato com a equipe de desenvolvimento.\n\nObrigada pelo seu compromisso com as melhores práticas de desenvolvimento!\n",
    "hasAttachment": false,
    "createdAt": "2023-06-25T14:45:00Z",
    "categories": [
      "4",
      "15",
      "8"
    ],
    "authorId": 10 // Emily Sutton - Dev and Training Girl
  },

  {
    "id": "16",
    "title": "Relatório de Status de Entrega - Venda para Organização Federal",
    "summary": "Um relatório detalhado sobre o status atual da entrega das soluções de software vendidas para a organização federal não nomeada.",
    "content": "\nRelatório de Status de Entrega - Venda para Organização Federal:\n\n**Data:** 2023-07-05\n**Métricas Principais:**\n- Progresso do projeto: No prazo\n- Principais funcionalidades implementadas: Aprimoramentos em cibersegurança, medidas de monitoramento.\n- Colaboração da equipe: Forte colaboração interfuncional.\n- Previsão de conclusão da entrega: T4 2023.\n\nMonitorando o status de entrega para garantir uma implementação bem-sucedida para nosso cliente federal!\n",
    "hasAttachment": false,
    "createdAt": "2023-07-25T09:15:00Z",
    "categories": [
      "16",
      "17"
    ],
    "authorId": 2 // Victoria Mitchell - Project Manager
  },

  {
    "id": "17",
    "title": "Melhores Práticas para Coleta de Dados PII",
    "summary": "Diretrizes para coletar informações de Identificação Pessoal (PII) seguindo padrões de privacidade e conformidade.",
    "content": "\nMelhores Práticas para Coleta de Dados PII:\n\n**Diretrizes Principais:**\n1. Obtenha consentimento explícito das pessoas antes de coletar qualquer dado PII.\n2. Implemente canais seguros e criptografados para a transmissão de dados.\n3. Limite a coleta de dados PII desnecessários e colete apenas informações essenciais.\n4. Atualize regularmente acordos de consentimento e políticas de privacidade para alinhamento com padrões em evolução.\n\nGarantindo práticas de coleta de dados PII responsáveis e em conformidade!\n",
    "hasAttachment": false,
    "createdAt": "2023-07-27T09:00:00Z",
    "categories": [
      "18",
      "19"
    ],
    "authorId": 7 // Jonathan Hayes - Data Scientist Expert
  },

  {
    "id": "18",
    "title": "Técnicas de Transformação de Dados PII",
    "summary": "Exploração de técnicas para transformar dados de Identificação Pessoal (PII) garantindo anonimato e segurança.",
    "content": "\nTécnicas de Transformação de Dados PII:\n\n**Visão Geral de Métodos:**\n1. Tokenização: Substituição de dados PII sensíveis por tokens exclusivos para processamento de dados.\n2. Anonimização: Remoção de detalhes de identificação pessoal para criar conjuntos de dados anônimos.\n3. Mascaramento de Dados: Ocultação de partes de dados PII para proteger informações sensíveis durante a análise.\n4. Privacidade Diferencial: Introdução de ruído para evitar a identificação individual enquanto preserva tendências gerais de dados.\n\nEstratégias para proteger dados PII durante processos de transformação!\n",
    "hasAttachment": false,
    "createdAt": "2023-08-01T11:30:00Z",
    "categories": [
      "18",
      "20"
    ],
    "authorId": 7 // Jonathan Hayes - Data Scientist Expert
  },

  {
    "id": "19",
    "title": "Métricas de Desempenho da Equipe - T2 2023",
    "summary": "Uma visão abrangente das métricas de desempenho da equipe para o T2 2023.",
    "content": "\nMétricas de Desempenho da Equipe - T2 2023:\n\n**Visão Geral das Métricas:**\n- Taxa de entrega de projetos: 95%\n- Pontuação de satisfação do cliente: 4,8/5\n- Tempo médio de resposta a consultas de clientes: 1 hora\n- Índice de colaboração da equipe: 92%\n\nReconhecendo a dedicação da equipe e o comprometimento com a excelência no T2 2023!\n",
    "hasAttachment": false,
    "createdAt": "2023-08-03T14:30:00Z",
    "categories": [
      "16",
      "14"
    ],
    "authorId": 2 // Victoria Mitchell - Project Manager
  },

  {
    "id": "20",
    "title": "Diretrizes de Segurança para Data Center",
    "summary": "Recomendações para garantir a segurança da infraestrutura de hardware no data center.",
    "content": "\nBem-vindo à página \"Diretrizes de Segurança para Data Center\"!\n\n**Medidas de Segurança Principais:**\n1. Implementação de controles de acesso e sistemas de monitoramento.\n2. Auditorias de segurança regulares e avaliações de vulnerabilidade.\n3. Planejamento de recuperação de desastres para proteção de hardware.\n4. Treinamento de funcionários sobre protocolos de segurança do data center.\n\nAprimore a segurança de nossa infraestrutura de hardware com estas diretrizes!\n",
    "hasAttachment": false,
    "createdAt": "2023-08-07T09:45:00Z",
    "categories": [
      "8",
      "7",
      "6",
    ],
    "authorId": 9 // Christopher - Hardware and IT Guy
  },

  {
    "id": "21",
    "title": "Armazenamento Seguro de Dados PII",
    "summary": "Recomendações para armazenar com segurança dados de Informações Pessoalmente Identificáveis (PII) para evitar acesso não autorizado e garantir conformidade.",
    "content": "\nArmazenamento Seguro de Dados PII:\n\n**Medidas de Segurança Principais:**\n1. Criptografia: Implementação de criptografia de ponta a ponta para dados PII armazenados.\n2. Controles de Acesso: Restrição de acesso a PII com base em função e necessidade.\n3. Auditorias Regulares: Realização de auditorias periódicas para identificar e corrigir vulnerabilidades de segurança.\n4. Conformidade com Residência de Dados: Garantir que o armazenamento de dados PII esteja em conformidade com requisitos legais e regulatórios.\n\nPriorizando a segurança e conformidade dos dados PII armazenados!\n",
    "hasAttachment": false,
    "createdAt": "2023-08-12T14:15:00Z",
    "categories": [
      "18",
      "19"
    ],
    "authorId": 7 // Jonathan Hayes - Data Scientist Expert
  },

  {
    "id": "22",
    "title": "Políticas de Licença de Funcionários",
    "summary": "Um guia informativo do Gerente de Recursos Humanos Benjamin Reynolds detalhando as políticas e procedimentos da empresa em relação às licenças dos funcionários.",
    "content": "\nPolíticas de Licença de Funcionários:\n\n**Informações Principais:**\n1. Tipos de Licenças: Explicação de vários tipos de licenças, incluindo férias, licença médica e licença parental.\n2. Processo de Solicitação: Como solicitar e obter aprovação para diferentes tipos de licenças.\n3. Saldo de Licença: Acompanhamento de saldos e acumulações de licença.\n4. Retorno ao Trabalho: Diretrizes para funcionários que retornam ao trabalho após um período de licença.\n\nGarantindo clareza e justiça em nossas políticas de licença para funcionários!\n",
    "hasAttachment": false,
    "createdAt": "2023-08-18T15:15:00Z",
    "categories": [
      "3",
      "4",
    ],
    "authorId": 3 // Benjamin - HR Specialist
  },

  {
    "id": "23",
    "title": "Análise Crítica - Preocupações com o Projeto *********",
    "summary": "Uma análise crítica de Victoria Mitchell destacando preocupações graves relacionadas à privacidade de dados, algoritmos enviesados e riscos financeiros associados ao projeto em andamento.",
    "content": "\nAnálise Crítica - Preocupações do Projeto:\n\n**Data:** 2023-07-25\n**Preocupações Principais:**\n1. **Ameaça à Privacidade de Dados:** O projeto representa uma ameaça significativa à privacidade dos dados do usuário, levantando sérias preocupações éticas e legais.\n2. **Decisões Algorítmicas Enviesadas:** Descoberta de evidências de algoritmos que incorporam viés, o que pode levar a resultados discriminatórios, uma questão ética crítica.\n3. **Riscos Financeiros:** Identificação de riscos financeiros potenciais que poderiam impactar a sustentabilidade do projeto e os relacionamentos com os clientes.\n\n**Ações Imediatas:**\n- Revisão urgente e revisão das práticas de manipulação de dados.\n- Avaliação ética e ajuste dos algoritmos para eliminar viés.\n- Avaliação aprofundada de riscos financeiros e planejamento de mitigação.\n\nPartes interessadas, precisamos de ação imediata para abordar essas preocupações críticas e manter padrões éticos no projeto!\n",
    "hasAttachment": false,
    "createdAt": "2023-08-25T15:30:00Z",
    "categories": [
      "9",
      "19",
    ],
    "authorId": 2 // Victoria Mitchell - Project Manager
  },

  {
    "id": "24",
    "title": "Utilizando a Plataforma de Pesquisa NexusLab",
    "summary": "Um tutorial sobre como acessar e utilizar a Plataforma de Pesquisa NexusLab para fins de desenvolvimento.",
    "content": "\nBem-vindo ao tutorial \"Utilizando a Plataforma de Pesquisa NexusLab\"!\n\n**Primeiros Passos:**\n1. Acesse o NexusLab em [NexusLab](https://nexuslab.wickedcorp.online).\n2. Faça login usando suas credenciais corporativas.\n3. Explore diretórios de projetos e controle de versão.\n4. Execute experimentos e colabore em pesquisas.\n\nSinta-se à vontade para explorar o potencial completo do NexusLab para seus projetos de desenvolvimento!\n",
    "hasAttachment": false,
    "createdAt": "2023-08-25T09:30:00Z",
    "categories": [
      "15",
      "4",
    ],
    "authorId": 10 // Emily Sutton - Dev and Training Girl
  },

  {
    "id": "25",
    "title": "Considerações Legais e Éticas - Mensagem Importante",
    "summary": "A CEO Olivia Anderson aborda preocupações legais e éticas potenciais relacionadas ao novo projeto federal e fornece orientações sobre canais apropriados para abordar tais preocupações.",
    "content": "\nConsiderações Legais e Éticas - Mensagem Importante:\n\n**Mensagem:**\nQuerida Equipe,\n\nAo iniciarmos nosso novo projeto federal, eu entendo que alguns de vocês podem ter preocupações sobre desafios legais e éticos potenciais. É crucial reconhecer e abordar essas preocupações de maneira responsável.\n\n**Orientação:**\n1. Se você se deparar com qualquer situação que levante questões legais ou éticas, por favor, não a ignore. Relate suas preocupações pelos canais estabelecidos, como nosso sistema de relatórios interno ou diretamente ao seu supervisor.\n2. Nosso compromisso com transparência e integridade é inabalável. Incentivamos a comunicação aberta e estamos dedicados a abordar preocupações de maneira justa e oportuna.\n3. Lembre-se de que a aderência a padrões legais e éticos é uma responsabilidade compartilhada. Estamos aqui para nos apoiarmos mutuamente e garantir que nossas ações reflitam nosso compromisso com práticas comerciais éticas.\n\nObrigada pela sua dedicação aos valores de nossa empresa.\n\nAtenciosamente,\nOlivia Anderson\nCEO\n",
    "hasAttachment": false,
    "createdAt": "2023-08-26T11:00:00Z",
    "categories": [
      "1",
      "20",
    ],
    "authorId": 4 // Olivia Anderson - CEO
  },

  {
    "id": "26",
    "title": "Aviso de Desligamento de Funcionário - Natalie Walker",
    "summary": "Um anúncio oficial sobre o desligamento de Natalie Walker devido a sérias violações das políticas da empresa.",
    "content": "\nAviso de Desligamento de Funcionário - Natalie Walker:\n\n**Motivos para o Desligamento:**\n1. Violação de Acordos de Não Divulgação (NDA): Natalie Walker quebrou acordos de confidencialidade, representando um risco significativo para os interesses da empresa.\n2. Menosprezo à Cultura da Empresa: Engajamento em comportamentos prejudiciais a um ambiente de trabalho positivo e inclusivo.\n3. Insubordinação: Falha em seguir instruções gerenciais e diretrizes da empresa.\n4. Ameaças Legais: Fazer ameaças de ação legal contra a empresa.\n\nEsta decisão segue uma investigação minuciosa e uma consideração cuidadosa dos fatos. Desejamos a Natalie Walker sucesso em seus empreendimentos futuros.\n\nAnexo: [Offboard_Natalie.pdf](http://{baseUrl}/uploads/67404be69188a4a930213d5987903591.pdf)", 
    "hasAttachment": true,
    "flag": "TAC{454368a6cdfa4fa069627495d2da909f691de7398e04bd71879719c256aaf99a}",
    "createdAt": "2023-08-26T10:30:00Z",
    "categories": [
      "3",
    ],
    "authorId": 3 // Benjamin - HR Specialist
  },

  {
    "id": "27",
    "title": "Aviso de Demissão de Funcionário - Jonathan Hayes",
    "summary": "Um anúncio oficial sobre a demissão de Jonathan Hayes devido a sérias violações das políticas da empresa.",
    "content": "\nAviso de Demissão de Funcionário - Jonathan Hayes:\n\n**Motivos para a Demissão:**\n1. Violação de Acordos de Não Divulgação (NDA): Jonathan Hayes violou acordos de confidencialidade, comprometendo informações sensíveis da empresa.\n2. Menosprezo à Cultura da Empresa: Engajamento em ações que minam um ambiente de trabalho positivo e inclusivo.\n3. Insubordinação: Instâncias repetidas de desafio às instruções gerenciais e protocolos da empresa.\n4. Ameaças Legais: Fazer ameaças de ação legal contra a empresa.\n\nEsta decisão é resultado de uma revisão abrangente das ações de Jonathan Hayes e seu impacto na empresa. Desejamos a ele o melhor em seus empreendimentos futuros.\n",
    "hasAttachment": false,
    "createdAt": "2023-08-26T10:35:00Z",
    "categories": [
      "3",
    ],
    "authorId": 3 // Benjamin - HR Specialist
  },

  {
    "id": "28",
    "title": "Revisão de Feedback 360 Graus - Destaque do Funcionário",
    "summary": "O Gerente de Recursos Humanos Benjamin Reynolds destaca um funcionário exemplar por meio de uma revisão de feedback 360 graus, destacando contribuições e feedback colaborativo de colegas e gerentes.",
    "content": "\nRevisão de Feedback 360 Graus - Destaque do Funcionário:\n\n**Destaque do Funcionário:**\n1. Conquistas e Contribuições: Reconhecimento do trabalho excepcional e realizações do funcionário.\n2. Feedback dos Colegas: Insights de colegas sobre as habilidades colaborativas e de trabalho em equipe do funcionário.\n3. Perspectiva Gerencial: Feedback do supervisor direto do funcionário sobre liderança e desempenho.\n4. Oportunidades de Desenvolvimento: Incentivo ao crescimento contínuo e aprimoramento de habilidades.\n\nCelebrando a excelência e promovendo uma cultura de reconhecimento positivo!\n",
    "hasAttachment": false,
    "createdAt": "2023-08-29T10:35:00Z",
    "categories": [
      "3",
    ],
    "authorId": 3 // Benjamin - HR Specialist
  },

  {
    "id": "29",
    "title": "Nota Aberta - Preocupações e Feedback",
    "summary": "Alexander Harrison compartilha feedback aberto sobre o ambiente da empresa e levanta preocupações sobre transparência e práticas de RH.",
    "content": "\nNota Aberta - Preocupações e Feedback:\n\n**Caros Colegas,**\n\nSinto-me compelido a expressar algumas preocupações com as quais tenho lidado em relação ao nosso ambiente de trabalho. Embora valorize as oportunidades e desafios que nossa empresa proporciona, acredito que há áreas que precisam de atenção:\n\n1. **Ambiente Tóxico da Empresa:** O clima parece estar tenso, impactando a moral e a colaboração dos funcionários. É crucial para nós cultivar uma cultura de trabalho positiva.\n\n2. **Transparência em Projetos:** Parece haver falta de transparência sobre projetos em andamento. Uma comunicação aprimorada sobre a direção e metas da empresa beneficiaria a todos.\n\n3. **Pressão Negativa do RH:** Existe uma sensação de desconforto em relação às conversas com ex-colegas. É importante para o RH promover um ambiente de comunicação aberta, em vez de desencorajá-la.\n\nCompartilho esses pensamentos com a intenção de contribuir para o nosso crescimento coletivo. Vamos trabalhar juntos para criar um ambiente de trabalho **SOB NOVOS VALORES E CULTURA**, onde todos se sintam ouvidos e valorizados.\n\nAtenciosamente,\nAlexander Harrison\n",
    "hasAttachment": true,
    "createdAt": "2023-10-25T10:30:00Z",
    "categories": [
      "9",
    ],
    "authorId": 5 // Alexander Harrison - Concerned Employee
  }
];

export default pages