---
sidebar_position: 1
---
# Versão 6.2.3

# Melhorias

## **BIP-2290  Criar página inicial dinâmica para os módulos do sistema, que permita gerenciar conteúdos dinamicamente.**

Foi incluso uma página inicial para cada módulo onde é possível criar menus de favoritos e publicações em linha do tempo para específicos grupos/usuários visualizarem.

![Docusaurus logo](/img/bip-2290-jira.jpg)

## **BIP-2345  Tornar o cadastro de tipos de cliente em formato de hierarquia.**
`Caminho: Administração > Cadastros > Clientes > Tipos`

O grid de lista foi ajustado para o formato de hierarquia.

![Docusaurus logo](/img/bip-2345-jira.jpg)

## **BIP-2369  Permitir criar uma condição javascript para exibição de um parâmetro.**

O ajuste comtempla todos os pontos do sistema que usam a parametrização padrão. São eles: "Parâmetros Gerais", "Parâmetros do Sistema", "Parâmetros da Campanha", "Parâmetros do Conteúdo", "Parâmetros do Painel (BI)" e "Parâmetros do Painel (Campanha)".

## **BIP-2371  O sistema deverá respeitar a ordem dos módulos principais ao selecionar o módulo inicial.**

Quando o usuário vai para página de bem vindo, a aplicação faz o redirecionamento respeitando a ordem dos módulos principais, pois o sistema pode ter mais de um módulo principal.

![Docusaurus logo](/img/bip-2371-jira.jpg)

## **BIP-2374  O sistema deverá respeitar a ordem dos módulos principais ao selecionar o módulo inicial.**
`Caminho: Administração > Desenvolvimento > Módulos`

Incluso a opção de criação de módulos, facilitando o desenvolvimento de novos módulos em diferentes plataformas.

![Docusaurus logo](/img/bip-2374-jira.jpg)

## **BIP-2375  Permitir configurar as resoluções da postagem na página inicial de apresentação de cada sistema.**

Foi incluso a aba “resolução” para ajustar postagem na “linha do tempo”.

![Docusaurus logo](/img/bip-2375-jira.jpg)

## **BIP-2377  Permitir publicar painéis de dashboard na linha do tempo da página de apresentação dos sistemas.**

Foi incluso a opção de inserir dashboards na linha do tempo, e a princípio o único parâmetro existente é o código do painel de dashboard.

![Docusaurus logo](/img/bip-2377-jira.jpg)

## **BIP-2378  Ajustar integração de tipos de clientes (download e upload) para considerar tipo superior.**
`Caminho: Administração > Cadastros > Clientes > Tipos`

A integração de tipos de clientes (download e upload) foi ajustada para considerar o campo de tipo superior.

![Docusaurus logo](/img/bip-2378-jira.jpg)

## **BIP-2382  Criar cadastro de fontes de dados.**
`Caminho: Administração > Cadastros > Clientes > Tipos`

Foi criado a página “Fontes de Dados” onde pode ser criado fontes de consultas em SQL para utilizar os dados em outras páginas que permite a integração.

![Docusaurus logo](/img/bip-2382-jira.jpg)

## **BIP-2383  Criar EndPoint na API para download dos dados de uma Fonte de Dados.**
`Caminho: Administração > Cadastros > Clientes > Tipos`

O usuário após autenticar na API, o sistema disponibiliza um método que te possibilite baixar os dados de uma Fonte de Dados que ele conheça. Para isso o mesmo fornece o identificador da fonte como parâmetro do endpoint.

## **BIP-2385  Implementar criação de publicações com componentes do kendo na estrutura de conteúdo do sistema.**

O sistema foi ajustado para permitir ao usuário publicar conteúdos utilizando os componentes kendo, como o KendoGrid, KendoChart, KendoTreeMap e KendoTreeList nas páginas iniciais de cada sistema/módulo.

![Docusaurus logo](/img/bip-2385-jira.jpg)

## **BIP-2387  Implementar criação de publicações com frames na estrutura de conteúdos do sistema.**

O sistema foi ajustado para permitir ao usuário publicar conteúdos utilizando frames nas páginas iniciais de cada sistema/módulo.

![Docusaurus logo](/img/bip-2387-jira.jpg)

## **BIP-2389  Permitir o BIND de uma fonte de dados de contexto nos componentes do Kendo.**

