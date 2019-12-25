function error(message) {
  console.error(message);
}

function log(message) {
  console.log(message);
}

function warn(message) {
  console.warn(message);
}

export const logger = {
  error,
  log,
  warn,
};
