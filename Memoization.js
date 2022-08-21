const _memory = {};

function store(key, value) {
  _memory[key] = value;
}

function retrieve(key) {
  return _memory[key];
}

function dumpMemory() {
  return _memory;
}

const Memoization = { store, retrieve, dumpMemory };
