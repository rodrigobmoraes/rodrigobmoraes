---
sidebar_position: 1
---
# Versão 6.2.5

# Melhorias

## **BIP-61 Alterar o campo de tipo de cliente da tela de solicitação.**
`Caminho: Campanha de Marketing > Fluxo > Solicitações.`

A tela de Solicitações passa a ter o campo Tipo Cliente, onde será possível selecionar o grupo de clientes que farão parte da solicitação. O grupo de cliente será cadastrado através da opção Config. Tipo Cliente (Administração > Cadastros > Campanhas > Fluxo > Config. Tipo Cliente).

![Docusaurus logo](/img/bip-61.png)

# Correções

## **BIP-147 Ajustar cadastro de participante.**
`Caminho: Campanha de Marketing > Fluxo > Solicitações.`

A tela de cadastro de participante foi revisada para passar a permitir a alteração das informações do participante. Anteriormente, ao realizar uma alteração, era gerada uma inconsistência e os dados não eram atualizados.

## **BIP-405 Ajustar cadastro de participante, mensagem "Não há linha na posição 0".**

A tela de cadastro de participante foi revisada e passa a permitir a alteração e gravação dos dados corretamente. Anteriormente, havia uma divergência que não permitia a gravação dos dados.

## **BIP-409 Página não encontrada ao tentar avançar da distribuição de POG.**

Revisado processo de distribuição de POG para carregar corretamente as páginas do processo. Anteriormente, havia uma divergência que fazia com que a página do distribuidor não carregasse carregamento.

## **BIP-419 Ajuste na página de documentos.**
`Caminho: Campanha Marketing > Início > Campanha > Selecionar Campanha e Cliente > Opções > Documentos.`

A tela de documentos do módulo de campanha de marketing foi revisada para não apresentar mais a inconsistência de ‘cadeia de caracteres no formato incorreto’ ao ser iniciada.

## **BIP-464 Ajustar a tela de relacionar CNPJ a CPF.**
`Caminho: Campanha Marketing > Início > Campanha > Selecionar Campanha e Cliente > Opções > Nota Fiscal > Relacionar CPF a CNPJ.`

Corrigida inconsistência no processo de upload de registros de relacionamento de CPF com CNPJ, que fazia com o registro não fosse importado quando havia letras ou traços no campo código destinatário.

## **BIP-471 Revisão JS da tela de Prazos Campanha (MKT). A mesma continha uma letra perdida no JS e uso do max sem valor.**
`Caminho: Campanha Marketing > Configurações > Campanha > Prazos da Campanha.`

Foi ajustado o JS da página de prazos da campanha.

## **BIP-477 A página Plano de Ação não está trazendo informações ao acessar com perfil do RTV.**
`Caminho: Eventos > Planos de Ação > Plano Ação.`

Ajustado a página “Plano de Ação” para trazer as devidas informações para o usuário RTV logado no sistema.

## **BIP-482 Componentes da página estão sendo criados com o mesmo ID.**
`Caminho: Campanha de Marketing > Configurações > Campanha > Hotsite.`

Havia uma divergência na tela de Hotsite, onde alguns componentes eram criados com os mesmos IDs, o que gerava um erro de DOM no HTML. Essa inconsistência foi corrigida e os componentes passam a ser gerados com IDs específicos.

## **BIP-482 Erro ao acessar mais de um dashboard de dentro do portal da unidade de campanha.**
`Caminho > Campanha de Marketing > Selecionar Campanha > Selecionar Participante > Abrir Dashboard.`

Ao realizar o segundo acesso a um dashboard na página de detalhamento da unidade de campanha, era gerada uma inconsistência e o dashboard não era carregado. Esse problema foi corrigido e os dashboards passam a ser carregados corretamente, independentemente da quantidade de acessos realizados.

## **BIP-558 Erro ao visualizar documentos de uma unidade de campanha.**
`Caminho: Campanha de Marketing > Selecionar Campanha > Selecionar Participante > Status da Campanha > Menu Documentos.`

A tela de visualização de documentos da campanha foi revisada e passa a permitir a visualização correta dos documentos, sem gerar nenhuma inconsistência.

![Docusaurus logo](/img/bip-558.png)

## **BIP-568 Workflow Regulamento.**
`Caminho: Campanha de Marketing > Fluxo > Solicitações.`

Ao realizar a aprovação da etapa "Marketing Leader Crop Protection & Marketing Leader Seeds" o sistema não permitia concluir, foi devidamente ajustado para que posso ser realizado a aprovação.

![Docusaurus logo](/img/bip-568.png)








