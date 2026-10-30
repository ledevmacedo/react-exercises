# Exercício 09 — Componente TripRow

## Objetivo

Criar a linha de uma viagem, reutilizando o componente de botão do exercício 05.

## Checklist

1. Criar o arquivo `TripRow.tsx` dentro de `src/components`.
2. Declarar a função com `Pascal Case`.
3. Criar a interface `TripRowProps` (object props):
   - `trip: Trip`
   - `selected: boolean`
   - `onSelect: (id: string) => void`
4. Renderizar origem → destino, datas de partida/chegada.
5. Criar uma função separada (ou inline) para calcular o tempo estimado a partir de `departureDate` e `arrivalDate` (use `new Date(...)` e diferença em minutos/horas).
6. Renderizar preço em €.
7. Renderizar indicadores (wifi, tomadas, quase cheio) com ícones do `solar-icons/react` usando ternário para mostrar/ocultar.
8. Renderizar botão comprar/esgotado usando o componente de botão do ex. 05 (variant), apenas estético (não funcional): use ternário para escolher a variant.
9. Estilizar com Tailwind, destacando quando selecionado (texto + `aria-pressed`).

## Resultado esperado

Um componente `TripRow` reutilizável exibindo uma viagem com todos os seus dados.

## Entregáveis

- Projeto configurado conforme o enunciado.
- `RESULT.md` preenchido com suas próprias palavras.
- Commit e push.

## Dicas

- O tempo estimado deve ser derivado das datas, não armazenado em state.
- Anote no `RESULT.md` qualquer erro encontrado e como resolveu.