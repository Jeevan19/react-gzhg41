export function getEventsList() {
  return fetch('http://localhost:8080/events').then((data) => data.json());
}
