# Exercício 06 — Modelar os dados

## Objetivo

Modelar os tipos do domínio de viagens em `types.d.ts`, reutilizando o arquivo global criado no exercício 04.

## Checklist

1. Abrir `src/utils/types.d.ts`.
2. Criar o tipo `TripStatus` (union) com os valores: `"on-time"`, `"delayed"`, `"cancelled"`.
3. Criar a interface `Trip` com os campos:
   - `id: string`
   - `origin: string`
   - `destination: string`
   - `departureDate: string` (ISO)
   - `arrivalDate: string` (ISO)
   - `price: number`
   - `hasWifi: boolean`
   - `hasOutlets: boolean`
   - `almostFull: boolean`
   - `status: TripStatus`
4. `estimatedTime` não deve ser armazenado: será calculado a partir das datas (função separada opcional).

## Resultado esperado

Um `types.d.ts` com os tipos do domínio de viagens, reutilizáveis em todo o projeto.

## Entregáveis

- Projeto configurado conforme o enunciado.
- `RESULT.md` preenchido com suas próprias palavras.
- Commit e push.

## Dicas

- Consulte o conteúdo didático na plataforma Orbit.
- Anote no `RESULT.md` qualquer erro encontrado e como resolveu.