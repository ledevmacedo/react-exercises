# Exercise 09 — TripRow component

## Objective

Create a trip row, reusing the button component from exercise 05.

## Checklist

1. Create the `TripRow.tsx` file inside `src/components`.
2. Declare the function using `Pascal Case`.
3. Create the `TripRowProps` interface (object props):
   - `trip: Trip`
   - `selected: boolean`
   - `onSelect: (id: string) => void`
4. Render origin → destination, departure/arrival dates.
5. Create a separate function (or inline) to calculate the estimated time from `departureDate` and `arrivalDate` (use `new Date(...)` and the difference in minutes/hours).
6. Render the price in €.
7. Render the indicators (wifi, outlets, almost full) with `solar-icons/react` icons using a ternary to show/hide.
8. Render the buy/sold-out button using the button component from ex. 05 (variant), purely aesthetic (non-functional): use a ternary to choose the variant.
9. Style with Tailwind, highlighting when selected (text + `aria-pressed`).

## Expected result

A reusable `TripRow` component displaying a trip with all its data.

## Deliverables

- Project configured according to the instructions.
- `RESULT.md` filled in with your own words.
- Commit and push.

## Tips

- The estimated time must be derived from the dates, not stored in state.
- Note in `RESULT.md` any errors found and how you solved them.