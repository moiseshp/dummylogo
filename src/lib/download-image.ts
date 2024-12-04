export function downloadImage(source: string, filename: string = 'image.png') {
  const a = document.createElement('a');
  a.href = source;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
