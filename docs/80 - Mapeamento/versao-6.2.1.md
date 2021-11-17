---
sidebar_position: 1
---
# Versão 6.2.1

## Melhorias

## **BIP-1150 Adicionar combo de estrutura de venda no cadastro de oficialização de área v2.**
`Caminho: Mapeamento > Oficialização de Área.`

Incluso combo de estrutura de venda de filiais no cadastro de oficialização de área filtrando as permissões de acesso do usuário.

![Docusaurus logo](/img/bip-1150-jira.png)

## **BIP-2221 Desenvolver aba de documentos na v2 de oficialização de área (Front).**
`Caminho: Mapeamento > Oficialização de Área.`

Incluso a aba “Download / Upload” onde consta o documento de oficialização de área.

![Docusaurus logo](/img/bip-2221-jira.png)

## **BIP-2221 Desenvolver aba de documentos na v2 de oficialização de área (Front).**
`Caminho: Mapeamento > Oficialização de Área.`

Incluso a aba “Download / Upload” onde consta o documento de oficialização de área.

![Docusaurus logo](/img/bip-2221-jira.png)

## **BIP-2234 Ajustar as procedures de envio de notificações de e-mail do processo de oficialização de área para contemplar os novos modelos.**

As procedures de envio de notificações de e-mails das etapas pendentes de aprovação e aprovado / reprovado foram ajustadas para que possam contemplar os novos modelos criados.

## **BIP-2221 Desenvolver mapa para carregar e possibilitar edição da área de atuação da filial filtrada da oficialização de área (Front).**
`Caminho: Mapeamento > Oficialização de Área.`

Incluso no popup de reprovar com sugestão o mapa de atuação.

![Docusaurus logo](/img/bip-2238-jira.png)

## **BIP-2240 Desenvolver página de sugestão de alteração da atuação da filial por plataforma na v2 de oficialização de área.**
`Caminho: Mapeamento > Oficialização de Área.`

Desenvolvido a página de sugestão de alteração da atuação da filial por plataforma na v2 de oficialização de área.

![Docusaurus logo](/img/bip-2240-jira.png)

## **BIP-2242 Desenvolver rotina que respeitará os novos parâmetros da sugestão do processo de workflow da oficialização de área.**

Desenvolvido algumas rotinas para a etapa de geração de documento e aprovação de documentos (ação do botão de reprovar com sugestão). Essas rotinas observa o código das etapa parametrizadas e valida a ação específica que será realizada.

## **BIP-2243 Ajustes em geral no layout e pequenas correções no modulo de oficialização de área.**
`Caminho: Mapeamento > Oficialização de Área.`

Ajustes em geral no layout e pequenas correções no modulo de oficialização de área.

## **BIP-2260 Criar parâmetro para exigir o aceite do termo de regulamento da oficialização de área.**
`Caminho: Administração > Cadastros > Campanhas > Campanhas.`

Incluso o parâmetro “Exigir aceite de regulamento no workflow oficialização de área” para a oficialização de área.

## **BIP-2261 Exibir o loading de Aguarde no carregamento e nas ações dos botões das etapas do workflow de oficialização.**
`Caminho: Mapeamento > Oficialização de Área.`

É necessário que o sistema exiba o loading de Aguarde no carregamento e nas ações dos botões de cada etapa do workflow de oficialização de área.

![Docusaurus logo](/img/bip-2261-jira.png)

## **BIP-2264 Remover obrigatoriedade do parâmetro de etapa do cliente no sistema de mapeamento.**
`Caminho: Administração > Administração > Configurações.`

Foi incluso um parâmetro no sistema de mapeamento, que visa configurar qual é a etapa do workflow que representa o etapa que o cliente deve fazer a aprovação do processo de workflow. Esse parâmetro é opcional, por nem todos os clientes usam essa opção no workflow.

![Docusaurus logo](/img/bip-2264.png)

## **BIP-2269 Implementar opção de excluir oficialização de área.**
`Caminho: Mapeamento > Oficialização de Área.`

Foi ajustado para ser possível a exclusão de uma oficialização de área para usuários com perfil de administrador no sistema.

![Docusaurus logo](/img/bip-2269.png)

## Correções

## **BIP-2265 Não permitir concluir popup de reprovar com sugestão da oficialização de área se não houver alteração.**
`Caminho: Mapeamento > Oficialização de Área.`

Não será permitido concluir o popup de reprovar com sugestão se não houver alteração. Os campos de plataforma, filiais e comentário são obrigatórios e deverá ser necessário pelo  menos uma alteração no mapa.

![Docusaurus logo](/img/bip-2265-jira.png)

## **BIP-2265 Erro de primary key ao incluir oficialização de área cujo grupo selecionado possui responsável por filial .**
`Caminho: Mapeamento > Oficialização de Área.`

Quando o processo de oficialização possuía mais de uma filial, e cada uma dessas filiais possui uma configuração de quem é o responsável pela mesma, o sistema apresentava erro ao abrir um processo de oficialização.
