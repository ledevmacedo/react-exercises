# Exercise 12 — Tabs component

## Objective

Create a tabs container that switches between "Departures" and "Arrivals" using `useState`.

## Checklist

1. Create the `Tabs.tsx` file inside `src/components`.
2. Declare the function using `Pascal Case`.
3. Create the `TabsProps` interface (object props) with `children` or pass the lists via props (your choice).
4. Use `useState<"departures" | "arrivals">` to control the active tab.
5. Render two tabs ("Departures" and "Arrivals") reusing the component from ex. 11.
6. Render the content conditionally according to the active tab (ternary).

## Expected result

A `Tabs` component that switches content between departures and arrivals.

## Deliverables

- Project configured according to the instructions.
- `RESULT.md` filled in with your own words.
- Commit and push.

## Tips

- Note in `RESULT.md` any errors found and how you solved them.