Foi incluso nos componentes kendo a possibilidade de inserir um BIND de uma fonte de dados.

![Docusaurus logo](/img/bip-2389-jira.jpg)

## **BIP-2390  Implementar criação de publicações com frames na estrutura de conteúdos do sistema.**

O sistema permite a criação de componentes do tipo kendo LinearGauge, sendo possível fazer o BIND na inicialização do componente, utilizando uma fonte de dados de contexto.

![Docusaurus logo](/img/bip-2390-jira.jpg)

## **BIP-2393  Centralizar na comuns a rotina de criação dos componentes kendo onde há parametrização no sistema.**

A rotina de criação dos componentes kendo nos pontos onde há parâmetros do sistema foi ajustado para ser centralizada em apenas uma função na comuns para facilitar a manutenção.

## **BIP-2394  Implementar cache no endpoint de download de arquivos de parâmetro dos conteúdos.**

O endpoint de download de imagens, pdfs, htmls foi ajustado para somente baixar o arquivo, quando o mesmo não estiver em cache no navegador.

## **BIP-2396  Atualizar responsividade dos componentes do kendo na página de apresentação dos sistemas.**

Quando o usuário redimensionar as páginas do browser, o sistema redesenha os componentes do kendo, para que o mesmo se ajuste ao novo tamanho.

## **BIP-2397  Criar aba de pré-visualização no cadastro de conteúdo.**

Incluso a aba “pré-visualização” ao criar uma publicação de linha do tempo na página inicial de um módulo, em que caso todos os parâmetros obrigatórios estejam preenchidos, o sistema exibe uma pré-visualização do conteúdo cadastrado.

![Docusaurus logo](/img/bip-2397-jira.jpg)

## **BIP-2398  Criar aba de pré-visualização no cadastro de postagens da página de apresentação do sistema.**

Desenvolvido uma aba ao final chamado “pré-visualização, que caso todos os parâmetros obrigatórios estejam preenchidos, o sistema irá fazer uma pré-visualização da postagem cadastrado.

![Docusaurus logo](/img/bip-2398-jira.jpg)

## **BIP-2399  Implementar a criação de componentes kendo RadialGauge e ArcGauge na página de apresentação do sistema.**

O sistema permite a criação de componentes do tipo kendo LinearGauge e ArcGauge na linha do tempo da página inicial de um módulo, sendo possível fazer o BIND (consultar informação do banco de dados) na inicialização do componente, utilizando uma fonte de dados de contexto.

![Docusaurus logo](/img/bip-2399-jira.jpg)

## **BIP-2400  Permitir gerenciar fontes de dados do tipo "Arquivo JSON".**

O sistema permite ao usuário cadastrar uma fonte de dados do tipo "Arquivo JSON". Nessa situação, o usuário faz o upload de um arquivo JSON, para posteriormente o mesmo poder ser consumido via API.

![Docusaurus logo](/img/bip-2400-jira.jpg)

## **BIP-2401  Permitir o usuário configurar os parâmetros da consulta sql de uma fontede dados.**
`Caminho: Administração > Desenvolvimento > Fontes de Dados`

Quando o usuário cadastrar uma fonte de dados do tipo "Consulta Local" ou "Consulta Externa", o sistema disponibiliza um parâmetro nomeado de "Parâmetros". Se acaso a consulta contiver parâmetros, esse parâmetro é preenchido.

![Docusaurus logo](/img/bip-2401-jira.jpg)

## **BIP-2402  Permitir parametrizar as fontes de dados de contexto e componente dos tipos de conteúdo HTML e Kendo.**
`Caminho: Administração > Desenvolvimento > Fontes de Dados`

Quando o usuário for incluir um conteúdo do tipo HTML ou kendo, ao selecionar a opção de fonte de dados de contexto ou de componente, é habilitado a opção um parâmetro a mais permitindo-o informar os parâmetros adicionais dessa fonte de dados.
Os parâmetros deverão ser separados por pipe "|", onde o sínbulo igual "=" separará o nome do parâmetro do valor.

![Docusaurus logo](/img/bip-2402-jira.jpg)

## **BIP-2408  Incluir "SellOut" como opção de configuração do "Termo utilizado na distribuição de mercado".**
`Caminho: Administração > Administração > Configurações`

Foi incluso a opção de “SellOut” no combo de termo utilizado na distribuição de mercado, isso ajusta algumas label do módulo de mapeamento para SellOut.

