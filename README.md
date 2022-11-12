# Football World Cup Groups Phase

Calculate the 2 teams that will classify to the next phase based on the points scored in every match and provide the information by means of card components.

Retrieve the information related to the soccer matches from the next endpoint https://63223e77fd698dfa2909708c.mockapi.io/api/matches

## Example Structure

```
[{
  home: 'A',
  visit: 'B',
  homeScore: 1,
  visitScore: 2,
}]
```

## View

Once is calculated the two clasified should be displayed on a simple carousel a container with two button next and previous. That allow interact between the clasified teams.

- The next button should be disabled when is on the limit
- The previous button should be disabled when out of the limit

## Notes

- Endpoint: https://63223e77fd698dfa2909708c.mockapi.io/api/matches
- Rules
  - Wins get 3 points
  - Draws get 1 point
  - Losses get 0 points
- The requirements can be changed based on timing during the interview.
