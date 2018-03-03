


export const api = "http://localhost:3001/"
export const headers = {
  'Authorization': "key",
  'Content-Type': 'application/json'
}
export const showError = (error) =>
  console.log('fetch failed: ' , error.statusText);

