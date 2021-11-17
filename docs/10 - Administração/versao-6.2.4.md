---
sidebar_position: 1
---
# Versão 6.2.4

# Melhorias

## **BIP-90  Nova splashscreen e tela de login truchoice.**
`Aplicativo Truchoice`

A tela de SplashScreen e Login do aplicativo TruChoice foram remodeladas e passam a ter um layout mais moderno.

## **BIP-1452  Ajustes Dashboard no truchoice.**
`Aplicativo Truchoice`

O aplicativo TruChoice passou por algumas melhorias, onde foram ajustadas as legendas do gráfico de defensivos, foram adicionados novos produtos ao dashboard e a API, além disso, os preços médios passaram a ser dinâmicos.

## **BIP-2340  Criar cadastro de interfaces.**
`Caminho: Desenvolvimento > Interfaces > Nova / Editar Interface / Aba Filtros`

Foi desenvolvido uma nova tela para cadastro de filtros e dependências de filtros para as interfaces do sistema.

![Docusaurus logo](/img/bip-2340-jira.jpg)

## **BIP-2410  Ajustar upload de clientes da campanha para incluir o território responsável.**
`Caminho: Administração > Cadastros > Campanhas > Clientes`

As opções de Upload e Download de clientes da campanha, passam a importar e exportar os dados do gestor responsável pelo território. As informações são provenientes dos campos “Código Estrutura Venda Interno” e “Descrição Estrutura Venda” da planilha.

![Docusaurus logo](/img/bip-2410-jira.jpg)

## **BIP-2411  Criar editor de URL nos parâmetros do sistema para facilitar ao usuário a configuração.**

Todos os campos de parametrização padrão de URL, passam a exibir um botão de pesquisa à sua direita, que abrirá um popup para seleção de URLs.
O popup está dividido em duas partes: "URL Interna" e "URL Externa". A aba URL Interna possui 4 abas de categorias, sendo elas: Ajuda, Conteúdos, Módulos e Postagens. O usuário poderá navegar pelas opções e selecionar a URL interna
Na aba de URL Externa, temos o campo URL, onde o usuário poderá informar uma URL externa e pré-visualizá-la.

![Docusaurus logo](/img/bip-2411-jira.jpg)

## **BIP-2428  No tipo de componente do kendo, exigir parâmetro de hierarquia somente para TreeList, TreeView e TreeMap.**
`Caminho: Administração > Desenvolvimento > Conteúdo > Guia Parâmetros`

A tela de parâmetros de cadastro de conteúdo passa a exibir os campos “Campo chave da hierarquia” e “Campo pai da hierarquia” somente se o campo “Componente kendo” estiver selecionado como TreeList,
TreeView e TreeMap. Anteriormente, esses campos eram exibidos para todos os tipos de componente, o que não é necessário, pois as demais opções não necessitam desses campos.

![Docusaurus logo](/img/bip-2428-jira.jpg)

## **BIP-2430  Permitir configurar campos calculados nas fontes de dados dos tipos de conteúdo HTML e componente kendo.**
`Caminho: Administração > Desenvolvimento > Conteúdo > Guia Parâmetros`

Foi incluído o campo “Fonte de dados do componente (Campos calculados) (opcional)” na tela de parâmetros de cadastro de conteúdo, que pode ser utilizado para a construção de valores calculados.

![Docusaurus logo](/img/bip-2430-jira.jpg)

## **BIP-2432  Criar interface para processamento de NFs de SellOut Manual para uma campanha ou cliente.**
`Caminho: Administração > Administração > Processamento de NFs`

Foi incluso a interface “Processamento de NFs” para realizar o processo manualmente referente aos status, campanhas e clientes caso queira.

![Docusaurus logo](/img/bip-2432-jira.jpg)

## **BIP-2440  Permitir gerar scripts de inclusão, alteração e exclusão do cadastro de conteúdos.**
`Caminho: Administração > Desenvolvimento > Conteúdos`

