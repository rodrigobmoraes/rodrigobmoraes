---
sidebar_position: 1
---
# Versão 6.2.2

## Melhorias

## **BIP-2262 Desenvolver módulo de Planejamento de Mercado de Sementes.**
`Caminho: Planejamento Mercado > Planejamento > Sementes > POG por Cultura > POG por NTM.`

Desenvolvido novo módulo de Planejamento de Mercado de Sementes.

## **BIP-2297 Criar indicador de market share pelo potencial no planejamento de POG.**
`Caminho: Planejamento Mercado > Planejamento > Sementes > POG por Cultura > POG por NTM.`
`Caminho: Planejamento Mercado > Planejamento > Defensivos > POG por Cultura > POG por NTM.`

O usuário terá mais um indicador de market share na interface de planejamento de POG, onde o mesmo é calculado com base no POG (US$) X Potencial (US$).

Esse novo indicador poderá ser digitado pelo usuário.

![Docusaurus logo](/img/bip-2297.png)

## **BIP-2313 Incluir campos do mercado de sementes na integração de área plantada.**
`Caminho: Administração > Integração > Central de Integração.`

A integração de área plantada do planejamento de mercado, tanto o download como o upload, foram ajustados para considerar os campos:

% Semente Salva

Taxa Semeadura (Sc/ha)

Preço Semente (U$/Sc)

Potencial de Mercado (Sc)

Potencial de Mercado (US$

![Docusaurus logo](/img/bip-2313.png)

## **BIP-2014 Ajustar rotina de atualização do planejamento por estrutura de venda para considerar indicadores de sementes.**
`Caminho: Planejamento Mercado > Planejamento > Mercado de Sementes.`

No upload de área plantada e na tela de planejamento do mercado de sementes, foi ajustado a rotina que gera os dados por estrutura de venda, para que a mesma replique também os indicadores de sementes: "% Semente Salva", "Taxa de Semeadura", "Preço Semente" etc.

![Docusaurus logo](/img/bip-2014.png)

## **BIP-2014 Incluir conceito de linha de negócio no dashboard.**
`Caminho: Planejamento Mercado > Dashboard.`

Foi incluso no dashboard uma nova opção de filtro, chamada de "Linha de Negócio".Essa opção é a primeira opção na lista, sendo do tipo "simples seleção".
Ao selecionar a linha de negócio, a lista de indicadores atualizará, de acordo com a linha selecionada.A opção de filtro por "Segmentos” é visualizada apenas na análise do mercado de "Defensivos".

![Docusaurus logo](/img/bip-2326.png)

## **BIP-2329 Criar integração de pog para a linha de sementes.**
`Caminho: Administração > Integração > Central de Integração.`

Incluso um upload de POG para a linha de sementes, na mesma linha do pog de defensivos, porém sem o detalhamento por segmento. E no lugar do campo "Dose/ha" foi substituído pelo  campo "Taxa de Semeadura (Sc/ha)".

![Docusaurus logo](/img/bip-2329.png)

## **BIP-2333 Desenvolver módulo de Planejamento de Mercado de POG por Cultura/NTM de Sementes.**
`Caminho: Planejamento Mercado > Planejamento > Sementes > POG por Cultura / POG por NTM.`

Foi desenvolvido os módulos de POG por Cultura e POG por NTM de sementes.

## **BIP-2343 Exibir o path completo do módulo na página de configuração de indicadores por módulo.**
`Caminho: Planejamento Mercado > Administração > Tipos de Valores > Módulos.`

Criado um padrão para as linhas em que os indicadores são editáveis e não-editáveis nos grids do Planejamento de Mercado. Branco para as linhas dos indicadores editáveis e cinza para as não-editáveis.

![Docusaurus logo](/img/bip-2343.png)

## **BIP-2358 Exibir o path completo do módulo na página de configuração de indicadores por módulo.**
`Caminho: Planejamento Mercado > Administração > Tipos de Valores > Módulos.`

Inserido o path inteiro do módulo no agrupamento do grid, pois na estrutura toda existem módulos com nome repetido.

![Docusaurus logo](/img/bip-2358.png)

## Correções

## **BIP-2292 O planejamento de área por estrutura de venda não está carregando em alguns cenários.**
`Caminho: Planejamento Mercado > Planejamento > Área Plantada.`

Quando o parâmetro de nível de estrutura de venda da campanha está configurado acima do último nível, o planejamento de área por estrutura de venda não estava carregando a etapa de lançamento.

## **BIP-2323 Ajustar Planejamento de Mercado de Defensivos para que não retorne o valor "Infinity" no grid de Lançamentos.**
`Caminho: Planejamento Mercado > Planejamento > Defensivos > Mercado.`

Em algumas situações em que não é possível realizar o cálculo dos indicadores, o valor de "Infinity" é retornado na linha do grid de Lançamentos do Planejamento de Mercado de Defensivos, foi ajustado para que isso não ocorra. No primeiro ano editável deste grid, quando é digitado um valor em algum indicador, os demais indicadores para este ano não estavam sendo calculados, apenas nos anos posteriores.

## **BIP-2342 Aplicar validações de valores "Infinity" e "NaN" no Planejamento de Mercado de POG por Cultura/NTM de Sementes e Defensivos.**
`Caminho: Planejamento Mercado > Planejamento > Defensivos > POG por Cultura > POG por NTM.`
`Caminho: Planejamento Mercado > Planejamento > Sementes > POG por Cultura > POG por NTM.`

Em alguns casos em que não é possível realizar os cálculos dos indicadores no Planejamento de Mercado de POG por Cultura/NTM de Sementes e Defensivos, os valores de "Infinity" e "NaN" estavam aparecendo no grid. Ajustado para que não ocorra.
