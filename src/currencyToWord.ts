import { numberToWord } from "./numberToWord";

type CurrencyType = "usd" | "bdt" | "eur" | "gbp";

const CURRENCY_LABELS: Record<CurrencyType, { major: string; minor: string }> =
  {
    usd: { major: "dollar", minor: "cent" },
    bdt: { major: "taka", minor: "poisha" },
    eur: { major: "euro", minor: "cent" },
    gbp: { major: "pound", minor: "pence" },
  };

export function currencyToWord(amount: number, currency: string): string {
  if (!(currency in CURRENCY_LABELS)) {
    throw new Error(
      `Unsupported currency type: "${currency}". Supported types: ${Object.keys(
        CURRENCY_LABELS
      ).join(", ")}`
    );
  }

  const { major, minor } = CURRENCY_LABELS[currency as CurrencyType];

  const isNegative = amount < 0;
  const absAmount = Math.abs(amount);

  const majorValue = Math.floor(absAmount);
  const minorValue = Math.round((absAmount - majorValue) * 100);

  const majorWord = numberToWord(majorValue);
  const minorWord = numberToWord(minorValue);

  const majorUnit = majorValue === 1 ? major : `${major}s`;
  const minorUnit = minorValue === 1 ? minor : `${minor}s`;

  const result = `${
    isNegative ? "minus " : ""
  }${majorWord} ${majorUnit} and ${minorWord} ${minorUnit}`;
  return result;
}
