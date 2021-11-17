---
sidebar_position: 1
---
# Versão 6.2.5

## Melhorias

## **BIP-82 Criar nova guia "Estrutura de Venda" no cadastro de Campanha para o Rateio de Metas.**
`Caminho: Administração > Cadastros > Campanha > Campanha.`

Foi desenvolvida uma nova guia na tela de campanha, denominada Estrutura Venda. Essa guia será exibida somente se a campanha estiver relacionada ao sistema de Rateio de Metas e será utilizada no fluxo de rateios de metas das telas a seguir:

Caminho: Rateio Meta > Configurações > Importar Aceite de Meta.

Caminho: Rateio Meta > Metas de Vendas > Aceite de Metas.

Caminho: Rateio Meta > Monitoramento SICP.

![Docusaurus logo](/img/bip-82.png)

## **BIP-146 Incluir na tela de rateio de metas botão para abrir a estrutura para rateio.**
`Caminho: Administração > Cadastros > Campanha > Campanha.`

Foi incluído na tela de rateio de metas, os botões Concluir e Abrir lançamentos do rateio de metas para a estrutura de venda escolhida. Esses botões terão as seguintes características:

- Para Concluir um rateio de meta, todos os produtos da estrutura devem estar concluídos e se houver uma estrutura superior, ela também deve estar concluída, caso contrário não será possível concluir o rateio de meta.

- Após concluir o rateio de metas, o usuário só poderá abrir a estrutura novamente, se o calendário de alteração estiver dentro do prazo vigente (Rateio Meta > Configurações > Calendário e Parâmetros) ou se o usuário for administrador, caso contrário o rateio de metas não poderá ser aberto.

![Docusaurus logo](/img/bip-146.png)

## **BIP-146 Incluir na tela de rateio de metas botão para abrir a estrutura para rateio.**
`Caminho: Administração > Cadastros > Campanha > Campanha.`

Foi incluído na tela de rateio de metas, os botões Concluir e Abrir lançamentos do rateio de metas para a estrutura de venda escolhida. Esses botões terão as seguintes características:

- Para Concluir um rateio de meta, todos os produtos da estrutura devem estar concluídos e se houver uma estrutura superior, ela também deve estar concluída, caso contrário não será possível concluir o rateio de meta.

- Após concluir o rateio de metas, o usuário só poderá abrir a estrutura novamente, se o calendário de alteração estiver dentro do prazo vigente (Rateio Meta > Configurações > Calendário e Parâmetros) ou se o usuário for administrador, caso contrário o rateio de metas não poderá ser aberto.

![Docusaurus logo](/img/bip-146.png)

## **BIP-212 Gerar histórico do rateio de metas.**
`Caminho: Rateio de Metas > Meta de Vendas > Rateio de Meta.`

Está sendo disponibilizado para o processo de rateio de metas, uma opção de histórico de conclusão ou abertura de rateio, que vai registrar o usuário, status e hora das alterações de status.

![Docusaurus logo](/img/bip-212.png)

## **BIP-221 Criar tela para cadastro das categorias de dados base para distribuição do rateio de metas.**
`Caminho: Rateio Meta \ Configurações \ Categorias de Dados Base para Rateio.`

Foi desenvolvida uma nova tela, denominada Categorias de Dados Base para Rateio, que será utilizada para incluir as categorias de dados de referência para a distribuição do rateio de metas. Os dados serão utilizados posteriormente para cálculo do rateio proporcional, de acordo com a categoria indicada.

![Docusaurus logo](/img/bip-221.png)

## **BIP-430 Incluir na tela de rateio de metas, informações dos dados base para rateio.**
`Caminho: Rateio Meta > Meta de Vendas > Rateio da Meta.`

Foi incluído uma nova guia para cada categoria de dados base relacionada a versão o rateio de matas ao exibir os detalhes do produto para distribuição.

![Docusaurus logo](/img/bip-430.png)

## **BIP-431 Nova tela para configuração de template de e-mail do rateio de metas.**
`Caminho: Rateio Meta > Configurações > E-mail.`

Foi desenvolvida uma nova tela para cadastros dos templates de e-mail que serão utilizados no processo de rateio de metas, onde será possível configurar as notificações de Abertura, Atraso, Conclusão e Reabertura do Rateio de Metas.

![Docusaurus logo](/img/bip-431.png)

## **BIP-467 Gerar rateio de metas automático a partir do percentual dos dados base.**
`Caminho: Rateio Meta > Meta de Vendas > Rateio da Meta.`

Para cada guia de categoria de dados base exibida, foi incluso um botão para replicar o percentual atribuído por estrutura de vendas no rateio de metas atual.

![Docusaurus logo](/img/bip-467.png)

## **BIP-499 Incluir estado no cadastro de versão de rateio de metas.**
`Caminho: Rateio Meta > Configurações > Versão Rateio Meta.`

Incluso o campo de estado versão no cadastro de versão do rateio de metas.

![Docusaurus logo](/img/bip-499.png)

## **BIP-563 Expandir a lista de estrutura de venda no rateio de metas.**
`Caminho: Rateio Meta > Meta de Vendas > Rateio da Meta.`

Ajustado a seleção de estrutura de vendas, caso já esteja ajustado a lista com o repetível nível exibirá expandido na seleção.

![Docusaurus logo](/img/bip-563.png)

## Correções
## **BIP-479 Variável não existe na requisição do script ao acessar a página de bloqueio do rateio de metas.**
`Caminho: Rateio Meta > Configurações > Desbloquear Rateio.`

Foi corrigida a inconsistência que era gerada ao se abrir a tela de Desbloqueio de Rateio, o erro ocorria devido a uma variável não existir no contexto da página.

## **BIP-480  Erro ao expandir registros da tela de Rateio da Meta Grupo Cliente.**
`Caminho: Rateio Meta > Meta de Vendas > Rateio da Meta Grupo Cliente.`

Ao acessar a tela de Rateio da Meta Grupo Cliente, selecionar um grupo e expandir uma cultura, era gerado uma inconsistência que fazia com que as opções de rateio não fossem carregadas. Com a correção as opções passam a ser carregadas corretamente, sem erros.

![Docusaurus logo](/img/bip-480.png)