Foi adicionado na tela de cadastro de conteúdos a opção de geração de script de Criação / Alteração e Exclusão, que visa agilizar a manutenção dos conteúdos gerados.

![Docusaurus logo](/img/bip-2440-jira.jpg)

## **BIP-2442  Trazer o combo de tipo de conteúdo ordenado por descrição no cadastro de conteúdos.**
`Caminho: Administração > Desenvolvimento > Conteúdos > Botão Novo / Editar > Aba Cadastro`

O ComboBox de Tipo Conteúdo da tela de cadastro de conteúdo, passa a trazer as opções ordenadas por ordem alfabética. Anteriormente, a ordenação era aleatória.

## **BIP-2449  Incluir campos "Tipo", "Grupo", "Lista de Preço" e "Status Lista de Preço" no cadastro de clientes da campanha.**
`Caminho: Cadastros > Campanhas > Campanhas > Aba Cliente`

Foram adicionados 4 novos campos ao cadastro de cliente da campanha, sendo eles: "Tipo", "Grupo", "Lista de Preço" e "Status Lista de Preço". As informações desses campos também estarão disponíveis para Download e Upload através da Central de Integrações

![Docusaurus logo](/img/bip-2449-jira.jpg)


## **BIP-2457  Permitir alterar a descrição do logon externo nas configurações do sistema.**
`Caminho: Administração > Administração > Configurações`

O sistema além de permitir ativar e parametrizar um logon externo, foi ajustado para permitir também que o usuário customize a descrição, para ser exibido na página de login.

![Docusaurus logo](/img/bip-2457-jira.jpg)

## **BIP-2458  Separar o EndPoint de recuperação de dados de uma fonte de dados em um controlador específico.**
`Caminho: Administração > Administração > Configurações`

O endpoint /api/v1/integracao/download/ utilizado para recuperação de fonte de dados foi alterado para /api/v1/integracao/fonteDados/. 


# Correções

## **BIP-2429  Ajustar rotina de validação do campo CondicaoJS para permitir condição com função onde há parametrização no sistema.**

Ajustado a rotina de validação do campo CondicaoJS na comuns para permitir condição com função onde há parametrização no sistema.

## **BIP-2433  Erro ao incluir conteúdo quando a tabela está vazia.**
`Caminho: Administração > Desenvolvimento > Conteúdos`

Foi corrigida a inconsistência que era gerada quando se criava um novo registro de conteúdo, quando não havia nenhuma informação de conteúdo na base de dados. 

## **BIP-2465  Erro na exportação com mais de 3 registros filtrados.**
`Caminho: Administração > Integração > Central de Integração`

Foi ajustado a filtragem de campanha ao realizar o download do “relatório plano de ação completo”, onde ao filtrar mais de três linhas de campanha o sistema não permitia o download e não gerava no relatório as campanhas filtradas da linha três em diante.

![Docusaurus logo](/img/bip-2465-jira.jpg)

## **BIP-2436  Grid de Responsáveis da Campanha / Cliente está desalinhado e com scroll inferior.**
`Caminho: Administração > Cadastros > Campanhas > Campanhas > Aba Clientes > Novo > Aba Responsáveis`

Foi ajustado o grid de responsáveis, que não exibirá mais barra de rolagem na horizontal

![Docusaurus logo](/img/bip-2436-jira.jpg)

## **BIP-2489  Incluir informações de restrições (PK, FK e UK) no EndPoint de consulta do esquema das fontes de dados**

O endpoint /api/v1/integracao/fonteDados/recuperarEsquemaFonteDados passa a reportar o campo CHAVEPRIMARIA, indicando qual é a chave primária da tabela e também o bloco Restrições, indicando as restrições da tabela (FK e UK).

## Vulnerabilidade

## **BIP-2438  Resolver SQL injection em dois endpoints da API.**

Foi ajustado as vulnerabilidades de SQL injection no módulo de eventos.