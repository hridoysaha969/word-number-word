import { wordToNumber } from "./wordToNumber";

type CurrencyType = "usd" | "bdt" | "eur" | "gbp";

const CURRENCY_LABELS: Record<CurrencyType, { major: string; minor: string }> =
  {
    usd: { major: "dollar", minor: "cent" },
    bdt: { major: "taka", minor: "poisha" },
    eur: { major: "euro", minor: "cent" },
    gbp: { major: "pound", minor: "pence" },
  };

function normalizeWordFormat(input: string): string {
  // Reject mixed formats like: "forty-two and one"
  const invalidHyphenPattern = /\w+-\w+(?=\s\w)/;

  if (invalidHyphenPattern.test(input)) {
    throw new Error(
      'Use consistent word formatting: either "forty two" or "forty-two"'
    );
  }

  return input.replace(/-/g, " "); // Convert hyphen to space
}

export function wordToCurrency(input: string, currency: string): number {
  if (!(currency in CURRENCY_LABELS)) {
    throw new Error(
      `Unsupported currency type: "${currency}". Use one of: ${Object.keys(
        CURRENCY_LABELS
      ).join(", ")}`
    );
  }

  const { major, minor } = CURRENCY_LABELS[currency as CurrencyType];
  const pluralMajor = `${major}s`;
  const pluralMinor = `${minor}s`;

  input = input.trim().toLowerCase();
  const isNegative = input.startsWith("minus ");
  if (isNegative) input = input.slice(6).trim();

  input = normalizeWordFormat(input);

  // Try to split by " and "
  let [majorPartRaw, minorPartRaw] = input.split(" and ");

  if (!majorPartRaw) {
    throw new Error("Major currency part is missing.");
  }

  // Remove currency keywords
  const majorWords = majorPartRaw
    .replace(new RegExp(`\\b${pluralMajor}\\b|\\b${major}\\b`, "g"), "")
    .trim();

  let minorValue = 0;

  if (minorPartRaw) {
    const minorWords = minorPartRaw
      .replace(new RegExp(`\\b${pluralMinor}\\b|\\b${minor}\\b`, "g"), "")
      .trim();
    if (minorWords.length > 0) {
      minorValue = wordToNumber(minorWords);
    }
  }

  const majorValue = wordToNumber(majorWords);
  const result = parseFloat(
    `${majorValue}.${minorValue.toString().padStart(2, "0")}`
  );
  return isNegative ? -result : result;
}
