---
sidebar_position: 1
---
# Versão 6.2.5

## Melhorias

## **BIP-57 Ajuste de imagens do PNZ.**
`Caminho: Eventos > Planos de Ação > PNZ.`

O componente de upload de imagem da tela de cadastro de eventos, passa a permitir alteração da imagem somente se o status do evento permitir alteração, anteriormente era possível alterar a imagem mesmo com o evento concluído. Além disso, foram realizados ajustes de alinhamento nos botões de alteração e remoção de imagem.

## **BIP-73 Alteração da flag de conclusão do workflow do plano de ação.**
`Caminho: Eventos > Planos de Ação > PNZ.`

A flag que mostra o status atual do plano de ação, será alterada automaticamente para finalizada após a conclusão da última etapa do plano de ação.

## **BIP-215 Alterar o processo de validação de comprovantes do plano de ação.**
`Caminho: Eventos > Planos de Ação > PNZ.`

O processo de plano de ação foi alterado e passou a permitir o envio de e-mail ao finalizar o processo de anexar NF e também ao relacionar uma NFS ao pagamento. Além disso, o cálculo do valor das notas passa a considerar os impostos e a comissão.

## **BIP-222 Ajuste na consulta de plano de ação.**
`Caminho: Eventos > Planos de Ação > PNZ.`

A tela de plano de ação foi revisada e o carregamento dos registros passou a ser mais rápido.

## **BIP-411 Inserir na lista de PNZ o meio de acesso do cliente.**
`Caminho: Eventos > Planos de Ação > PNZ.`

Foi adicionado ao Grid de planos em andamento, o campo Meio de Acesso.

## **BIP-468 Campo de meta de sell-out no Workflow de Eventos.**
`Caminho: Eventos > Plano de Ação > PNZ > Consultar WorkFlow > Resumo dos Eventos.`

A tela de Workflow de Eventos passa a ter o campo meta de sell-out, que vai exibir o valor do sell-out que foi cadastrado para o evento.

![Docusaurus logo](/img/bip-468.png)

## Correções

## **BIP-63 Na página de consulta de workflow, a timeline está limitando as informações de aprovação.**
`Caminho: Eventos > Planos de Ação > PNZ > Consultar Workflow.`

A tela de exibição das aprovações/reprovações passa a exibir um scrollbar, caso exista mais de 5 etapas informadas. Anteriormente, a tela cortava as informações.

## **BIP-218 Ajuste no componente de imagem do módulo de Eventos.**
`Caminho: Eventos > Planos de Ação > PNZ > Criar Plano.`

Foi corrigida a inconsistência do componente de upload de imagem, que agora não vai mais gerar inconsistência no javascript e nem distorcer o layout da tela.

## **BIP-417 Corrigido BUG de filtro de usuário responsável na tela de lista de PNZ.**
`Caminho: Eventos > Planos de Ação > PNZ.`

Havia uma divergência no layout do grid de PNZ, que fazia com que o mesmo ficasse deformado ao utilizar o flag “Exibir planos que necessitam da minha aprovação”. Essa divergência foi corrigida.

## **BIP-470 Erro ao abrir plano de ação de representante legal.**
`Caminho: Eventos > Planos de Ação.`

Corrigida inconsistência que gerava erro ao acessar a tela de plano de ação com um usuário que tinha perfil de representante legal.

## **BIP-470 Etapa atual da solicitação não é exibida.**
`Caminho: Campanha de Marketing > Início > Fluxo > Solicitações.`

Foi corrigida a inconsistência da tela de solicitações, que fazia com que a etapa atual do workflow não fosse exibida.

![Docusaurus logo](/img/bip-475.png)

## **BIP-511 Erro ao carregar plano de ação no perfil de RTV.**
`Caminho: Eventos > Plano de Ação > Plano de Ação.`

Foi corrigida a inconsistência da tela de planos de ação que causava erro no carregamento dos registros, quando o usuário utilizava um perfil de nível RTV.

## **BIP-618 Erro ao carregar plano de ação no perfil de RTV.**
`Caminho: Eventos > Plano de Ação > Plano de Ação.`

Ao tentar enviar um plano de ação para aprovação, estava ocorrendo uma inconsistência de Javascript ao clicar no botão "Enviar para a aprovação". Essa situação foi corrigida e passa a ser possível enviar os planos de ação normalmente para aprovação.


