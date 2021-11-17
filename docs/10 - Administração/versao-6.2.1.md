---
sidebar_position: 1
---
# Versão 6.2.1

# Melhorias

## **BIP-1227  Permitir o cadastramento ou relacionamento de contatos no cadastro de grupos de cliente.**
`Caminho: Administração > Cadastros > Clientes > Grupos de Clientes`

Incluso a aba “Contatos” no cadastro de grupo de cliente, onde permite o relacionamento apenas dos papéis relacionados ao grupo do cliente.
 

![Docusaurus logo](/img/bip-1655-jira.jpg)

## **BIP-2113  Bloquear duplo clique ao prosseguir com a oferta.**
`Aplicativo Truchoice`

Ao prosseguir com a oferta no app Truchoice, bloqueado o duplo clique para que o mesmo não duplique os produtos da oferta.
 

![Docusaurus logo](/img/bip-2113-jira.jpg)

## **BIP-2187   Ajuste na trava de área ao salvar oferta.**
`Aplicativo Truchoice`

Ajustado o travamento de área ao salvar a oferta no app Truchoice.

## **BIP-2230   Incluir aba de contatos no cadastro de grupos de cliente.**
`Caminho: Administração > Cadastros > Clientes > Grupos`

Incluso a aba “Contatos” no cadastro de grupos de clientes.

![Docusaurus logo](/img/bip-2230-jira.jpg)

## **BIP-2232   Migração telas perfil produtor.**

No app Truchoice foi migrado as telas de leitura e consulta de notas fiscais para perfil de
Produtor. 

## **BIP-2246   Fazer upgrade do aspnet core da API para o 5.0.**
`Aplicativo Truchoice`

No app Truchoice foi desabilitado o botão para evitar duplo chique. 

![Docusaurus logo](/img/bip-2246-jira.jpg)

## **BIP-2265   Fazer upgrade do aspnet core da API para o 5.0.**

Alterado o framework do 3.1 para o 5.0.

## **BIP-2268   Implementar opção de alteração dos contatos na tela de grupos de cliente.**
`Caminho: Administração > Cadastros > Clientes > Grupos`

Implementado a opção de alteração dos contatos na tela de cadastro de grupos de cliente.

![Docusaurus logo](/img/bip-2268-jira.jpg)

## **BIP-2271   Ajustar consultas dashboard.**
`Aplicativo Truchoice`

Foi realizado um ajuste na consulta dos valores do dashboard no app Truchoice.

## **BIP-2272   Migração da stkMeuPedidoLista da page MeuPedido.**
`Aplicativo Truchoice`

Foi feito a migração do pedido lista para a pagina meu pedido no app Truchoice

## **BIP-2273   Migração PopUp de Legenda da tela MeuPedido.**
`Aplicativo Truchoice`

Foi feito a migração do popup de legenda na tede “MeuPedido” no app Truchoice.

## **BIP-2274   Ajustar delay para ir de MeuPedido para as telas de nota fiscal.**
`Aplicativo Truchoice`

Ao acessar o app Truchoice e alterar para as telas “Consultar Notas Fiscais e Notas Fiscais Enviadas”, foi ajustado para melhorar o desempenho.

## **BIP-2276   Permitir customizar o nome do arquivo de saída do schedule de download com parâmetro de data/hora.**

O sistema foi ajustado para permitir que o administrador configure o nome do arquivo de saída com tags de data/hora, e no momento de exportar o arquivo, substitui automaticamente essas tags.
Tags contempladas: {dd} - dia, {MM} - mês, {yyyy} - ano, {HH} - hora, {mm} - minuto, {ss} – segundo

## **BIP-2277   Permitir sobrescrever o arquivo no SFTP no processo de download automático.**

O schedule de download automático foi ajustado para sobrescrever o arquivo no SFTP, caso o mesmo já exista.

## **BIP-2278   Não exibir sistemas no menu e na página "Bem Vindo" caso existam apenas módulos internos.**

Caso o usuário tenha acesso apenas a módulo internos de um determinado sistema, o mesmo não é exibido nem no menu lateral (esquerdo), nem na página "Bem Vindo" em forma de botão de acesso.

## **BIP-2282   Melhorar performance da geração de .csv no schedule de download de integrações.**

Foi ajustado a performance de exportação de .csv.

## **BIP-2293   Ajustar sincronização aplicativo.**
`Aplicativo Truchoise`

Foi ajustado a sincronização do app Truchoice.

# Correções

## **BIP-2280  Correção no upload de arquivos feitos download na central de integração.**
`Caminho: Administração > Integração > Central de Integração`

Ao fazer o download em uma integração, se utilizar o mesmo arquivo para fazer upload de dados na central de integração, apresentava erro de conversão de campo, ajustado para que seja processado corretamente.