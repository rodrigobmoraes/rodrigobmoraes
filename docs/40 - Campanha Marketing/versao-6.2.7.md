---
sidebar_position: 1
---
# Versão 6.2.7

# Melhorias

## **BIP-678 Implementar nova página baseada na de Plano de Metas.**
`Caminho: Campanha Marketing > Status Unidade de Campanha.`

Criado a tela que lista os status de cada workflow.

![Docusaurus logo](/img/bip-678.png)

## **BIP-679 Cadastrar WFs de Fechamento de campanha (Revenda e Vendedores).**
`Caminho: Administração > Cadastros > Workflows > Workflows.`

Foi incluso dois processos de workflow no sistema, de revendas e vendedores, com algumas etapas específica de aprovação e reprovação.

![Docusaurus logo](/img/bip-679.png)

## **BIP-908 Cadastro Config. Cultura - Fluxo de campanha.**
`Caminho: Administração > Cadastros > Campanhas > Fluxo > Config. Culturas.`

Revisado o cadastro de configuração de cultura do fluxo de campanha, foi adicionado os campos: Linha de Negócio e Ativo.

![Docusaurus logo](/img/bip-908.png)

## **BIP-912 Ajustar as consultas das etapas do WF do fluxo de campanha.**
`Caminho: Campanha Marketing > Fluxo > Regulamentos.`

Revisado todas as consultas das etapas de todos os WF do fluxo de campanha.

![Docusaurus logo](/img/bip-912.png)

## **BIP-925 Ajustar as fontes de dados de "Regra de apuração de POG" para considerar o parâmetro @UsuarioLogado.**

As fontes de dados "Regra de apuração de POG do cliente (Total)" e "Regra de apuração de POG do cliente (Por produto)” foram revisadas, para que o comando passe a considerar o parâmetro "@UsuarioLogado".

![Docusaurus logo](/img/bip-925.png)

## **BIP-928 Criar página que permita simular um novo pedido dentro do sistema de campanhas de marketing.**
`Caminho: Campanha Marketing > Simulador de Campanha.`

Incluso um simulador onde é possível ser configurado dinamicamente, com base no conceito de conteúdo, pois cada campanha poderá ter um simulador diferente.

![Docusaurus logo](/img/bip-928.png)

## **BIP-958 Alterar o link do manual das Tarefas 2021.**

Alterado o link do manual na tela de realização do cadastro de tarefas pra clientes.

![Docusaurus logo](/img/bip-958.png)

## **BIP-959 Botão voltar na página de workflow.**
`Caminho: Campanha Marketing > Fluxo > Regulamentos`

Incluso na página de workflow o botão “voltar” com o intuito de redirecionar para a página de lista de fechamento.

![Docusaurus logo](/img/bip-959.png)

## **BIP-975 Cadastro Config. Tipo de cliente.**
`Caminho: Administração > cadastros > Fluxo > Config. Tipo Cliente`

Incluso o campo SIGLA e a opção de ativar/desativar.

![Docusaurus logo](/img/bip-975.png)

# Correções

## **BIP-713 Erro de Javascript ao expandir participantes da campanha.**

Foi corrigida a inconsistência de Javascript que era gerada ao clicar na opção de expandir participantes da tela de início do sistema. Passa a ser carregado corretamente o grid com informações dos produtos.

## **BIP-1016 Corrigir atualização das imagens dos grupos da campanha da navegação da Campanha de Marketing.**
`Caminho: Campanha Marketing > Início > Campanha`

Revisado a página de cadastro grupo cliente, onde a atualização de imagens reflita corretamente a página de campanhas onde é exibido os grupos das campanhas.

![Docusaurus logo](/img/bip-1016.png)

## **BIP-1114 Ajuste na tela Relacionamento de CPF com CNPJ.**

Na tela de relacionar CPF a CNPJ utilizando o upload, estava duplicando as informações de CPF/CNPJ. Foi ajustado para que não duplique no grid.

![Docusaurus logo](/img/bip-1114.png)

## **BIP-1166 Ajustes no processo de simulação de campanha.**
`Caminho: Campanha Marketing > Simulador de campanha.`

Foi adicionado uma nova opção para limpar a simulação realizada e também foi adicionado o ponto (.) como separador de milhar nos valores apresentados.

![Docusaurus logo](/img/bip-1166.png)

## **BIP-1168 Criar novo relatório na central de integrações para acompanhamento de novas campanhas.**
`Caminho: Administração > Integração > Central de Integração`

Incluso na central de integração o "Relatório Controle Clientes Participantes da Campanha" para suprir o acmpanhamento dos canais nas novas campanhas.

![Docusaurus logo](/img/bip-1168.jpg)











