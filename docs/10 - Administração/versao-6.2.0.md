---
sidebar_position: 1
---
# Versão 6.2.0

# Melhorias

## **BIP-1652  Implementar padrões na API do Bipper.**

Implementado padrões definidos na API.


## **BIP-1655  Incluir o processo de atualização do cubo do BIPPER nos schedules da API.**
`Caminho: Administração > Administração > Configurações`

Incluso um schedule na API para avaliar as requisições de atualização do cubo, afim de automatizar o processo. 

![Docusaurus logo](/img/bip-1655-jira.jpg)

## **BIP-2051  Desenvolver estrutura na API para realizar a sincronização com o App Broca da Cana.**

Desenvolvido uma estrutura na API para realizar a sincronização com o App Broca da Cana.

## **BIP-2066  Desenvolver rotina para verificar se o parâmetro passado no endPoint é válido.**

Desenvolvido uma rotina para verificar se o parâmetro passado no endPoint é válido.

## **BIP-2151  Desenvolver recurso para executar algoritmo desenvolvido em C++ e alimentar banco de dados com as informações geradas.**

Desenvolvido o recurso para executar algoritmo desenvolvido em C++ e alimentar banco de dados com as informações geradas.

## **BIP-2174  Criação de schedule de consulta de cotação de moedas.**
`Caminho: Administração > Administração > Configurações`

Desenvolvido um schedule que consulta a cotação de moedas (dólar, euro etc) e traz para a base de dados para consumo de outros processos do sistema.

![Docusaurus logo](/img/bip-2174-jira.jpg)

## **BIP-2185  Criar controlador na API para utilização na atualização de versão.**

Foi criado um método para verificação de versão disponível por ambiente, e um método para download dos pacotes de atualização.

## **BIP-2192  Criar uma versão otimizada (V2) do aplicativo de atualização de versão do BIPPER.**

Nessa versão o sistema otimiza o processo de atualização de versão, elimina os tráfegos desnecessários, mantendo arquivos em cache e elimina as rotinas de backups. Essa versão consome menos pacotes de atualização da API do BIPPER.

## **BIP-2198  Desenvolver endpoint na API para retornar as etapas do WF para integração da accenture.**

Desenvolvido um endpoint na API para retornar as etapas do WF para integração da accenture. 

## **BIP-2200  Desenvolver endpoints para realizar a aprovação dos Workflows na integração da Accenture.**

Desenvolvido um endpoints para realizar a aprovação dos Workflows na integração da Accenture.

## **BIP-2201  Remover opções de edição (inclusão, alteração e exclusão) do cadastro de moedas.**
`Caminho: Administração > Cadastros > Moedas > Moedas`

O cadastro de moedas passa a ser interno do sistema.
Consequentemente as opções de inclusão, alteração e exclusão necessariamente foram removidas do sistema.

![Docusaurus logo](/img/bip-2201-jira.jpg)

## **BIP-2209  Desenvolver parte do backend para atender a aba de duplo domicilio na v2 de oficialização de área.**

Desenvolvido parte do backend para atender a aba de duplo domicilio na v2 de oficialização de área.

## **BIP-2214  Desenvolver recurso para que seja possível especificar qual o verbo de retorno das requisições.**

Desenvolvido um recurso para que seja possível especificar qual o verbo de retorno das requisições, antes os retornos eram padrões, 200 para sucesso e 400 para erro, com esse ajuste, é possível configurar o retorno de acordo com a necessidade.

## **BIP-2222  Desenvolver parte do backend para atender a aba de documentos na v2 de oficialização de área.**

Desenvolvido parte do backend para atender a aba de documentos na v2 de oficialização de área.

## **BIP-2223  Desenvolver parte do back end para atender a aba de mapa na v2 de oficialização de área.**

Desenvolvido parte do back end para atender a aba de mapa na v2 de oficialização de área.

## **BIP-2253  Ocultar parâmetros de navegação dos provedores de BI na página padrão de dashboard.**

Ajustado para que a página interna de navegação de dashboards, para que os parâmetros que são utilizados pelos provedores de BI (Ex: Tableau), não fique visível para o usuário.

# Correções

## **BIP-2202  Os e-mails das integrações não estão chegando para os destinatários configurados no scheduler.**

Os e-mails das integrações não estavam chegando para os destinatários configurados no scheduler.

## **BIP-2205  A página padrão de navegação (navegação/Lista) está dando erro no refresh quando a sessão expira.**

Ajustado o timeout da página afim de eliminar erros ao ficar muito tempo inativo, fazendo com que o usuário tenha que fazer novamente o login e ser redirecionado para a página onde estava.

## **BIP-2217  Erro de acesso ao sistema na utilização do aplicativo ZScaler.**

Para usuários que tem o aplicativo ZScaler (controle de internet), quando o mesmo está em uma internet pública, wifi por exemplo, o sistema apresentava um erro quando o usuário tentava efetuar login no sistema.

## **BIP-2228  O sistema não está abrindo o gerenciador de schedules em alguns ambientes.**
`Caminho: Administração > Administração > Configurações`

Quando o endereço da api tem a palavra "/api" no seu radical, o sistema não estava montando corretamente a url de acesso ao gerenciador de schedules. Ajustado para que seja possível acessar.

![Docusaurus logo](/img/bip-2228-jira.jpg)