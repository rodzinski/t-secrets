Página 1 — Home (index.html)

A Home vende a marca.

Hero

↓

Coleção em destaque

↓

Diferenciais

↓

CTA

↓

Footer

Ela fica mais limpa, sem excesso de produtos.

Página 2 — Coleção (colecao.html)

Essa página mostra todos os produtos.

Visual:

Hero pequeno

"Nossa Coleção"

↓

Filtro (opcional)

Todos
Lingeries
Bodies
Conjuntos

↓

Grid

Produto
Produto
Produto
Produto
Produto
Produto

Aqui podemos colocar todos os itens da loja.

Página 3 — Produto (produto.html)

Essa seria a página de detalhes.

Exemplo:

Imagem grande

Nome

Preço

Descrição

Tamanhos

Botão WhatsApp

Produtos relacionados

Mesmo sendo um site estático, fica com aparência profissional.

Página 4 — Contato (contato.html)

Visual elegante.

Entre em contato

WhatsApp

Instagram

E-mail

Mapa (se existir)

Formulário

TSecrets/

index.html
colecao.html
produto.html
contato.html

css/
│── style.css
│── variaveis.css
│── reset.css
│── header.css
│── hero.css
│── cards.css
│── sections.css
│── footer.css
└── responsive.css

images/
│── hero-bg.png
│── logo.png
│── produto1.png
│── produto2.png
│── produto3.png

js/
│── script.js

## Checklist antes da publicação

- Substituir as imagens de demonstração em `images/` pelos arquivos finais e manter textos alternativos descritivos.
- Atualizar títulos, categorias, descrições, preços e tamanhos em `colecao.html` e `produto.html`.
- Trocar os links placeholder de WhatsApp e Instagram em `contato.html` pelos canais oficiais.
- Confirmar e, se necessário, atualizar o horário de atendimento em `contato.html`.
- Integrar o formulário marcado com `data-contact-form` ao serviço de envio escolhido; ele hoje apenas valida os campos no navegador.
- Atualizar os metadados de título e descrição quando os nomes e produtos finais estiverem definidos.

## Controle de disponibilidade

### Produto disponivel

Use `data-status="available"` no card do produto:

```html
<article class="product-card" data-category="conjuntos" data-status="available">
```

### Produto esgotado

Troque o valor para `sold-out`:

```html
<article class="product-card" data-category="conjuntos" data-status="sold-out">
```

Quando o produto estiver com `data-status="sold-out"`, o JavaScript aplica a classe visual de indisponivel, muda o selo para `Esgotado` e desativa o link do card.

### Tamanho disponivel

Mantenha o botao normalmente:

```html
<button type="button" class="size-option" data-size="M" aria-pressed="false">M</button>
```

### Tamanho esgotado

Adicione `disabled` ao botao do tamanho:

```html
<button type="button" class="size-option" data-size="GG" aria-pressed="false" disabled>GG</button>
```

O tamanho com `disabled` fica apagado/riscado no CSS e nao pode ser selecionado pelo JavaScript.
