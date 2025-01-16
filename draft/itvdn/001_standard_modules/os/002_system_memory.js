const os = require('os');

const totalMemory = os.totalmem();
console.log('Total System Memory:', formatBytes(totalMemory));

const freeMemory = os.freemem();
console.log('Free System Memory:', formatBytes(freeMemory));

function formatBytes(bytes) {
  const units = ['B', 'KB', 'MB', 'GB'];
  let i = 0;
  while (bytes >= 1024 && i < units.length - 1) {
    bytes /= 1024;
    i++;
  }
  return `${bytes.toFixed(2)} ${units[i]}`;
}
