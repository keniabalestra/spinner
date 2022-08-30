const char = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
setTimeout(() => {
  for (let i = 0; i < char.length; i++) {
    setTimeout(() => {
      process.stdout.write(char[i]);
    }, i * 200);
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, char.length * 200);
});
