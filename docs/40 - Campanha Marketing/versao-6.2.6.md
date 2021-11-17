---
sidebar_position: 1
---
# Versão 6.2.6

# Melhorias

## **BIP-80 Alteração da Guia de cadastro de cliente.**

Melhorado o guid de cadastro cliente com a intensão de inverter a guia status com a guia cliente.

## **BIP-665 Possibilitar cadastrar "responsabilidades" para uma campanha e atribuir usuários.**
`Caminho: Administração > Cadastros > Campanhas > Campanhas`

Implementado um grid para permitir cadastrar os “Especialistas de Marketing e Responsáveis da Campanha” onde é dinâmico o carregamento dos campos e suas parametrizações.

![Docusaurus logo](/img/bip-665.png)

## **BIP-668 Cadastro de novos status para UC.**
`Caminho: Administração > Cadastros > Campanhas > Campanhas.`

Criado a opção “incluir um status por espécie” na aba clientes do cadastro de campanha, onde é gerado todos os status por espécie sendo possível excluir/editar.

![Docusaurus logo](/img/bip-668.png)

## **BIP-707 Criar validação do parâmetro que permite lançar notas fiscais no sistema de Campanha de Marketing.**
`Caminho: Administração > Cadastros > Campanhas > Campanhas.`

Melhorado a validação de permissão para lançar notas fiscais, onde ao passar do prazo final alguns perfis não terão permissão de lançar notas.

## **BIP-766 Adicionar um link no módulo de governança para os usuários conseguirem visualizar quais são os canais parceiros diretos.**

Melhorado o informativo de governança, inserido um link para visualizar os canais parceiros.

![Docusaurus logo](/img/bip-766.png)

## **BIP-777 Possibilitar criar vários workflows por campanha e atrelar aos indicadores de apuração e extratos.**
`Caminho: Administração > Cadastros > Campanhas > Campanhas.`

Incluso no cadastro de campanhas a guia “workflow”, possibilitando a criação de vários workflows por campanha.

![Docusaurus logo](/img/bip-777.png)

# Correções

## **BIP-561 Erro de javascript "Cannot read property style" ao acessar Workflow de Eventos.**
`Caminho: Eventos > Planos de Ação > PNZ > Workflow.`

Revisado a página de workflow de eventos, onde exibia no console do navegador alguns erros.

## **BIP-630 Ajustar layout da tela de Hotsite.**
`Caminho: Campanha de Marketing > Configurações > Campanha > Hotsite.`

Revisado o layout dos labels dos campos para não ficarem sobrepostos um com os outros.

## **BIP-722 Ajuste de visualização do Excel do plano de metas.**
`Caminho: Campanha de Marketing > Plano de Metas.`

Revisado a permissão do cliente para que seja extraído dados do plano de metas com apenas informações onde o cliente está vinculado.

## **BIP-753 Ajuste na tela de plano de ação para distribuidores.**

Revisado as etapas de aprovação do plano de ação, visualização do workflow e a seleção do plano de ação ao criar um.

## **BIP-775 Ajuste nos indicadores referente ao envio de dados frequentes.**

Revisado o ícone “Envio de Dados” onde a alteração de cores simboliza o não envio de Notas Fiscais e atrasos de envio.

![Docusaurus logo](/img/bip-775.png)

## **BIP-781 Correção na consulta de carregamento dos workflows de aditivo, fechamento e pagamento.**
`Caminho: Campanha de Marketing > Fluxo > Aditivo ou Fechamentos ou Pagamentos.`

Havia uma inconsistência na rotina que carregava os workflows de aditivos, fechamentos e pagamentos, por isso, eles não eram carregados corretamente. Essa rotina foi ajustada e os workflows passam a carregar as informações normalmente.













