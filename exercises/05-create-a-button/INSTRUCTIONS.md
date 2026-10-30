# Exercício 05 — Criar um componente de botão

## Objetivo

Criar um componente de botão reutilizável que recebe uma prop `variant` responsável por alterar sua cor.

## Observação importante

Os exercícios anteriores já foram concluídos, portanto a estrutura do projeto (pasta `components`, `types.d.ts`, Tailwind) já existe e pode ser reutilizada neste exercício.

## Checklist

1. Criar o arquivo do componente de botão seguindo o padrão `Camel Case` dentro da pasta `components`.
2. Declarar a função que cria o componente com `Pascal Case`.
3. Criar a interface do componente. A prop `variant` pode ser declarada no `types.d.ts` (exercício anterior) e reutilizada aqui, aceitando os valores: `warning`, `danger`, `info`, `success`.
4. Estilizar o botão com Tailwind, alterando a cor conforme a `variant` (de forma simples, sem bibliotecas externas).
5. Importar o componente na `App.tsx` e testar as 4 variantes.

## Sugestões para implementar as variants

- Usar condicionais (`if`/`else` ou ternário) para escolher a classe do Tailwind.
- Usar um objeto que mapeia cada `variant` para sua classe, por exemplo `{ warning: "bg-yellow-500", ... }`.
- Usar template strings para montar a classe final.

## Resultado esperado

Um componente de botão reutilizável que muda de cor conforme a `variant` escolhida, renderizado na `App`.

## Entregáveis

- Projeto configurado conforme o enunciado.
- `RESULT.md` preenchido com suas próprias palavras.
- Commit e push.

## Dicas

- Consulte o conteúdo didático na plataforma Orbit.
- Acesse sites relativos à documentação oficial.
- Consulte os slides das aulas.
- Acesse o repositório de `painel-partidas` do formador no `github`.
- Anote no `RESULT.md` qualquer erro encontrado e como resolveu.