# 🛠️ Guia para o Backend - Projeto React (para Fernanda)

## Visão Geral

Olá, Fernanda! 👋  
Esse projeto utiliza **React** no frontend. Diferente dos sites tradicionais que funcionam com páginas HTML estáticas (como `index.html`, `produtos.html`
etc), o React trabalha com **componentes** e **rotas internas**, criando uma **SPA (Single Page Application)**.

Isso significa que carregamos uma única página HTML e, conforme o usuário navega, o React muda o conteúdo exibido **sem recarregar toda a página**.
As rotas são controladas com o **React Router**, e não diretamente pelo navegador como nos sites tradicionais.

---

## Objetivo

O foco principal aqui é construir uma **página de produtos** (`/produtos`) que buscará os dados via **API** no backend.

O React cuidará da interface visual, enquanto o backend (em Python) será responsável por fornecer os **dados dos produtos em formato JSON**.

---

## Estrutura do Frontend (React)

- Usamos **React Router** para navegação entre rotas internas, como `/`, `/produtos`, etc.
- O conteúdo muda dinamicamente, mas continua sendo uma única página HTML.
- Os dados dos produtos serão buscados via **requisição HTTP (GET)** feita ao backend.

Exemplo da requisição feita no React:

```js
useEffect(() => {
  fetch("http://localhost:3001/api/produtos")
    .then((res) => res.json())
    .then((data) => setProdutos(data));
}, []);
```

---

## Exemplo de Backend em Node.js (Express)

Abaixo um exemplo de como o backend poderia ser feito com **Node.js**, apenas como referência já que por escolha usariamos o python com flask:

```js
// backend.js

const express = require('express');
const app = express();
const PORT = 3001;

const produtos = [
  { id: 1, nome: 'Bicicleta Nimbus', preco: 50 },
  { id: 2, nome: 'Bicicleta Ignite', preco: 30 }
];

app.get('/api/produtos', (req, res) => {
  res.json(produtos);
});

app.listen(PORT, () => {
  console.log(\`Servidor rodando na porta \${PORT}\`);
});
```

Esse código cria um servidor na porta `3001` e responde com um array de produtos quando alguém acessa `/api/produtos`.

---

## Exemplo de Backend em Python (Flask)

Agora sim, aqui está o exemplo real que será usado no projeto, utilizando **Python com Flask**:

```python
# app.py

from flask import Flask, jsonify

app = Flask(__name__)

produtos = [
    { 'id': 1, 'nome': 'Bicicleta Nimbus', 'preco': 50 },
    { 'id': 2, 'nome': 'Bicicleta Ignite', 'preco': 30 }
]

@app.route('/api/produtos')
def listar_produtos():
    return jsonify(produtos)

if __name__ == '__main__':
    app.run(port=3001)
```

Este servidor em Flask escuta na porta `3001` e responde com os dados dos produtos na rota `/api/produtos`.

---

---

## ⚠️ AVISO IMPORTANTE SOBRE A PORTA DO SERVIDOR

Por padrão, estamos usando a porta **3001** só por conveniência, mas evite usar outra
porta.
Usar a **3001** evita conflito com o frontend, que normalmente roda na **porta 3000**.
Caso queira mudar para outra porta (ex: 5000), **lembre-se de atualizar também no React**:

- No React:

  ```js
  fetch("http://localhost:5000/api/produtos");
  ```

- No Python:
  ```flask
  app.run(port=5000)
  ```

Se as portas estiverem diferentes, o React não conseguirá se comunicar com o backend corretamente.

## Checklist para Integração

- [ ] Criar o endpoint `/api/produtos` no backend (já feito no exemplo acima).
- [ ] Garantir que o servidor está rodando na **porta 3001**.
- [ ] Habilitar CORS se necessário (React pode bloquear chamadas a outro domínio).
- [ ] Confirmar que a resposta da API está no formato JSON.
- [ ] Testar a requisição no navegador ou no frontend.

---

## Considerações Finais

A comunicação entre o frontend e o backend será feita via HTTP, com chamadas que retornam JSON. O React vai interpretar esses dados e montar a
página de produtos com base nisso.

Se surgir qualquer dúvida ou se quiser mudar algo na estrutura, estamos juntos! 😄  
**Os arquivos do frontend estão organizados em componentes para facilitar ajustes e manutenção.**  
Só chamar!

OBS: Não esqueça de fazer o deploy nem instalar as dependências. Já estão listadas no arquivo package.json e o vite já está configurado para o meu repositório do git.

Antes de tudo instale o node.js após isso só seguir os comandos abaixo.

npm install ou yarn install, quando terminar o projeot use o npm run build e por fim npm run deploy.
