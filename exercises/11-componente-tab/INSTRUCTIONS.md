# Exercício 11 — Componente Tab

## Objetivo

Criar um componente de tab simples usando renderização condicional e `children`.

## Checklist

1. Criar o arquivo `Tab.tsx` dentro de `src/components`.
2. Declarar a função com `Pascal Case`.
3. Criar a interface `TabProps` (individual props):
   - `label: string`
   - `active: boolean`
   - `onClick: () => void`
   - `children: React.ReactNode`
4. Renderizar o botão da tab e, quando ativa, estilizar de forma diferente (ternário).
5. Renderizar `children` quando a tab estiver ativa (usar `&&` ou ternário).

## Resultado esperado

Um componente `Tab` reutilizável que exibe seu conteúdo condicionalmente.

## Entregáveis

- Projeto configurado conforme o enunciado.
- `RESULT.md` preenchido com suas próprias palavras.
- Commit e push.

## Dicas

- Mantenha simples: use ternário ou `&&`.
- Anote no `RESULT.md` qualquer erro encontrado e como resolveu.