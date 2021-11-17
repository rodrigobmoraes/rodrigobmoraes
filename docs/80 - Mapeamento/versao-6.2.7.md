---
sidebar_position: 1
---
# Versão 6.2.7

# Melhorias

## **BIP-771 Erro de javascript ao carregar o Mapa da tela de diagnóstico de atuação.**
`Caminho: Mapeamento > Análises > Diagnóstico de Atuação.`

Revisado o mapa de diagnóstico de atuação onde o carregamento não estava sendo executado.

![Docusaurus logo](/img/bip-771.png)

## **BIP-772 Adicionar validação para não deixar informar custo de mercado se a área de atuação estiver zerada.**
`Caminho: Mapeamento > Administração > Custo Mercado.`

A tela de custo de mercado foi melhorada e não permitirá mais a inserção de registros caso a área plantada esteja zerada. Anteriormente, era gerado uma inconsistência de divisão por zero.

![Docusaurus logo](/img/bip-772.png)

## **BIP-926 Inserção de origem de dados SAP.**

Foi adicionado o registro 3 – SAP na tabela de ORIGEMDADOS. Essa informação será utilizada pela equipe de BI para futuras integrações.

## **BIP-992 Melhorar visualização dos grids da aba de Download/Upload da tela de Oficialização de Área do mapeamento.**
`Caminho: Mapeamento > Oficialização de Área > Guia Download/Upload.`

Ajustado layout da Guia de Download/Upload, que passa a separar os tipos de documentos em linhas e as demais opções em colunas.

![Docusaurus logo](/img/bip-992.png)

## **BIP-1078 A página de Sobreposição de distribuidores está exibindo uma mensagem de erro ao tentar carregar o popup.**
`Caminho: Mapeamento > Análises > Sobreposição de Distribuidores.`

Na página de sobreposição de distribuidores do mapeamento, ao clicar no percentual era exibida uma mensagem de divergência, não permitindo a visualização do mapa. Essa situação foi corrigida e passa a ser possível visualizar o mapa normalmente.

![Docusaurus logo](/img/bip-1078.png)

# Correções

## **BIP-770 Hint da Tela de Apresentação não está quebrando as linhas.**
`Caminho: Mapeamento > Apresentações > Equipe de Vendas.`

O layout do hint exibido no mapa de atuação foi ajustado para “quebrar” as informações em mais de uma linha.

![Docusaurus logo](/img/bip-770.png)

## **BIP-1203 Ajustar os campos de Área Atendida (ha), Cultura e Potencial de Mercado (Sc) do relatório de Área Plantada Sementeiros.**
`Caminho: Mapeamento > Minha Área de Atuação.`

As informações dos campos de Área Atendida (ha), Cultura e Potencial de Mercado (Sc) não estavam sendo trazidas no relatório de Área Plantada Sementeiros. O relatório foi devidamente ajustado para exitir todas as informações.

![Docusaurus logo](/img/bip-1203.jpg)


