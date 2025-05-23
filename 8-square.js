const size = parseInt(process.argv[2]);

if (isNaN(size) || size <= 0) {
  console.log('Missing size');
} else {
  const line = 'X'.repeat(size);
  for (let i = 0; i < size; i++) {
    console.log(line);
  }
}
