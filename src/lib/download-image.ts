export function downloadImage(source: string, filename: string = 'image') {
  const a = document.createElement('a');
  a.href = source;
  a.download = `${filename}.png`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
