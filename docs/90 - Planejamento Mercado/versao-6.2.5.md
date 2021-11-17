---
sidebar_position: 1
---
# Versão 6.2.5

## Melhorias

## **BIP-213 Incluir indicador de "% Variação" e "Área Variação (ha)" no planejamento de mercado de defensivos.**
`Caminho: Planejamento > Defensivos > Mercado.`

O módulo de planejamento de mercado de defensivos passa a ter suporte a dois novos indicadores. O primeiro chamado de % Variação, onde o percentual desse indicador será multiplicado pela Área Plantada, resultando no valor do segundo indicador, que é chamado de Área Variação (ha). Os demais indicadores que utilizam a área plantada como parâmetro para o cálculo, também serão recalculados com base nessa nova variação. Além disso, os processos de Upload e Download de planejamento de mercado (Menu Administração / Integração / Central de Integração) também passam a reportar esses novos indicadores.

## **BIP-474 Aplicar “dinâmica” de replicação de lançamento para percentual na Tela de Lançamento de Mercado.**
`Caminho: Planejamento de mercado > Planejamento > Defensivos > Mercado.`
`Caminho: Planejamento de mercado > Planejamento > Sementes > Mercado.`

Foi ajustado uma dinâmica onde é replicado automaticamente o valor informado para os anos subsequentes ao percentual.

## **BIP-495 Criar integração (download/upload) da etapa de revisão por nível e ciclo do Planejamento de Mercado de Sementes.**
`Caminho: Central de Integração > Planejamento Mercado > Planejamento > Área Plantada > Níveis Tecnológicos/Ciclos Cultura.`

Criado na central de integração os níveis tecnológicos do ciclo cultura, onde é possível fazer o download/upload.

![Docusaurus logo](/img/bip-495.png)

## **BIP-504 Criar integração (download/upload) da etapa de revisão por período do Planejamento de Mercado de Sementes.**
`Caminho: Central de Integração > Planejamento Mercado > Planejamento > Área Plantada > Período.`

Criado na central de integração os níveis tecnológicos do ciclo cultura, onde é possível fazer o download/upload.

![Docusaurus logo](/img/bip-504.png)

## **BIP-565 Ajustar etapa de tipo de acesso da página de Planejamento de POG de Sementes e Defensivos.**
`Caminho: Planejamento Mercado > Planejamento > Defensivos.`
`Caminho: Planejamento Mercado > Planejamento > Sementes.`

Caso seja ajustado o parâmetro da campanha “Percentual de redução de preço para indústria” para valor “0”, nas páginas de planejamento estava apresentando “null” na descrição, ajustado para acessar diretamente o projeção “realista” quando o valor do parâmetro for zero.

![Docusaurus logo](/img/bip-565.png)

## **BIP-569 Aplicar alteração nas labels do Planejamento de POG (Sementes e Defensivos).**
`Caminho: Planejamento Mercado > Planejamento > Defensivos`
`Caminho: Planejamento Mercado > Planejamento > Sementes`

Caso seja ajustado o parâmetro da campanha “Percentual de redução de preço para indústria” para valor “0”, nas páginas de planejamento estava apresentando “null” na descrição, ajustado para acessar diretamente o projeção “realista” quando o valor do parâmetro for zero.

Foi ajustado nomes de algumas colunas nas telas de lançamentos, são elas:

“Lançamento” para “Indicador”

“%” para “% Variação”

“Volume” para “Vendas Corteva (Sc) e Vendas Corteva (Kg/Lt)”

“%” para “% Representatividade”

![Docusaurus logo](/img/bip-569.png)



