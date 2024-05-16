export function convertToISOString(dateString) {
  const [day, month, year] = dateString.split('/');
  const dateObject = new Date(`${year}-${month}-${day}`);
  const isoString = dateObject.toISOString();
  return isoString.slice(0, 10) + 'T00:00:00.000Z';
}
export function formatDate(isoDateString) {
  const date = new Date(isoDateString);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options);
}
