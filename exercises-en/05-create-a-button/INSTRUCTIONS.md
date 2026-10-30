# Exercise 05 — Create a button component

## Objective

Create a reusable button component that receives a `variant` prop responsible for changing its color.

## Important note

The previous exercises have already been completed, so the project structure (the `components` folder, `types.d.ts`, Tailwind) already exists and can be reused in this exercise.

## Checklist

1. Create the button component file following the `Camel Case` pattern inside the `components` folder.
2. Declare the function that creates the component using `Pascal Case`.
3. Create the component interface. The `variant` prop can be declared in `types.d.ts` (previous exercise) and reused here, accepting the values: `warning`, `danger`, `info`, `success`.
4. Style the button with Tailwind, changing the color according to the `variant` (in a simple way, without external libraries).
5. Import the component in `App.tsx` and test all 4 variants.

## Suggestions for implementing the variants

- Use conditionals (`if`/`else` or ternary) to choose the Tailwind class.
- Use an object that maps each `variant` to its class, for example `{ warning: "bg-yellow-500", ... }`.
- Use template strings to build the final class.

## Expected result

A reusable button component that changes color according to the chosen `variant`, rendered in the `App`.

## Deliverables

- Project configured according to the instructions.
- `RESULT.md` filled in with your own words.
- Commit and push.

## Tips

- Consult the didactic content on the Orbit platform.
- Access sites related to the official documentation.
- Consult the class slides.
- Access the instructor's `painel-partidas` repository on `github`.
- Note in `RESULT.md` any errors found and how you solved them.