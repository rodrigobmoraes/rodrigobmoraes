---
sidebar_position: 1
---
# Versão 6.2.7

## Melhorias

## **BIP-579 Melhorias na tela de situação de rateio.**
`Caminho: Rateio de Metas > Metas de Venda > Situação do Rateio versão.`

Incluso a página para visualizar a situação do rateio de metas em uma visão mais ampla, podendo acompanhar os status e seus devidos representantes.

![Docusaurus logo](/img/bip-579.jpg)

## **BIP-889 Permitir volume negativo no rateio de metas.**
`Caminho: Rateio de Metas > Plano de Vendas > Rateio de Metas.`

Passa a ser possível utilizar valores negativos na tela de rateio de metas e também na tela de rateio de metas por grupo de clientes.

![Docusaurus logo](/img/bip-889.png)

## **BIP-899 Inclui botão para concluir/abrir a etapa de rateio para grupo cliente.**
`Caminho: Rateio de Metas > Plano de Vendas > Rateio de Metas Grupo Cliente.`

Incluso botão para concluir a etapa de rateio para grupo cliente, o estado é geral para a estrutura de venda (KAM) e vale para todos os grupos de clientes que possuem a estrutura como responsável.

Após conclusão, não é permitido a digitação, e apenas o usuário administrador poderá abrir novamente.

![Docusaurus logo](/img/bip-899.png)

## **BIP-929 Incluir link para pesquisa ao concluir rateio de metas.**
`Caminho: Cadastro > Campanhas > Campanhas > Parâmetro.`

Incluso um link para pesquisa de satisfação ao concluir o rateio de metas.

![Docusaurus logo](/img/bip-929.png)

## **BIP-930 Remover obrigatoriedade do campo cliente no upload de dados base para rateio.**
`Caminho: Administração > Integração > Central de Integração > Rateio do Plano > Configurações > Dados Base para Rateio > Upload.`

O upload de Dados Base para Rateio foi revisado e a obrigatoriedade de informar o cliente foi removida da rotina de importação.

## **BIP-966 Ajustar Download/Upload de aceite de metas para respeitar a estrutura de vendas por versão.**
`Caminho: Administração > Integração > Central de Integração | Rateio de Meta > Aceite > Metas.`

Ajustado o Download/Upload do aceita de metas para trazer os dados de estrutura de vendas baseado na versão do rateio.

![Docusaurus logo](/img/bip-966.png)

## **BIP-973 Bloquear coluna de estrutura de venda/cliente no rateio de metas.**
`Caminho: Rateio de Metas > Meta de Vendas > Rateio Meta.`
`Caminho: Rateio de Metas > Meta de Vendas > Rateio Meta Grupo Cliente.`

Bloqueado a coluna com a informação de estrutura de venda/cliente.

![Docusaurus logo](/img/bip-973.png)

## **BIP-1018 Validar os status da meta antes de concluir o rateio da estrutura de venda pelo responsável.**
`Caminho: Rateio de Metas > Meta de Vendas > Rateio Meta.`

Validação nos status por seguimento, onde só será possível concluir um rateio após todos os status não estarem pendentes.

![Docusaurus logo](/img/bip-1018.png)

## **BIP-1051 Criar Download/Upload para configurar Grupo Cliente por versão do rateio de metas.**
`Caminho: Administração > Integração > Central de Integração > Rateio de Metas > Configurações > Grupo Cliente VU.`

Desenvolvido novas opções para download e upload das configurações dos grupos de clientes por versão do rateio de metas.

## **BIP-1052 Criar Download/Upload para configurar Grupo Cliente VU x Cliente por versão do rateio de metas.**
`Caminho: Administração > Integração > Central de Integração > Rateio de Metas > Configurações > Grupo Cliente VU x Cliente.`

Desenvolvido novas opções para download e upload das configurações dos clientes por versão do rateio de metas.

![Docusaurus logo](/img/bip-1052.png)

## **BIP-1120 Incluir informações de produto na tela configuração de  Produto SICP.**
`Caminho: Rateio do Plano > Configurações > Produto SICP.`

`Caminho: Administração > Integração > Central de Integração > Rateio do Plano > Configurações > SICP > Produto SICP.`

Foram incluídos os campos Linha de Negócio, Segmento e Marca na tela de Produto SICP e também nos processos de Download e Upload de Produto SICP.

![Docusaurus logo](/img/bip-1120.png)

## **BIP-1174 Incluir vendedor na configuração de Estrutura de Vendas x UF.**
`Caminho: Administração > Integração > Central de Integração > Rateio Plano > Configurações > SICP > Estrutura Venda x UF.`

As opções de upload e download da estrutura de venda x UF foram alteradas e passam a permitir a importação e exportação do campo Código do Vendedor. O preenchimento deste campo é opcional.

![Docusaurus logo](/img/bip-1174.png)

## **BIP-1185 Correção ao replicar os dados de histórico no rateio do plano.**
`Caminho: Rateio do Plano > Plano de Vendas > Rateio do Plano > Selecionar Versão > Selecionar Estrutura de Venda > Expandir Produto > Guia de Histórico > Botão Replicar.`

O processo de replicar histórico do rateio de plano foi revisado e passa a processar corretamente dos dados. Anteriormente, a tela ficava em loop infinito e os dados não eram carregados.

![Docusaurus logo](/img/bip-1185.png)

## Correções

## **BIP-817 Ajuste no cálculo de rateio automático por grupo cliente.**
`Caminho: Rateio Meta > Meta de Vendas > Rateio da Meta.`

Revisado o cálculo de rateio automático por grupo cliente, não é permitido a exclusão do rateio dos demais clientes que não pertencem ao grupo.

## **BIP-907 Ao abrir o Rateio de Meta Grupo Cliente como uma "nova aba" apresenta um erro de autenticidade.**
`Caminho: Rateio Meta > Meta de Vendas > Rateio de Meta Grupo Cliente.`

Quando o usuário estava com uma tela aberta e necessitasse abrir em uma nova aba o rateio de meta grupo cliente, a tela apresenta uma inconsistência e ficava em loop de carregamento. Com os ajustes, a tela passa a funcionar corretamente.

## **BIP-949 Correção na tela de aceite de metas, após implementação da validação de Xss.**
`Caminho: Rateio Meta > Meta de Vendas > Aceite de Metas.`

Foi corrigida a inconsistência que impossibilitava a abertura dos termos para aceite das metas dos planos de metas.

## **BIP-1005 Corrigir bloqueio de digitação no rateio, quando estiver bloqueado pelo KAM.**
`Caminho: Rateio de Metas / Meta de Venda / Rateio meta por Grupo Cliente.`
`Rateio de Metas / Meta de Venda / Rateio meta.`

O bloqueio do rateio de metas realizado pela tela de rateio meta por grupo cliente foi revisado e passa a realizar corretamente o bloqueio das filiais. Quando o bloqueio estiver marcado os campos terão a cor cinza e não poderão ser editados.

![Docusaurus logo](/img/bip-1005.png)

## **BIP-1026 Correção ao exibir imagem do usuário na lista de estrutura venda da tela de Monitoramento SICP.**
`Caminhos: Rateio de Metas / Monitoramento SICP.`

Correção ao exibir imagem do usuário na lista de estrutura venda da tela de Monitoramento SICP.