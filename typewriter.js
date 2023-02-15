const sentence = "hello there from lighthouse labs \n"

let num = 0

for (const char of sentence) {
  setTimeout(() =>
  process.stdout.write(char),num)
  num += 50
};
