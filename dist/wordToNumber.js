const WORD_TO_NUM = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
};
const SCALES = {
    thousand: 1_000,
    million: 1_000_000,
    billion: 1_000_000_000,
    trillion: 1_000_000_000_000,
};
export function wordToNumber(words) {
    // Handle negatives
    const isNegative = words.startsWith("minus ");
    if (isNegative)
        words = words.slice(6);
    // Handle decimals
    if (words.includes("point")) {
        const [integerPart, decimalPart] = words.split(" point ");
        return (parseFloat(`${wordToNumber(integerPart)}.${wordToNumber(decimalPart)}`) *
            (isNegative ? -1 : 1));
    }
    // Process whole numbers
    let total = 0;
    let currentChunk = 0;
    for (const word of words.split(/[\s-]+/)) {
        if (word === "and")
            continue; // Ignore "and" (e.g., "one hundred and two")
        if (WORD_TO_NUM[word] !== undefined) {
            currentChunk += WORD_TO_NUM[word];
        }
        else if (word === "hundred") {
            currentChunk *= 100;
        }
        else if (SCALES[word]) {
            total += currentChunk * SCALES[word];
            currentChunk = 0;
        }
        else {
            throw new Error(`Unknown word: "${word}"`);
        }
    }
    const result = (total + currentChunk) * (isNegative ? -1 : 1);
    return result;
}
