# Exercise 14 — App component (integration)

## Objective

Integrate all components into a functional trip panel.

## Checklist

1. Store `activeTab` and `selectedTripId` with `useState`.
2. Filter trips by tab (departures from Porto vs arrivals to Porto) from `trips.json` (use `.filter()`).
3. Calculate the estimated time of each trip (separate function, derived, no extra state).
4. Render `PageTitle`, `Tabs`, `TripList` and a selection summary (use `find()` or a ternary).
5. Use `TripFilter` (optional) to filter by city.

## Expected result

A complete, functional trip panel with tabs, list, filters and selection summary.

## Deliverables

- Project configured according to the instructions.
- `RESULT.md` filled in with your own words.
- Commit and push.

## Tips

- Derived values do not need separate state.
- Note in `RESULT.md` any errors found and how you solved them.