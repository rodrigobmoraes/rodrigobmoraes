---
sidebar_position: 1
---
# Versão 6.2.3

# Melhorias

## **BIP-1726 Incluir coluna para informar gestor no grid de relações de RTV e Estrutura Técnica.**

Incluso uma coluna para informar/diferenciar se é gestor ou aplicador no grid de relações de rtv e estrutura tecnica da campanha de marketing.

![Docusaurus logo](/img/bip-1726-jira.png)

## **BIP-2365 Melhorar a performance da consulta de clientes da campanha.**

Em alguns ambientes e clientes, o sistema estava apresentando lentidão ao listar os clientes da campanha. Foi necessário melhorar a rotina que lista as pendências do cliente.

## **BIP-2379 Alterar o campo de cultura no formulário de Regulamento.**
`Caminho: Administração > Cadastros > Campanhas > Fluxo > Config. Culturas.`

Foi ajustado no banco de dados algumas tabelas para melhorar o relacionamento do cadastro de culturas.

## **BIP-2380 Criar cadastro de Cultura.**
`Caminho: Administração > Cadastros > Campanhas > Fluxo > Config. Culturas.`

Foi criado um cadastro de cultura para as campanhas.

![Docusaurus logo](/img/bip-2380-jira.png)

## **BIP-2381 Alterar o campo de cultura no formulário de solicitação.**
`Caminho: Administração > Cadastros > Campanhas > Fluxo > Config. Culturas.`

Foi alterado o campo cultura no banco de dados para melhorar a manutenção de cadastros.

![Docusaurus logo](/img/bip-2380-jira.png)

## **BIP-2384 Exibir por grupo de campanhas.**
`Caminho: Campanha de Marketing > Início > Campanhas.`
`Caminho: Eventos > Planos de Ação > Plano Ação.`

Foram ajustados as páginas de campanhas de marketing e o plano ação.

![Docusaurus logo](/img/bip-2384-jira.png)

## **BIP-2392 Criar um tipo de painel da campanha que seja um conteúdo do sistema.**
`Caminho: Administração > Cadastros > Campanhas > Campanhas.`

O tipo de painel "Conteúdo" segue as regras já estabelecidas no conceito de conteúdo, para criar os objetos de painel.

Para configurar um painel do tipo conteúdo, só é necessário parametrizar qual o conteúdo será utilizado.

![Docusaurus logo](/img/bip-2392-jira.png)

## **BIP-2403 Melhorias no desempenho da consulta de PNZ.**
`Caminho: Eventos > Panos de Ação > PNZ.`

Foi ajustada a página do PNZ para melhorar o desempenho.

## **BIP-2404 Relatório de Aceite de Regulamento.**
`Caminho: Administração > Integração > Central de Integração.`

Foi desenvolvido um relatório disponibilizado na central de integrações no módulo de Campanha Marketing.

![Docusaurus logo](/img/bip-2404-jira.png)

## **BIP-2405 Relatório de Metas.**
`Caminho: Administração > Integração > Central de Integração.`

Ajustado a consulta do relatório de Metas na central de integração em Campanha Marketing.

![Docusaurus logo](/img/bip-2405-jira.png)

## **BIP-2406 Colocar texto 5W2H no PNZ.**
`Caminho: Eventos > Planos de Ação > PNZ.`

Na etapa 3. Detalhes ao criar um PNZ, foi incluso algumas informações para auxiliar o usuário ao preencher o formulário 5W2H.

![Docusaurus logo](/img/bip-2406-jira.png)

## **BIP-2409 Resumo de Indicadores no plano de ação.**
`Caminho: Eventos > Planos de Ação > PNZ.`

Foi incluso na consulta workflow a aba de indicadores, onde consta os valores de sell-in e sell-out do grupo da empresa.

![Docusaurus logo](/img/bip-2409-jira.png)

## **BIP-2420 Permitir que os cards do resumo da campanha sejam dinâmicos e configuráveis obedecendo o cadastro da campanha.**

Todos os painéis configurados na campanha no local "Visão geral de campanha", são exibidos na aba "Resumo", seguindo as regras de configuração de conteúdo, linha, coluna etc.

## **BIP-2421 Listar também NFs em processamento para campanhas que consolidam pela amarração dos contatos relacionados.**
`Caminho: Administração > Cadastros > Campanhas > Campanhas.`

Quando a campanha de marketing estiver com o parâmetro "Tipo de consolidação do POG" selecionado com a opção "Consolidar pela amarração com os contatos relacionados", o sistema exibe a NF mesmo que a mesma não esteja processada pelo DIPPER.

![Docusaurus logo](/img/bip-2421-jira.png)

## **BIP-2423 Relatório Eventos PNZ / Detalhes do evento.**
`Caminho: Administração > Integração > Central de Integração.`

Incluso na central de integração o relatório de “Eventos PNZ/Detalhes do Evento”.

![Docusaurus logo](/img/bip-2423-jira.png)

## **BIP-2425 Ajuste na tela Manutenção Distribuidor na lista de preço.**

Internamente foi ajustado o armazenamento da lista de preços dos clientes.

## **BIP-2426 E-mail de atraso de aprovação de etapa de Metas e Plano de Ação.**

Foi incluso um recurso de disparo de e-mail caso tenha um atraso de dois dias sem a etapa ser aprovada/reprovada.

# Correções

## **BIP-2356 No campo de CPF/CNPJ está apenas aparecendo a mascará de CPF ao cadastrar um vendedor.**

Ao cadastrar um participante na campanha de marketing, tem a opção de informar o CPF ou CNPJ do mesmo, porém o sistema só apresentava a mascará do CPF, impossibilitando informar um CNPJ. Foi devidamente ajustado para que seja exibido a mascará do CNPJ ao passar de 11 dígitos.

![Docusaurus logo](/img/bip-2356-jira.png)