---
sidebar_position: 1
---
# Versão 6.2.6

## Melhorias

## **BIP-688 Permitir calcular o potencial de mercado usando o custo por território.**

O sistema passa a possibilitar que o potencial de mercado seja calculado utilizando o custo por estrutura de venda. Para isso, foi criado um parâmetro na campanha, onde o usuário deverá selecionar qual o custo que ele utiliza para calcular o mercado: custo por localização geográfica ou custo por estrutura de venda, dessa forma, as rotinas que calculam o potencial, passam a considerar esse novo parâmetro ao realizar a apuração dos valores. As informações serão registradas na nova tabela BM_ESTRUTURAVENDACULTURASEGMENTO, que poderá ser carregada manualmente pela tela ou pelo processo de integração (download/upload).

## **BIP-726 Ao utilizar o TAB pra se locomover do campo POG para %, é replicado o valor informado.**
`Caminho: Mapeamento > Minha Área de Atuação.`

Em "Distribuição do POG" na etapa "3 - Filial/Fazenda + Gerente de Território" ao informar o valor do POG e apartar a tecla TAB para informar a %, o sistema limpa o campo para o usuário informar.

## **BIP-726 Ao utilizar o TAB pra se locomover do campo POG para %, é replicado o valor informado.**
`Caminho: Mapeamento > Minha Área de Atuação.`

Em "Distribuição do POG" na etapa "3 - Filial/Fazenda + Gerente de Território" ao informar o valor do POG e apartar a tecla TAB para informar a %, o sistema limpa o campo para o usuário informar.

![Docusaurus logo](/img/bip-726.png)

## Correções

## **BIP-788 Revisão da tela de Oficialização de Área.**
`Caminho: Mapeamento > Oficialização de Área.`

A Tela de Oficialização de Área passou por revisão e algumas melhorias e correções foram 
aplicadas, conforme destacado abaixo:

• Revisado o alinhamento dos campos do cadastro de novas oficializações de área.
• Corrigidos paths de arquivos não encontrados que estavam gerando inconsistências de 
Javascript.
• A rotina de download do documento de oficialização foi revisada e passa a exportar o 
documento no formato PDF e passa também a exportar corretamente as imagens do 
mapa de atuação e mapa de calor.

## **BIP-733 No grid de canais de distribuição, está exibindo dois nomes ao passar o mouse no título.**
`Caminho: Mapeamento > Minha Área de Atuação..`

A duplicidade do hint do campo nome foi corrigida.

