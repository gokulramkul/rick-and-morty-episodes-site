export const trimString = (input) => {
  if (typeof input === "string") {
    let trimmedString = input.trim(); // start and end
    trimmedString = trimmedString.replace(/\s{2,}/g, " "); // middle
    return trimmedString;
  }
  return '';
};