![Docusaurus logo](/img/bip-2408-jira.jpg)

## **BIP-2412  Implementar cache de senha para usuários com autenticação do tipo "UPPER Api".**
Sempre que um usuário realizar o login no sistema utilizando o tipo de autenticação "WebApi", o sistema armazena a sua senha localmente (rash).
No momento que a API estiver em manutenção, o sistema valida o login localmente.

## **BIP-2413  Considerar apenas campanhas ativas na sincronização de perfis dos participantes da campanha.**
A rotina que cria automaticamente o perfil para os participantes de uma campanha de marketing, foi ajustado para considerar apenas campanhas ativas.

## **BIP-2414  Incluir o campo "Local" no cadastro de painéis da campanha.**
`Caminho: Administração > Cadastros > Campanhas > Campanhas`

Foi incluso o campo “Local” ao cadastrar um novo painel de campanha, onde é possível
escolher a visão geral.

![Docusaurus logo](/img/bip-2414-jira.jpg)

## **BIP-2416  Incluir campo "Público" no cadastro de fontes de dados.**
`Caminho: Administração > Desenvolvimento > Fontes de Dados`

O campo foi incluso incluído antes do campo "Interno".

![Docusaurus logo](/img/bip-2416-jira.jpg)


## **BIP-2417  Incluir o relacionamento das fontes de dados no cadastro de perfis de acesso.**
`Caminho: Administração > Segurança > Perfil de Acesso`

Foi incluso no perfil de acesso a aba “Fontes de Dados”, onde será listado todas as fontes cadastradas de forma “não publica”, podendo selecionar individualmente ou não.

![Docusaurus logo](/img/bip-2417-jira.jpg)

## **BIP-2419  Implementar permissão de acesso ao EndPoint de download das informações das fontes de dados.**

Foi ajustado para que somente usuários autenticados na API tenham acesso ao EndPoint, caso os dados for “publica”, qualquer usuário autenticado poderá baixar os dados, e se a fonte de dados for “não publica”, somente usuários cujo perfil de acesso esteja com a fonte de dados habilitada, podem baixar os dados.

## **BIP-2424  Implementar componente de KendoTextArea nos pontos onde há parametrização no sistema.**

Internamente foi implementado um componente de KendoTextArea para os parâmetros configurados como varchar e tamanho máximo maior que 1000 caracteres.
Esse componente é necessário para utilização de parâmetros com valores que possuem quebras de linhas.

# Correções

## **BIP-2364  A API está apresentando erro ao visualizar um arquivo diretamente no browser.**

Quando um endpoint de download de arquivo é acessado da API no browser, e esse endpoint retornava o arquivo inline (visualização no browser), o mesmo não estava sendo exibindo.

## **BIP-2370  O cadastro de campanha não está salvando corretamente as alterações nos painéis.**
`Caminho: Administração > Cadastros > Campanhas > Campanhas`

Ao alterar alguns a ordem dos painéis, o sistema não estava permitindo salvar essa aplicação, foi ajustado para que qualquer modificação seja gravada no sistema.]

## **BIP-2372  O sistema deverá respeitar a ordem dos módulos principais ao selecionar o módulo inicial.**

O sistema não estava validando a obrigatoriedade nos parâmetros do tipo "varbinary" nos pontos onde há parametrização no sistema. 

## **BIP-2376  Os parâmetros do tipo anexo (varbinary) estão se "perdendo" nos métodos de alteração.**

Quando o usuário estava editando um registo, não alterava o anexo e salvava a aplicação, o sistema estava perdendo o parâmetro do tipo anexo (varbinary).

## **BIP-2386  Corrigir os pontos do sistema onde há parametrização para permitir aspas simples (') no componente de texto.**

Foi necessário corrigir os pontos do sistema onde há parametrização para permitir aspas simples (') no componente de texto.

## **BIP-2391  Ajustar parâmetros dos componentes de seleção do cadastro de Tipo Painel da Campanha.**

Os parâmetros que utilizam os componentes de seleção foram ajustados para corrigir a criação no cadastro de Tipo Painel da Campanha.

## **BIP-2395  Não está sendo possível alterar parâmetro com conteúdo HTML.**

Ajustado a edição para conteúdos do tipo HTML.

![Docusaurus logo](/img/bip-2395-jira.jpg)


