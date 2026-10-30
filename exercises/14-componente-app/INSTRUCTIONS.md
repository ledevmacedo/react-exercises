# Exercício 14 — Componente App (integração)

## Objetivo

Integrar todos os componentes em um painel de partidas funcional.

## Checklist

1. Guardar `activeTab` e `selectedTripId` com `useState`.
2. Filtrar viagens por tab (partidas do Porto vs chegadas ao Porto) a partir do `trips.json` (usar `.filter()`).
3. Calcular o tempo estimado de cada viagem (função separada, derivado, sem state extra).
4. Renderizar `PageTitle`, `Tabs`, `TripList` e um resumo da seleção (usar `find()` ou ternário).
5. Usar `TripFilter` (opcional) para filtrar por cidade.

## Resultado esperado

Um painel de partidas completo, funcional, com tabs, lista, filtros e resumo da seleção.

## Entregáveis

- Projeto configurado conforme o enunciado.
- `RESULT.md` preenchido com suas próprias palavras.
- Commit e push.

## Dicas

- Valores derivados não precisam de state separado.
- Anote no `RESULT.md` qualquer erro encontrado e como resolveu.