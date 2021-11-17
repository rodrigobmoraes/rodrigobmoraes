---
sidebar_position: 1
---
# Versão 6.2.2

# Melhorias

## **BIP-2263  Criar cadastro de conteúdos.**
`Caminho: Administração > Cadastro > Conteúdos`

Criado a página conteúdos.

![Docusaurus logo](/img/bip-2263-jira.jpg)

## **BIP-2294  Melhorar performance consulta produtor.**
`Aplicativo Truchoice`

Ajustado a consulta do produtor melhorando a performance.

![Docusaurus logo](/img/bip-2294-jira.jpg)

## **BIP-2295  Permitir gerenciar o histórico de responsabilidade da estrutura de venda.**
`Caminho: Administração > Cadastros > Estrutura Venda > Estrutura Venda`

Permitido gerenciar o histórico de responsabilidade da estrutura venda.

![Docusaurus logo](/img/bip-2295-jira.jpg)

## **BIP-2296  Permitir gerenciar o histórico de responsabilidade da estrutura técnica.**
`Caminho: Administração > Cadastros > Estrutura Técnica > Estrutura Técnica`

Permitido gerenciar o histórico de responsabilidade da estrutura técnica

![Docusaurus logo](/img/bip-2296-jira.jpg)

## **BIP-2299  Ajustar preço médio no cálculo do valor potencial.**
`Aplicativo Truchoice`

Ajustado o preço médio definido por marketing das ofertas no app Truchoice, acesso ao
Dashboard.

![Docusaurus logo](/img/bip-2299-jira.jpg)

## **BIP-2306   Exibir itens do menu no iPad.**
`Aplicativo Truchoice`

Os itens do menu lateral no app Truchoice não estavam visíveis no iPad.

## **BIP-2315   Ajustar consulta produtor safra.**
`Aplicativo Truchoice`

Ajustado a consulta que carrega dados para que não ocorra erro de restrição de chave.

## **BIP-2316   Ajustar valores da legenda de preço médio.**

Na tela de dashboard foram ajustados os valores de preço médio da legenda de Defensivos.

## **BIP-2337   Retornar o StackTrace do erro nas chamadas de serviço WCF.**

Em todas as chamadas de serviço WCF, o sistema foi ajustado para retornar o StackTrace quando o sistema apresentar algum erro no processamento do serviço.
Este ajuste tem o intuito de auxiliar os desenvolvedores a solucionar os erros encontrados em ambientes de produção.

## **BIP-2359   Retornar o rastreamento de pilha nos retornos de erro da API.**

Foi implementado na classe padrão de retorno da API, uma propriedade que permita ao usuário desenvolvedor visualizar o rastreamento de pilha nos casos de execução com erro.

# Correções

## **BIP-2300  Falha de visualização no conteúdo das abas ao abrir o cadastro de perfil.**
`Caminho: Administração > Segurança > Perfis de Acesso`

Ajustado a aplicação para que na aba perfil não exiba mais o grid das outras abas.


## **BIP-2304  Ajustar rotina que valida as extensões que devem ser permitidas nos parâmetros do tipo "varbinary".**

Foi devidamente ajustado a rotina que valida as extensões que serão permitidas nas telas onde há parametrização do tipo "varbinary".

## **BIP-2336  Problema ao carregar a tela Perfil de Acesso.**
`Caminho: Administração > Segurança > Perfis de Acesso`

Na tela de perfil de acesso do Bipper, ao tentar editar um perfil de "Campanha de Marketing - Administrador", o mesmo estava entrando em loop infinito e a tela fica bloqueada, não permitindo mais interação do usuário. Foi devidamente ajustado para que isso não ocorra.

![Docusaurus logo](/img/bip-2336-jira.jpg)






