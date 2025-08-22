
# Calculadora de Orçamento

Aplicação web simples para gerenciar **renda mensal** e regristrar **despesas**, permitindo acompanhar o **saldo restante**, visualizar gráficos de gastos e gerar relatórios em formato PDF do orçamento pessoal.

## Pré-requisitos

Antes de rodar a aplicação, verifique se você possui:

### Sistema
- Navegador moderno (Google Chrome, Firefox, Edge ou Safari)
- Sistema operacional compatível com o navegador
- Conexão com a internet (necessária apenas para bibliotecas externas, se houver)

### Software
- [Node.js](https://nodejs.org/) (para rodar testes automatizados)
- NPM (gerenciador de pacotes do Node.js)
- [VS Code](https://code.visualstudio.com/) ou outro editor de código
- Extensão **Live Server** para VS Code (para rodar a aplicação localmente)
- **Cypress** (opcional, apenas se for executar testes automatizados)

### Conhecimentos (recomendados)
- HTML, CSS e JavaScript
- Testes manuais e automatizados (opcional, para Cypress)

---

## Instalação

1. Clone o repositório:

git clone <https://github.com/Mjss94/PROJETO-PORTFOLIO.git>

2. Acesse a pasta do projeto:

cd Calculadora-despesas

3. Instale as dependências (opcional, apenas se usar Cypress):

npm install

## **Execução da aplicação**

1. Abra o VS Code na pasta do projeto.

2. Clique com o botão direito no index.html e selecione "Open with Live Server".

3. A aplicação será aberta no navegador em http://127.0.0.1:5500/

## **Testes (opcional)**

Para executar os testes automatizados com Cypress:

npx cypress open

ou para rodar diretamente no terminal:

npx cypress run --spec "cypress/e2e/calculadora.cy.js"

## **Funcionalidades**

1. Adicionar renda mensal

2. Adicionar despesas e categorias

3. Calcular saldo restante

4. Gerar relatório de despesas

## **Estrutura do Pojeto**


Calculadora-despesas/
├── README.md                  # Documentação do projeto
├── index.html                 # Página principal
├── style.css                  # Estilo da aplicação
├── js/
│   └── script.js              # Scripts JavaScript da aplicação
├── assets/
├── cypress/                   # Testes end-to-end
│   ├── downloads/
│   ├── e2e/
│   │   └── calculadora.cy.js
│   ├── fixtures/
│   │   └── example.json
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── node_modules/              # Dependências do Node
├── package.json
├── package-lock.json
├── cypress.config.js
└── .gitignore



5. Edite ou exclua despesas conforme necessário.  
6. Clique em **Baixar Relatório em PDF** para gerar um resumo completo do orçamento.
