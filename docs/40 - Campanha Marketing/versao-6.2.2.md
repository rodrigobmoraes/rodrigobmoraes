---
sidebar_position: 1
---
# Versão 6.2.2

# Melhorias

## **BIP-2079 Incluir relações "RTC/TC" e área plantada no relatório de cooperantes.**
`Caminho: Administração > Integração > Central de Integração.`

No relatório de apuração de cooperantes, precisamos inserir novos campos:
Relações (RTV/Técnico de Campo);
Área Plantada (área comercial e área produtiva).

![Docusaurus logo](/img/bip-2079-jira.png)

## **BIP-2349 Alterar campo responsável pelo cliente.**
`Caminho: Administração > Cadastros > Campanhas > Campanhas.`

Alterado o campo responsável pelo cliente para buscar o nome da área de atuação que está como gestor.

![Docusaurus logo](/img/bip-2349-jira.png)

## **BIP-2350 Alterar relatório Documento e Documento Detalhado.**
`Caminho: Administração > Integração > Central de Integração.`

Adicionado os filtros Ano e Grupo Econômico (opcional) nos relatórios Documentos e Detalhes.

![Docusaurus logo](/img/bip-2350-jira.png)

## **BIP-2351 Alterar o relatório de Sellin.**
`Caminho: Administração > Integração > Central de Integração.`

Adicionado os filtros Ano e Grupo Econômico (opcional) no relatório de sellin.

![Docusaurus logo](/img/bip-2351-jira.png)

## **BIP-2352 Validar usuário na tela de pessoa relacionada.**

Ajustado a tela de pessoa relacionada para validar usuários já cadastrados no sistema.

![Docusaurus logo](/img/bip-2352-jira.png)

## **BIP-2360 Sistema está criando um outro WF ao alterar a meta.**

Antes, quando a etapa volta para o RTV editar o valor das metas, por exemplo, ao clicar em enviar para aprovação na tela de meta, o sistema estava criando um NOVO WORKFLOW Ajustado para que seja enviado a aprovação sem criar um novo workflow.

## **BIP-2362 Alterar valores de percentuais de meta para 2 casas decimais.**

Ajustado os valores percentuais de meta para duas casas decimais.

# Correções

## **BIP-2289 O sistema não está aplicando os filtros corretamente nos painéis de páginas com mais de um item.**
`Caminho: Campanha de Marketing > Início > Campanhas.`

Ao entrar no detalhamento de uma unidade de campanha, cuja página possua mais de um painel contendo um dashboard table, o sistema as vezes não estava aplicando corretamente o filtro da unidade de campanha selecionada.

## **BIP-2330 Ajustar a rotina de pesquisa dos dados do vendedor na página de cadastro do vendedor da Campanha de Marketing.**

Ajustado o erro na página de cadastro do vendedor, quando o usuário digitava um CPF, o sistema realiza a pesquisa dos dados do vendedor e faz o preenchimento dos campos no formulário, porém no campo de CPF/CNPJ a rotina recuperava a máscara de CNPJ para o CPF.

![Docusaurus logo](/img/bip-2330-jira.png)

## **BIP-2330 Ajustar a rotina de pesquisa dos dados do vendedor na página de cadastro do vendedor da Campanha de Marketing.**

Ajustado o erro na página de cadastro do vendedor, quando o usuário digitava um CPF, o sistema realiza a pesquisa dos dados do vendedor e faz o preenchimento dos campos no formulário, porém no campo de CPF/CNPJ a rotina recuperava a máscara de CNPJ para o CPF.

![Docusaurus logo](/img/bip-2330-jira.png)
