function serialize(arr) {
    let serialized = '';
    
    const counts = {};
    for (const num of arr) {
        counts[num] = (counts[num] || 0) + 1;
    }
    for (const num in counts) {
        serialized += counts[num].toString() + num.toString();
    }

    return serialized;
}

function deserialize(serialized) {
    const arr = [];
    let i = 0;
    
    while (i < serialized.length) {
        const count = parseInt(serialized[i]);
        const num = parseInt(serialized[i + 1]);
        arr.push(...Array(count).fill(num));
        i += 2;
    }

    return arr;
}

const tests = [
    { original: [1, 1, 2, 3, 3, 3, 4, 4, 5], expectedSerialized: "221331425", expectedCompressionRatio: 0.5 },
];

for (const test of tests) {
    const serialized = serialize(test.original);
    const compressionRatio = serialized.length / (test.original.length * 2);
    console.log("Исходная строка:", test.original);
    console.log("Сжатая строка:", serialized);
    console.log("Коэффициент сжатия:", compressionRatio);
    console.log("Ожидаемая сжатая строка:", test.expectedSerialized);
    console.log("Ожидаемый коэффициент сжатия:", test.expectedCompressionRatio);
    console.log("--------");
}