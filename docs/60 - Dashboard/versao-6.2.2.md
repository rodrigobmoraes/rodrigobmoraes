---
sidebar_position: 1
---
# Versão 6.2.2

# Melhorias

## **BIP-2301 Permitir visualizar painéis criados na plataforma "Power BI".**
`Caminho: Dashboards > Configurações`

O sistema exibe painéis criados na plataforma "Power BI" acessando direto pelo menu, pela página de "Explorar", ou dentro de algum módulo do sistema (painel interno).

## **BIP-2303  Incluir aba de parametrização no cadastro de painéis.**
`Caminho: Dashboards > Configurações`

Foi incluso a aba “Parâmetro” para cada plataforma.

![Docusaurus logo](/img/bip-2303.jpg)

## **BIP-2307  Incluir campo de plataforma no cadastro de "De-Para de Autenticação".**
`Caminho: Dashboards > Configurações`

Foi incluso no campo “Tipo Autenticação” a opção “De-Para”.

![Docusaurus logo](/img/bip-2307.jpg)

## **BIP-2308  Incluir campo de plataforma no cadastro de "Pool de Autenticação".**
`Caminho: Dashboards > Configurações`

Foi incluso no campo “Tipo Autenticação” a opção “Pool de Autenticação”.

![Docusaurus logo](/img/bip-2308.jpg)

## **BIP-2309  Filtrar apenas "Pool de Autenticação" e "De-Para de autenticação" referente a plataforma do painel.**
`Caminho: Dashboards > Configurações`

Quando o usuário seleciona as opções "De-Para" ou "Pool de Autenticação" no campo "Tipo de Autenticação" do cadastro de painel, o sistema exibe um combobox para que o mesmo informe qual item deseja utilizar na autenticação do painel.

![Docusaurus logo](/img/bip-2309.jpg)

## **BIP-2310  Incluir campo de "Senha Autenticação" no cadastro de painel.**
`Caminho: Dashboards > Configurações`

Quando a plataforma do painel for "Power BI", e o tipo de autenticação for "Simples", o sistema exibirá o campo "Senha Autenticação", logo abaixo do campo "Usuário Autenticação", sendo esse obrigatório.

![Docusaurus logo](/img/bip-2309.jpg)

## **BIP-2311  Incluir campo de "Senha Autenticação" no cadastro de painel.**
`Caminho: Dashboards > Configurações`

Quando a plataforma do de-para de autenticação for "Power BI", o sistema exibe o campo "Senha Autenticação", logo abaixo do campo "Usuário Autenticação”. 

![Docusaurus logo](/img/bip-2311.jpg)

## **BIP-2312  Incluir campo de "Senha Autenticação" no cadastro de usuários do pool de autenticação.**
`Caminho: Dashboards > Configurações`

Quando a plataforma do pool autenticação for "Power BI", o sistema exibe o campo "Senha Autenticação", logo abaixo do campo "Usuário Autenticação”.

![Docusaurus logo](/img/bip-2312.jpg)

## **BIP-2317  Permitir conectar um painel com um dashboard Tableau e Power BI via Estrutura Técnica.**
`Caminho: Dashboards > Configurações`

O sistema aplica o filtro em um dashboard/report Tableau ou Power BI, quando o painel tem uma conexão via estrutura técnica. Ele considera todas as estruturas técnica que o usuário tiver acesso.
Essa conexão considera o código interno, a descrição e o código sap da estrutura técnica.

![Docusaurus logo](/img/bip-2317.jpg)

## **BIP-2318  Permitir conectar um painel com um dashboard Tableau e Power BI via informações do usuário logado.**
`Caminho: Dashboards > Configurações`

O sistema aplica o filtro em um dashboard/report Tableau ou Power BI, quando o painel tem uma conexão via usuário logado.
Essa conexão considera o código do usuário, o nome, o login, o e-mail, o telefone e o celular do usuário.

![Docusaurus logo](/img/bip-2318.jpg)

## **BIP-2321  Remover cabeçalho da página de visualização de dashboards.**

Removido o menu lateral direito que ficava no cabeçalho da página dos dashboards.

![Docusaurus logo](/img/bip-2321.jpg)

## **BIP-2324  Criar parâmetro de resolução nos painéis de BI.**
`Caminho: Dashboards > Configurações`

O parâmetro de resolução foi incluso e deve ser preenchido no formado (Largura x Altura). Ex: 4x3; 16x9; 16x10 e 21x9.
Quando o parâmetro de resolução estiver preenchido, o sistema gerencia automaticamente a altura do dashboard, que deverá ser proporcional a largura disponível na página, conforme resolução configurada.

![Docusaurus logo](/img/bip-2324.jpg)

## **BIP-2327  Permitir configurar se o usuário terá acesso às abas e filtros de um relatório do Power BI.**
`Caminho: Dashboards > Configurações`

Ao criar um painel do tipo Power BI, no sistema foi incluso 2 parâmetros novos do tipo sim/não. Um para configurar se o usuário poderá acessar as abas do relatório, outro para configurar se o usuário poderá acessar os filtros do relatório.

![Docusaurus logo](/img/bip-2324.jpg)

## **BIP-2338  Ajustar a conexão do Dashboard para que não haja repetição.**
`Caminho: Dashboards > Configurações`

Ao criar um novo painel no dashboards é possível criar uma conexão, porém estava permitindo criar conexões repetidas, foi ajustado para que isso não seja permitido.

![Docusaurus logo](/img/bip-2324.jpg)

# Correções

## **BIP-2325  Erro ao excluir um painel quando o mesmo já foi acessado.**
`Caminho: Dashboards > Configurações`

A página de configurações de painel estava apresentando um erro ao excluir um painel, caso esse já tenha sido acessado por algum usuário.