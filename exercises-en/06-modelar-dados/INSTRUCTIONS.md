# Exercise 06 — Model the data

## Objective

Model the trip domain types in `types.d.ts`, reusing the global file created in exercise 04.

## Checklist

1. Open `src/utils/types.d.ts`.
2. Create the `TripStatus` type (union) with the values: `"on-time"`, `"delayed"`, `"cancelled"`.
3. Create the `Trip` interface with the fields:
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
4. `estimatedTime` must not be stored: it will be calculated from the dates (optional separate function).

## Expected result

A `types.d.ts` with the trip domain types, reusable throughout the project.

## Deliverables

- Project configured according to the instructions.
- `RESULT.md` filled in with your own words.
- Commit and push.

## Tips

- Consult the didactic content on the Orbit platform.
- Note in `RESULT.md` any errors found and how you solved them.