---
sidebar_position: 1
---
# Versão 6.2.5

# Melhorias

## **BIP-71  Ajustes na tela de cadastro de tipo de cliente.**
`Caminho: Administração > Cadastros > Campanhas > Fluxo > Config. Tipo Cliente`

A tela de Configuração do Tipo de Cliente foi alterada e passa a permitir a digitação de uma descrição para o grupo de tipo de cliente.
 
![Docusaurus logo](/img/bip-71.jpg)

## **BIP-75  Criar editor de HTML nos parâmetros do sistema para facilitar ao usuário a configuração.**
`Caminho: Administração > Cadastros > Campanhas > Fluxo > Config. Tipo Cliente`

Foi disponibilizado um editor de HTML, que poderá ser utilizado em todos os lugares do sistema onde o tipo de fonte de dados for HTML.

![Docusaurus logo](/img/bip-75.jpg)

## **BIP-78  Criar componente de CRUD no conceito de configuração.**

Foi criado um componente do tipo CRUD, que se conectará a uma fonte de dados do tipo CRUD e gerenciará automaticamente as operações de cadastro (leitura, inclusão, alteração e exclusão) de uma tabela (fonte de dados). Além disso, passa a ser possível configurar o grid com diversas opções, tais como: tipo de edição (na célula, na linha ou em popup), opções de ordenação, resize de colunas, etc.

## **BIP-210  Implementar rotina de dependência entre parâmetros utilizando o campo CONDICAO das tabelas de relação.**

Foi implementada uma rotina genérica de dependência entre parâmetros com a utilização do campo CONDICAO das tabelas de relação.

## **BIP-256  Ajustes nas rotinas de criação de novo módulo.**

As rotinas de geração de novos módulos foram ajustadas para gerarem o range de código do sistema e inserir o módulo quando o mesmo é executado.

## **BIP-366  Aplicar validação de condição de dependência das tabelas de relação dos parâmetros, utilizando campo interno como condição.**

Foi implementada a possibilidade de condicionar um parâmetro a um campo predefinido como @PARAMETROINTERNO. Por exemplo.: NOMETABELALOOKUP = @PARAMETROINTERNO, sendo este segundo um componente de seleção da própria tela de cadastro. Anteriormente, o sistema permitia apenas validar a condição de dependência através de parâmetros exibidos no grid.

## **BIP-412  Remover requisição ajax da Master Page que realiza a chamada da página de meus dados.**

A Master Page do componente de atualização da tela Meus Dados foi revisada e alguns códigos que não estavam mais sendo utilizados foram removidos.

## **BIP-416  Revisar componente de seleção de imagem.**

O componente para seleção de imagens, que é utilizado em diversas telas do sistema, foi ajustado para não gerar mais divergência de ao se utilizar a função de ajuste de tamanho.

## **BIP-458  Criar cadastro de ciclos de culturas.**
`Caminho: Administração > Cadastros > Culturas > Ciclos`

Foi desenvolvido uma nova tela para cadastro de ciclos da cultura. As informações cadastradas nessa tela serão utilizadas posteriormente para dividir o mercado pelos níveis tecnológicos + ciclos da cultura selecionada.

![Docusaurus logo](/img/bip-458.jpg)

## **BIP-459  Criar cadastro de ciclos de culturas.**
`Caminho: Administração > Cadastros > Culturas > Ciclos`

Foi desenvolvido uma nova tela para cadastro de ciclos da cultura. As informações cadastradas nessa tela serão utilizadas posteriormente para dividir o mercado pelos níveis tecnológicos + ciclos da cultura selecionada.

![Docusaurus logo](/img/bip-459.jpg)

## **BIP-462  Mudar conceito do campo de nível tecnológico do cadastro de culturas.**
`Caminho: Administração > Cadastros > Culturas > Culturas`

O cadastro de culturas passa a ter 2 campos para o fluxo de nível tecnológico, sendo eles, “Níveis Tecnológicos” e “Nível Tecnológico”. Quando a cultura pai selecionada tiver algum nível tecnológico relacionado, o sistema deverá exibir apenas o campo "Nível Tecnológico", listando os níveis tecnológicos relacionados ao pai. Já quando a cultura pai selecionada não tiver nenhum nível tecnológico relacionado, o sistema deverá exibir apenas o campo "Níveis Tecnológicos".

## **BIP-463  Permitir dividir o mercado de sementes por nível tecnológico e ciclo de produto.**
`Caminho: Planejamento > Mercado > Sementes > Mercado`

O planejamento de mercado passa a ter uma nova etapa, onde será possível dividir o mercado de sementes pelos níveis tecnológicos + ciclos da cultura selecionada. Essa etapa será exibida após a etapa de indicadores (taxa de semeadura, potencial, etc). Por ano, o usuário deverá digitar um % de representatividade e um preço (us%/sc) para cada nível tecnológico + ciclo.

![Docusaurus logo](/img/bip-463.jpg)

## **BIP-465  Remover validação de obrigatoriedade dos campos "Tipo", "Grupo" e "Lista de Preço".**

Foi ajustado internamente trigger para que o sistema não tratasse mais a obrigatoriedade dos campos código do grupo, código do grupo cliente VU e código lista preço.

