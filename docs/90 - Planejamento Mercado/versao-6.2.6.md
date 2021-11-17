---
sidebar_position: 1
---
# Versão 6.2.6

## Melhorias

## **BIP-570 Considerar o nível tecnológico e o ciclo da cultura do produto selecionado ao calcular os indicadores no Planejamento de POG de Sementes.**
`Caminho: Planejamento Mercado > Planejamento > Sementes > POG por Cultura.`

Os cálculos dos indicadores foram alterados para que seja considerado o nível tecnológico e o ciclo de cultura.

## **BIP-608 Apresentar a descrição da campanha no componente de seleção das campanhas para o módulo de Planejamento.**
`Caminho: Planejamento Mercado > Planejamento > Seleção de Campanha.`

Ajustado a seleção de campanha para que exiba o mesmo nome da campanha cadastrado, mesmo que seja editado.

![Docusaurus logo](/img/bip-608.png)

## **BIP-794 Permitir planejar o mercado de sementes digitando nos indicadores de total de mercado em Sc e US$.**
`Caminho: Planejamento Mercado > Planejamento > Sementes > Mercado > Etapa de Indicadores.`

Os campos Potencial de Mercado (Sc) e Potencial de Mercado (US$) passam a permitir edição manual. Sempre que esses campos forem alterados, os campos Taxa de Semeadura ou Preço (US$ por Sc) serão recalculados com base nesses novos valores.

![Docusaurus logo](/img/bip-794.png)

## Correções

## **BIP-610 Ajustar para as páginas de Planejamento de Mercado considerar a configuração de permissão do perfil de acesso para a etapa.**
`Caminho: Planejamento Mercado > Planejamento > Defensivos/Sementes > Mercado.`

Ao desativar o módulo de “período”, em planejamento mercado de sementes ou defensivos a etapa de período continuava exibindo, foi devidamente ajustado para que a etapa não seja exibida.

## **BIP-636 Falha no planejamento de área plantada e mercado de sementes por estrutura de venda.**
`Caminho: Planejamento > Seleção de Campanha.`

O sistema não estava limitando-se ao último nível de estrutura de venda parametrizado. Quando seleciona o último nível, o sistema continua exigindo os níveis abaixo, tanto no planejamento de área plantada, como no planejamento de mercado de sementes. Isso ocorria na etapa de lançamento.

## **BIP-779 Divergência de validação no "% represent" do upload de área plantada por nível tecnológico/ciclo cultura.**
`Caminho: Administração > Integração > Central de Integração > Planejamento de Mercado > Área Plantada > Níveis Tecnológicos / Ciclos Cultura > Upload.`

Quando existiam valores decimais no campo PERCENTUALREPRESENTATIVIDADE da planilha de importação, o sistema arredondava os valores para inteiro e acusava divergências na soma de percentual de representatividade, pois devido ao arredondamento, os valores não fechavam em 100%. Com a correção passa a ser possível importar os valores decimais normalmente.

## **BIP-804 Erro de divisão por zero ao expandir uma cultura na tela de Planejamento de Mercado de Sementes.**
`Caminho: Planejamento de Mercado > Planejamento > Sementes > Mercado.`

Revisado a exibição dos valores ao expandir a cultura ao visualizar o planejamento de mercado de sementes.



