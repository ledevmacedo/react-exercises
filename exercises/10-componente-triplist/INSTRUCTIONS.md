# Exercício 10 — Componente TripList

## Objetivo

Criar a lista de viagens com estado vazio, reutilizando `TripRow`.

## Checklist

1. Criar o arquivo `TripList.tsx` dentro de `src/components`.
2. Declarar a função com `Pascal Case`.
3. Criar a interface `TripListProps` (object props):
   - `trips: Trip[]`
   - `selectedTripId: string | null`
   - `onSelect: (id: string) => void`
4. Usar `if (trips.length === 0)` (ou ternário) para renderizar mensagem de lista vazia.
5. Caso contrário, usar `.map()` para mapear as viagens para `TripRow`, usando `key={trip.id}`.
6. Reutilizar o componente do exercício 09.

## Resultado esperado

Um componente `TripList` que exibe viagens ou mensagem de vazio.

## Entregáveis

- Projeto configurado conforme o enunciado.
- `RESULT.md` preenchido com suas próprias palavras.
- Commit e push.

## Dicas

- Não use o índice como `key`.
- Anote no `RESULT.md` qualquer erro encontrado e como resolveu.