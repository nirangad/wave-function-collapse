const memory = {};

function store(key, value) {
  memory[key] = value;
}

function retrieve(key) {
  return memory[key];
}
