# Exercise 11 — Tab component

## Objective

Create a simple tab component using conditional rendering and `children`.

## Checklist

1. Create the `Tab.tsx` file inside `src/components`.
2. Declare the function using `Pascal Case`.
3. Create the `TabProps` interface (individual props):
   - `label: string`
   - `active: boolean`
   - `onClick: () => void`
   - `children: React.ReactNode`
4. Render the tab button and, when active, style it differently (ternary).
5. Render `children` when the tab is active (use `&&` or a ternary).

## Expected result

A reusable `Tab` component that displays its content conditionally.

## Deliverables

- Project configured according to the instructions.
- `RESULT.md` filled in with your own words.
- Commit and push.

## Tips

- Keep it simple: use a ternary or `&&`.
- Note in `RESULT.md` any errors found and how you solved them.