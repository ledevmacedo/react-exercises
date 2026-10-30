# Exercício 12 — Componente Tabs

## Objetivo

Criar um container de tabs que alterna entre "Partidas" e "Chegadas" usando `useState`.

## Checklist

1. Criar o arquivo `Tabs.tsx` dentro de `src/components`.
2. Declarar a função com `Pascal Case`.
3. Criar a interface `TabsProps` (object props) com `children` ou passar as listas por props (a escolher).
4. Usar `useState<"partidas" | "chegadas">` para controlar a tab ativa.
5. Renderizar duas tabs ("Partidas" e "Chegadas") reutilizando o componente do ex. 11.
6. Renderizar o conteúdo condicionalmente conforme a tab ativa (ternário).

## Resultado esperado

Um componente `Tabs` que alterna o conteúdo entre partidas e chegadas.

## Entregáveis

- Projeto configurado conforme o enunciado.
- `RESULT.md` preenchido com suas próprias palavras.
- Commit e push.

## Dicas

- Anote no `RESULT.md` qualquer erro encontrado e como resolveu.