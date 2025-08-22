 # Plano de Testes - Calculadora de Orçamento

## 1. Objetivo dos Testes
O objetivo dos testes é garantir que a **Calculadora de Orçamento** funcione corretamente, fornecendo cálculos precisos de renda, despesas e saldo restante. Também inclui a verificação de funcionalidades como adição, edição e exclusão de despesas, geração de relatórios em PDF e exibição correta dos gráficos.

---

## 2. Escopo dos Testes

O escopo do teste inclui:

- Funcionalidades de entrada e saída de dados:
- Campo de entrada de renda mensal.
- Adição, edição e exclusão de despesas.
- Cálculos e exibições:
- Total de despesas.
- Saldo restante.
- Relatórios:
- Geração de PDF contendo renda, despesas e saldo.
- Visualização gráfica:
 - Gráfico de despesas atualizado dinamicamente.
- Interface e usabilidade:
 - Botões, campos de texto, layout responsivo.
- Validação de dados:
 - Valores inválidos (negativos, nulos ou não numéricos).

---

## 3. Requisitos a Serem Testados

| Requisito | Descrição | Tipo de Teste |
|------------|-----------|---------------|
| R1 | Inserir renda mensal e atualizar saldo | Funcional |
| R2 | Adicionar despesas com nome e valor | Funcional |
| R3 | Editar despesas existentes | Funcional |
| R4 | Excluir despesas | Funcional |
| R5 | Calcular total de despesas | Funcional |
| R6 | Calcular saldo restante (renda – despesas) | Funcional |
| R7 | Gerar relatório PDF com renda, despesas e saldo | Funcional |
| R8 | Exibir gráfico de despesas atualizado | Funcional / UI |
| R9 | Validar valores de entrada (não aceitar negativos ou textos no valor) | Validação / Negativo |
| R10 | Garantir responsividade da interface e layout correto | UI / Usabilidade |

---

## 4. Estratégia de Teste

A estratégia de teste será **mista**, combinando testes manuais e automatizados:

### 4.1. Testes Manuais
- Testes exploratórios da interface.
- Verificação visual do layout, cores, botões e responsividade.
- Validação de inputs inválidos.
- Teste da geração de PDF.

### 4.2. Testes Automatizados
- Uso de **Cypress** para:
  - Preenchimento de renda.
  - Adição, edição e exclusão de despesas.
  - Verificação de cálculos de total de despesas e saldo.
  - Teste do gráfico dinâmico.
  - Download do PDF e validação do conteúdo.

### 4.3. Abordagem
- **Caixa-preta:** Para validar funcionalidades sem considerar implementação.
- **Testes de regressão:** Garantir que alterações no código não quebrem funcionalidades existentes.
- **Testes de limites e casos negativos:** Inserção de valores inválidos ou vazios.

### 4.4. Critérios de Aceitação
- Todos os cálculos devem estar corretos.
- PDFs gerados devem refletir dados atuais.
- Gráficos devem ser atualizados após qualquer alteração nas despesas.
- Interface deve ser clara, intuitiva e responsiva.
- Sistema não deve aceitar entradas inválidas.