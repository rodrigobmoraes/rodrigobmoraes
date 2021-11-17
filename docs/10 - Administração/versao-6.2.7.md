---
sidebar_position: 1
---
# Versão 6.2.7

# Melhorias

## **BIP-796  Ajuste de nomenclatura e correção de consulta no cadastro de workflow.**
`Caminho: Administração > Cadastros > Workflows > Workflows`

Revisado a página “Etapa” do cadastro de workflows, onde a edição tornou-se funcional e as seguintes descrições foral alteradas:
De: Cadastrar agricultor duplo domicílio - RTV | Para: Criar documento de Oficialização - RTV
De: Cadastrar documentos – RTV | Para: Carregar documento assinado – RTV

![Docusaurus logo](/img/bip-796.jpg)

## **BIP-841  Criar campo que identifica se a coluna de uma fonte de dados CRUD é autoincremento.**
`Caminho: Administração > Desenvolvimento > Fonte de dados`

As rotinas de criação de fonte de dados do tipo Crud passam a identificar os campos que são de auto incremento.

![Docusaurus logo](/img/bip-841.jpg)

## **BIP-847  Implementar ações nas colunas das fontes de dados.**
`Caminho: Administração > Desenvolvimento > Fonte de dados`

Implementado ações de identificador único, data atual e usuário logado ao criar uma fonte de dados do tipo CRUD.

![Docusaurus logo](/img/bip-847.jpg)

## **BIP-857  Ajustar parâmetro de dados dos endpoints das fontes de dados de CRUD para lista de objetos dinâmicos.**

Os endpoints de criação e manutenção de fonte de dados do tipo crud foram alterados para utilizar como List (anteriormente era string), o que deixa o uso dos endpoints mais simples.

## **BIP-894  Criar campos "Código CRM" e "Idioma Padrão" no cadastro de usuários.**
`Caminho: Administração > Seguranças > Usuários`

A tela de cadastro de usuário passa a ter os campos Código CRM e Idioma Padrão, além disso, o campo Código foi renomeado para Código Interno. 

![Docusaurus logo](/img/bip-894.jpg)

## **BIP-922  Criar campos "País" e "Idioma Padrão" na tela de Meus Dados.**

Os campos de "País" e "Idioma Padrão foram implementados no formulário da tela de Meus Dados, conforme o cadastro de usuários.

![Docusaurus logo](/img/bip-922.jpg)

## **BIP-1006  Ajustar upload de POG de defensivos, para ajustar relacionamento "Cultura x Segmento x Produto" conforme carga efetuada.**
`Caminho: Administração > Integração > Central de Integração > Planejamento > Mercado > POG de Defensivos`

Ao realizar o upload de uma planilha de POG de defensivos, o sistema passa a realizar automaticamente o relacionamento da cultura com os segmentos e produtos, de acordo com os dados da planilha.

## **BIP-1007  Aplicar rollback quando a transação de salvar não for concluída com sucesso no cadastro de culturas.**
`Caminho: Administração > Cadastros > Culturas > Culturas`

O cadastro de culturas passa a aplicar rollback na transação quando é gerado algum erro ao salvar um registro. Esse controle é importante para que toda a transação seja cancelada e nenhum dado divergente seja inserido na base de dados.

## **BIP-1020  Ajuste no relatório Status da Campanha da Central de integrações.**
`Caminho: Administração > Integração > Central de Integração > Campanha MKT > Status Campanha`

As rotinas do processo de download do status da campanha foram revisadas e melhoradas. O desempenho do processo agora será mais rápido e eficiente do que a versão anterior.

## **BIP-1046  Melhorias para execução do Bipper em container Docker.**

Algumas rotinas do sistema BIPPER foram melhoradas e passam a ser compatíveis com o ambiente de containers do Docker

## **BIP-1050  Criar no web.config das aplicações, um parâmetro que permita configurar se o servidor irá forçar o protocolo HTTPS.**

Incluso um parâmetro para forçar o protocolo HTTPS.

# Correções

## **BIP-690  Ao alterar o nome do módulo, em perfil de acesso é desvinculado do usuário.**
`Caminho: Administração > Desenvolvimento > Módulos`

Foi corrigida a inconsistência que desabilitava o módulo no perfil de acesso do usuário, sempre que sua descrição era alterada.

## **BIP-850  Ordenação das colunas do Crud não está sendo criada no script de exportação de fonte de dados.**
`Caminho: Administração > Desenvolvimento > Fonte de Dados > Criar ou Escolher uma Fonte de Dados do Tipo Crud > Botão de Geração de Script.`

A rotina de gravação de fonte de dados do tipo crud foi revisada e passa a gravar corretamente a ordem das colunas, conforme parametrizada pelo usuário. Anteriormente, a ordem não era salva e quando era gerado um script com a fonte de dados, os campos ficavam desordenados.

![Docusaurus logo](/img/bip-850.jpg)

## **BIP-897  Restringir inclusão de postagens somente para usuários com permissão.**

A opção de adicionar novidades nas páginas iniciais dos sistemas, só poderá ser acessada por pessoas cujo perfil é administrador do sistema ou por pessoas com perfil que possua permissão de inclusão no módulo inicial. Já as opções de alteração e exclusão, passam a ser permitidas apenas para administradores e donos das postagens.

![Docusaurus logo](/img/bip-897.jpg)

## **BIP-956  O parâmetro de conteúdo do tipo HTML está sendo limitado a 4000 caracteres.**

As rotinas de parâmetros foram revisadas e as variáveis passam a ter o tipo dinâmico, dessa forma, é possível utilizar conteúdos que tenham mais de 4000 caracteres.

## **BIP-976  Os EndPoints de inclusão, alteração e exclusão das fontes de dados, não estão funcionando com mais de um registro por vez.**
`Caminho: Administração > Desenvolvimento > Fontes de Dados`

Os endpoints incluirDadosFonteDados, alterarDadosFonteDados e excluirDadosFonteDados não estavam sendo executados quando são acionados para efetuar o processamento de mais de um item de uma só vez, está função foi revisada para que seja possível incluir, alterar e excluir fontes de dados.

## **BIP-978  Ajustar atualização dos parâmetros do cadastro de conteúdos.**
`Caminho: Administração > Desenvolvimento > Conteúdos`

Ao salvar os parâmetros do cadastro de conteúdos, os mesmos são salvos internamente.
Porém, ao editar informando um novo tipo de parâmetro, os parâmetros antigos continuavam registrados internamente. Foi ajustado para que não seja mantido registros antigos.





