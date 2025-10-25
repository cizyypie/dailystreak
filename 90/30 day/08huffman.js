class Node {
  constructor(symbol, freq) {
    this.symbol = symbol;
    this.freq = freq;
    this.left = null;
    this.right = null;
  }
}

function buildHuffmanTree(symbols, freqs) {
  const priorityQueue = symbols.map((symbol, index) => new Node(symbol, freqs[index]));
  while (priorityQueue.length > 1) {
    priorityQueue.sort((a, b) => a.freq - b.freq);
    const leftNode = priorityQueue.shift();
    const rightNode = priorityQueue.shift();
    const combinedNode = new Node(null, leftNode.freq + rightNode.freq);
    combinedNode.left = leftNode;
    combinedNode.right = rightNode;
    priorityQueue.push(combinedNode);
  }
  return priorityQueue[0];
}

function buildHuffmanTable(root, prefix = '', table = {}) {
  if (root.symbol !== null) {
    table[root.symbol] = prefix;
  }
  if (root.left) {
    buildHuffmanTable(root.left, prefix + '0', table);
  }
  if (root.right) {
    buildHuffmanTable(root.right, prefix + '1', table);
  }
  return table;
}

function huffmanEncode(data) {
  // Hitung frekuensi setiap simbol
  const freqs = {};
  for (const symbol of data) {
    if (!freqs[symbol]) {
      freqs[symbol] = 0;
    }
    freqs[symbol]++;
  }

  const symbols = Object.keys(freqs);
  
  // Kasus khusus: jika hanya ada satu simbol unik
  if (symbols.length === 1) {
    const table = {};
    table[symbols[0]] = '0'; // Beri kode '0' untuk satu-satunya simbol
    let encodedData = '';
    for (let i = 0; i < data.length; i++) {
      encodedData += '0';
    }
    return { encodedData, table };
  }
  
  // Bangun pohon Huffman dan tabel kode
  const root = buildHuffmanTree(symbols, symbols.map(symbol => freqs[symbol]));
  const table = buildHuffmanTable(root);

  // Kodekan data dengan tabel yang sudah dibuat
  let encodedData = '';
  for (const symbol of data) {
    encodedData += table[symbol];
  }

  return { encodedData, table };
}

function huffmanDecode(encodedData, table) {
  // Invert table untuk memudahkan decoding
  const reverseTable = {};
  for (const symbol in table) {
    reverseTable[table[symbol]] = symbol;
  }
  
  let decodedData = '';
  let currentCode = '';
  
  for (const bit of encodedData) {
    currentCode += bit;
    if (reverseTable[currentCode]) {
      decodedData += reverseTable[currentCode];
      currentCode = '';
    }
  }
  
  return decodedData;
}

// Contoh penggunaan
const data = 'huffmanalgorithm_example';
const { encodedData, table } = huffmanEncode(data);

console.log('Original data:', data);
console.log('Encoded data:', encodedData);
console.log('Huffman table:', table);

// Decode untuk memverifikasi
const decodedData = huffmanDecode(encodedData, table);
console.log('Decoded data:', decodedData);
console.log('Verification:', data === decodedData ? 'Successful' : 'Failed');