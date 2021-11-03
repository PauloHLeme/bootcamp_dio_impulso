# Testes TDD

O teste TDD tenta emular situações do dia a dia do uso do aplicativo. Para isso, utilizamos uma biblioteca de testes.

```JS
import { render, screen} from '@testing-library/react';
import { App } from './App';

test('renders the app', () => {
  render(<App />);

  const text = screen.getByText(/Hello/i);

  expect(text).toBeInTheDocument();
});
```

Neste caso, estamos simulando um teste bem básico de uma situação real.

Estamos pedindo para o código analisar se na tela (screen) existe o texto Hello. Isso simula o usuário vendo o que a tela deveria estar exibindo corretamente.

Agora, vamos pensar no que o nosso aplicativo deverá ter em sua tela inicial.

O usuário deverá ver na tela pelo menos três elementos quando a página estiver carregada:

* Uma imagem do Naruto

* Um texto com a frase

* Um botão para gerar outra frase

Então vamos reescrever o teste para que ele busque esses três elementos na tela.

```JS
import { render, screen} from '@testing-library/react';
import { App } from './App';

test('renders the app with a button, a quote and a button', () => {
  render(<App />);

  const buttonEl = screen.getByRole('button');
  const imageEl = screen.getByRole('img');
  const textEl = screen.getByRole('p');

  expect(buttonEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();
});
```

Pronto! Agora, se rodarmos o teste, ele deve falhar, pois não temos nenhum dos elementos na tela, certo?

Perfeito, isso é exatamente o que esperamos. Agora que sabemos o que o teste pede, o que o usuário deve ver, podemos desenvolver o aplicativo focado em solucionarmos esse teste! Isso é um TDD, Test Driven Development.

