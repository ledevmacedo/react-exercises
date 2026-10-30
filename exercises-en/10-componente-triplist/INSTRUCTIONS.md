# Exercise 10 — TripList component

## Objective

Create the trip list with an empty state, reusing `TripRow`.

## Checklist

1. Create the `TripList.tsx` file inside `src/components`.
2. Declare the function using `Pascal Case`.
3. Create the `TripListProps` interface (object props):
   - `trips: Trip[]`
   - `selectedTripId: string | null`
   - `onSelect: (id: string) => void`
4. Use `if (trips.length === 0)` (or a ternary) to render the empty-list message.
5. Otherwise, use `.map()` to map the trips to `TripRow`, using `key={trip.id}`.
6. Reuse the component from exercise 09.

## Expected result

A `TripList` component that displays trips or an empty message.

## Deliverables

- Project configured according to the instructions.
- `RESULT.md` filled in with your own words.
- Commit and push.

## Tips

- Do not use the index as `key`.
- Note in `RESULT.md` any errors found and how you solved them.