---
sidebar_position: 1
---
# Versão 6.2.6

# Melhorias

## **BIP-755  Revisar processos da telas onde são executadas tarefas apenas para clientes ATIVOS.**

As rotinas que utilizavam o campo CODIGOSTATUSCLIENTE da tabela CV_CAMPANHACLIENTE para filtro de usuários ativos, passam a utilizar o campo CODIGOCAMPANHACLIENTEESPECIESTATUS da tabela CV_CAMPANHACLIENTESTATUS. Essa alteração é necessária porque o status do cliente passa a ser dinâmico, ou seja, o código pode variar. Dessa forma, o sistema passa a utilizar o novo campo CODIGOCAMPANHACLIENTEESPECIESTATUS para filtrar as campanhas, pois o valor desse campo sempre será fixo.

## **BIP-805  Padronizar endpoints de inclusão, alteração e exclusão das fontes de dados do tipo CRUD.**

Os endpoints de inclusão, alteração e exclusão de fonte de dados do tipo CRUD tiveram seus tipos alterados de GET para POST, PUT e DELETE respectivamente, seguindo o padrão estabelecido na API do BIPPER. Além disso, todos eles passam a receber o parâmetro de dados no body da requisição.

![Docusaurus logo](/img/bip-805.jpg)

## **BIP-822  Incluir o campo "Tabela Relacionada" no cadastro de workflows.**
`Caminho: Administração > Cadastros > Workflows > Workflows`

Incluso o campo “Tabela relacionada” ao cadastrar um workflow.

![Docusaurus logo](/img/bip-822.jpg)

## **BIP-826  Incluir imagens do cliente.**

Seguindo o padrão dos demais clientes, foi incluso no projeto Bipper Web e Bipper BI, 3 imagens da logomarca do cliente. Essas imagens serão utilizadas na criação/configuração do ambiente do cliente.

# Correções

## **BIP-74  Tela de seleção de matriz com apenas um registro por vez no Grid.**
`Caminho: Administração > Cadastros > Campanhas > Campanhas > Botão Editar > Aba Clientes > Botão Editar > Botão Pesquisar`

A tela de seleção de matriz foi ajustada e passa a exibir vários registros por vez no grid, com barra de rolagem na vertical e também com números de paginação.

## **BIP-582  A informação de campo obrigatório está deslocada na central de integração.**
`Caminho: Administração > Integração > Central de Integração`

Ajustado a mensagem de “campo obrigatório” na página da central de integração, onde deslocava o fazer o download onde contém mais de um filtro sem preencher o obrigatório.

![Docusaurus logo](/img/bip-582.jpg)

## **BIP-624  Alteração de local do css do kendo dataviz impactando em algumas páginas.**

Foi realizada uma mudança na estrutura do projeto e algumas páginas que utilizam a estrutura de layout do kendo dataviz estavam apontando para o diretório errado. O diretório foi alterado para o apontar para o local correto.

## **BIP-703  Correção no Upload Carga AG no POG.**
`Caminho: Administração > Integração > Central de Integração > POG > Upload Carga AG`

Ajustado processo de upload da Carga AG do módulo de POG, para que quando o volume estiver nulo, seja gravado 0 (zero) na tabela. Isso é necessário para que não ocorra divergências ao se utilizar esse campo em algum cálculo.

## **BIP-803  Scripts de fonte de dados não estão sendo gerados.**
`Caminho: Administração > Desenvolvimento > Fonte de Dados > Botão de Geração de Script`

A funcionalidade de geração de scripts de criação e alteração de fonte de dados foi revisada e passa a gerar corretamente os scripts SQL. Anteriormente, havia uma divergência na tela e os scripts não eram carregados.