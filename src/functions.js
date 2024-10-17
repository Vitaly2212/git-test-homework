export const greet = (name) => {
  return `Hello, ${name}`
}

export function farewell(name) {
  return `Goodbye, ${name}`
}

export const auth = (name, pass) => name === 'admin' && pass === 'pass'
