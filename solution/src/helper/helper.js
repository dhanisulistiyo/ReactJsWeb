export function copyObject(par) {
  console.log(par);
  let temp = JSON.stringify(par);
  return JSON.parse(temp);
}
