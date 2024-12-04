export function getInitialColor(resolvedTheme: string = 'dark') {
  return resolvedTheme === 'dark' ? 'white' : 'black';
}
