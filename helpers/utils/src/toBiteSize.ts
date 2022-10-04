
export default function formatBytes(bytes: number, decimals: number = 2): string {
  if ( ! bytes) {
    return '0 B'
  }

  const k: number = 1024;
  const dm: number = decimals < 0 ? 0 : decimals;
  const sizes: Array<string> = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i: number = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}