## **BIP-554  Incluir campo de nível tecnológico e ciclo da cultura no cadastro de produtos.**
'Caminho: Administração > Cadastros > Produtos > Produtos'

Ao cadastrar um produto que seja linha de negócios “sementes”, o sistema exibe os campos “nível tecnológico” e “ciclo cultura”.

![Docusaurus logo](/img/bip-554.jpg)

## **BIP-617  Registrar log de erros não tratados na aplicação e redirecionar para página padrão.**

O sistema passa a registrar logs de erros não tratados na tabela CNT_LOGERRO, além de direcionar o usuário para uma página de erros padrão. Esses logs ajudarão a equipe de desenvolvimento a encontrar o problema mais rapidamente.

## **BIP-620  Ajustar cadastro de fonte de dados utilizando parametrização.**
`Caminho: Administração > Desenvolvimento > Fonte de Dados`

Ao inserir uma nova fonte de dados preenchendo algum parâmetro na aba Parâmetros, o sistema salva a fonte de dados, porém estava exibindo alguns conflitos, foi ajustado para que seja salvo corretamente.

# Corerções

## **BIP-422  Corrigido BUG ao salvar as configurações do sistema.**
`Caminho: Administração > Administração > Configurações`

Foi corrigido a inconsistência que não permitia salvar as configurações dos schedules.

## **BIP-433  Os parâmetros não estão sendo carregados no cadastro de painéis da página de configurações do módulo de Dashboards.**
`Caminho: Dashboards > Configurações > Botão Novo / Editar > Parâmetros`

Foi corrigida a inconsistência que causava o não carregamento dos parâmetros dos Dashboards.

![Docusaurus logo](/img/bip-433.jpg)

## **BIP-437  Duplicação de conteúdo em frame ao clicar duas ou mais vezes na aba de pré-visualização de conteúdos.**
`Caminho: Dashboards > Configurações > Botão Novo / Editar > Parâmetros`

Nos cadastros onde há a opção de exibir a pré-visualização de conteúdos em frame (conteúdo, fonte de dados e postagem), ao clicar duas ou mais vezes na aba, o conteúdo estava repetido várias vezes. Foi devidamente ajustado para que se comporte de maneira natural.

## **BIP-460  Ajustar cadastro de postagem no módulo de apresentação do sistema.**

As telas de apresentação foram revisadas para funcionarem corretamente quando é selecionada a opção de Estrutura de Venda Específica e Estrutura Técnica Específica no campo Público Alvo, além disso, foram realizadas melhorias no processo de carregamento das páginas.

## **BIP-469  Erro ao salvar cadastro de conteúdos utilizando parâmetro do tipo senha.**
`Caminho: Administração > Desenvolvimento > Conteúdos`

O Tipo de Conteúdo Vídeo do Vimeo passa a ter o campo “Senha para liberar visualização do vídeo”, onde opcionalmente, o usuário poderá entrar com a senha de autenticação para acesso ao vídeo no módulo de treinamento.

![Docusaurus logo](/img/bip-469.jpg)

## **BIP-489  Erro ao acessar o sistema com a opção "Alterar senha no próximo login" habilitada.**

Corrigida inconsistência que não permitia a alteração de senha de usuário quando era utiliza a opção “Alterar senha no próximo Login”.

## **BIP-496  Correção na geração de chave genérica da API.**

Correção na geração de chave genérica da API, em alguns cadastros estava "pulando" um código ao gerar nova chave.

## **BIP-498  Erro ao efetuar login usando um provedor externo.**

Corrigida inconsistência que não permitia acessar o sistema por login externo do Microsoft Azure.

# Vulnerabilidade

## **BIP-163  Vulnerabilidades de nível Moderado - Falsificação de Solicitação CrossSite.**

Cross-site request forgery (XSRF) e Cross Site Request Forgery (CSRF) 
Ajustes na falsificação de solicitações entre sites, também conhecida como ataque de um clique ou equitação de sessão, é um tipo de exploração maliciosa de um site onde comandos não autorizados são enviados por um usuário em quem o aplicativo da web confia.
O Método implementado valida as sessões com os próprios recursos do Aspnet, gerando hash's token onde será validado na página master, se aplicando a todas as dependências herdadas.

## **BIP-166  Vulnerabilidade de nível leve - Cabeçalhos de seguração WEB-CONFIG.**

Criado cabeçalhos de segurança no web-config para resolver problemas de segurança.

## **BIP-450  Vulnerabilidade de nível leve - Cabeçalhos de segurança dentro da API - Startup.CS.**

Foi necessário implementar cabeçalhos de segurança para tornar a navegação mais segura e contra ataques de vulnerabilidade.
Essa vulnerabilidade foi relatada pelo AppScan 
X-Xss-Protection
Strict-Transport-Security
X-Content-Type-Options

## **BIP-466  Requisição para geração kendoDropDownList na página de programa de incentivo.**
`Caminho: Administração > Cadastros > Clientes > Programas de Incentivo`

Ajuste em uma chamada ajax script. Em uma versão futura onde teremos validação Cross Site, foi ajustado para não ocorrer problemas de requisição de dados.

