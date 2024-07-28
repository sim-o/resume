const dateRegexp = /^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})$/;

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function month(date: string) {
  return date.replace(dateRegexp, (...g) => `${months[g[2] - 1]} ${g[1]}`);
}

const skillNumbers = {
  Expert: 5,
  Advanced: 4,
  Intermediate: 3,
};

export function skillNum(skill: 'Expert' | 'Advanced' | 'Intermediate') {
  return skillNumbers[skill];
}

export function range(n: number) {
  return [...Array(n).keys()];
}
