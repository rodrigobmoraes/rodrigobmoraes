---
sidebar_position: 1
---
# Versão 6.2.0

# Melhorias

## **BIP-1891 Ajustar sincronização do app campo demonstrativo na API**

Ajustado a sincronização do app campo demonstrativo na API, foi criado uma nova tabela interna onde é salvo as informações da venda de produtos do campo.

![Docusaurus logo](/img/bip-796.png)

## **BIP-2248 Adicionar Unidade de Medida na tela de Colheita do Top Plot**
`Caminho: Campo Demonstrativo > Lista de Campos Demonstrativos.`

Incluso a unidade de medida na etapa de “Colheita”.

![Docusaurus logo](/img/bip-2248-jira.png)

# Correções

## **BIP-2162 Ajustar download PPT, apresentando erro json.text e slide aplicação.**
`Caminho: Campo Demonstrativo > Lista de Campos Demonstrativos.`

Ajustado o download PPT para o campo demonstrativo, o erro é referente a biblioteca System.Text.Json. Quando existia mais de 8 linhas de produtos, dessa forma não gerava o ppt e apresentava erro na API.

![Docusaurus logo](/img/bip-2162-jira.png)