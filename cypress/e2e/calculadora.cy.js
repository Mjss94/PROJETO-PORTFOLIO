describe('Teste da Calculadora de Orçamento', () => {

  const setRenda = (valor) => {
    cy.get('#income').clear().type(valor, { delay: 200 }).trigger('change');
    cy.wait(500);
  };

  const addDespesa = (nome, valor) => {
    cy.get('#expenseName').type(nome, { delay: 200 });
    cy.get('#expenseValue').type(valor.toString(), { delay: 200 });
    cy.get('#addExpense').click();
    cy.wait(500);
  };

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Calculadora-despesas/index.html');
    cy.wait(500);
  });

  it('Adicione a renda mensal', () => {
    setRenda(5000);
    cy.get('#remainingBalance').should('contain', 'R$ 5000.00');
  });

  it('Adicionar varias despesas', () => {
    setRenda(5000);

    const despesas = [
      { nome: 'Aluguel', valor: 1500 },
      { nome: 'Supermercado', valor: 800 },
      { nome: 'Gasolina', valor: 400 },
      { nome: 'Internet', valor: 200 },
      { nome: 'Cartão de Crédito', valor: 1000 },
    ];

    despesas.forEach(desp => addDespesa(desp.nome, desp.valor));

    cy.get('#remainingBalance').should('contain', 'R$ 1100.00');
    cy.get('#expenseList li').should('have.length', despesas.length);
  });

  it('Editar despesas e excluir a Gasolina', () => {
    setRenda(5000);

    const despesas = [
      { nome: 'Aluguel', valor: 1500 },
      { nome: 'Supermercado', valor: 800 },
      { nome: 'Gasolina', valor: 400 },
      { nome: 'Internet', valor: 200 },
      { nome: 'Cartão de Crédito', valor: 1000 },
    ];

    despesas.forEach(desp => addDespesa(desp.nome, desp.valor));

    cy.window().then(win => {
      const promptStub = cy.stub(win, 'prompt');
      promptStub.onCall(0).returns('Feira');    // Nome Supermercado
      promptStub.onCall(1).returns('800');      // Valor Supermercado
      promptStub.onCall(2).returns('Gasolina'); // Nome Gasolina
      promptStub.onCall(3).returns('250');      // Valor Gasolina
    });

    cy.contains('#expenseList li', 'Supermercado').find('.edit').click();
    cy.wait(500);
    cy.get('#expenseList li').should('contain', 'Feira');

    cy.contains('#expenseList li', 'Gasolina').find('.edit').click();
    cy.wait(500);
    cy.contains('#expenseList li', 'Gasolina').should('contain', '250.00');

    cy.contains('#expenseList li', 'Gasolina').find('button').last().click();
    cy.wait(500);

    cy.get('#remainingBalance').should('contain', 'R$ 1500.00');
  });

  it('Excluir todas as despesas restantes', () => {
    setRenda(5000);

    const despesas = [
      { nome: 'Aluguel', valor: 1500 },
      { nome: 'Feira', valor: 800 },
      { nome: 'Internet', valor: 200 },
      { nome: 'Cartão de Crédito', valor: 1000 },
    ];

    despesas.forEach(desp => addDespesa(desp.nome, desp.valor));

    cy.get('#expenseList li').each(() => {
      cy.get('#expenseList li').first().find('button').last().click();
      cy.wait(500);
    });

    cy.get('#expenseList li').should('have.length', 0);
    cy.get('#remainingBalance').should('contain', 'R$ 5000.00');
  });

  it('Manter o saldo total da renda quando não houver despesas', () => {
    setRenda(4000);
    cy.get('#expenseList li').should('have.length', 0);
    cy.get('#remainingBalance').should('contain', 'R$ 4000.00');
  });

});
