
function isJSON(value: string): boolean {
  try {
    JSON.parse(value);
    return true;
  }
  catch (e) {
    return false;
  }
}

export default isJSON;
