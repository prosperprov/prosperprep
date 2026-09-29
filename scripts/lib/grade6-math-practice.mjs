/**
 * Unique Independent-practice banks for Grade 6 Math year path.
 * Returns 6 {q,a} items keyed by unit + lesson title (Khan-grain skill items).
 */
function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function pick(arr, seed) {
  return arr[hash(seed) % arr.length];
}
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a || 1;
}
function simplify(a, b) {
  const g = gcd(a, b);
  return [a / g, b / g];
}
function nset(seed, base = 3) {
  const h = hash(seed);
  const a = base + (h % 9);
  const b = base + 1 + ((h >> 3) % 8);
  const c = base + 2 + ((h >> 6) % 7);
  return { a, b, c, d: a + b, e: a * b, f: 10 + (h % 40), g: 5 + (h % 20), h: 2 + (h % 5) };
}

const CTX = [
  "Prosper Prep basketball practice",
  "an East Texas trail hike",
  "a scholarship bake sale",
  "a family trip on I-20",
  "the school garden",
  "a band concert ticket table",
  "a Saturday soccer tournament",
  "a science-fair supply run",
  "a youth-group picnic",
  "a library reading challenge",
];

/** @returns {{q:string,a:string}[]} */
export function mathIndepPractice(unitN, lessonTitle, seed) {
  const builders = {
    1: ratios,
    2: rationals,
    3: ratesPercents,
    4: exponents,
    5: negatives,
    6: expressions,
    7: equations,
    8: plane,
    9: coordinate,
    10: solid3d,
    11: stats,
  };
  const fn = builders[unitN] || ratios;
  return fn(lessonTitle, seed);
}

function six(gen) {
  const out = [];
  for (let i = 1; i <= 6; i++) out.push(gen(i));
  return out;
}

function ratios(title, seed) {
  const t = title.toLowerCase();
  const n = (i) => nset(seed + ":r" + i, 2 + i);
  const ctx = (i) => pick(CTX, seed + i);

  if (t.includes("what is a ratio")) {
    return [
      (() => { const x = n(1); const a = Math.max(2, x.a), b = Math.max(2, x.b === a ? a + 2 : x.b);
        return { q: `At ${ctx(1)}, coaches count ${a} water bottles and ${b} towels. Write bottles to towels in three forms (a:b, “a to b”, a/b). Does order matter?`, a: `${a}:${b}; ${a} to ${b}; ${a}/${b}. Yes — order matters (${b}:${a} is different).` }; })(),
      (() => { const x = n(2); const a = Math.max(3, x.a), b = Math.max(2, x.c);
        return { q: `A recipe uses ${a} cups flour to ${b} cups milk. Write milk to flour as a ratio in two forms. Why is that different from flour to milk?`, a: `${b}:${a} or ${b} to ${a} (or ${b}/${a}). Order swaps which quantity is named first.` }; })(),
      (() => { const x = n(3); const red = x.a + 2, blue = x.b + 1;
        return { q: `True or false: The ratio ${red}:${blue} is the same as ${blue}:${red}. Defend with a one-sentence example about team jerseys.`, a: `False — ${red}:${blue} ≠ ${blue}:${red} unless equal. Order names which color comes first.` }; })(),
      (() => { const x = n(4); const g = x.a + 3, s = x.b + 2;
        return { q: `Fill in: “${g} sixth-graders to ${s} seventh-graders” → ratio ____. Then write the reciprocal comparison seventh:sixth.`, a: `${g}:${s}; reciprocal ${s}:${g}.` }; })(),
      (() => { const x = n(5); const a = x.a + 1, b = x.b + 3;
        return { q: `A double number line starts with packs:${a} above ribbons:${b}. Write the ratio packs:ribbons three ways and name what the numbers compare.`, a: `${a}:${b}; ${a} to ${b}; ${a}/${b}. Compares packs to ribbons (part-to-part).` }; })(),
      (() => { const x = n(6); let a = x.a + 4, b = x.g; if (a === b) b = a + 3;
        return { q: `Error hunt: A student writes “ratio of ${a} to ${b}” as ${b}/${a} because “bigger goes on bottom.” Correct the forms and name the mistake.`, a: `Correct ${a}:${b}, ${a} to ${b}, ${a}/${b}. Mistake: inventing a “bigger on bottom” rule; order follows the words asked.` }; })(),
    ];
  }

  if (t.includes("equivalent")) {
    return [
      (() => { const x = n(1); const a = x.a + 1, b = x.b + 1, k = 3;
        return { q: `Ratio snacks:napkins = ${a}:${b} at ${ctx(1)}. Write equivalents scaled by ${k} and by ${k + 2}.`, a: `${a * k}:${b * k} and ${a * (k + 2)}:${b * (k + 2)}.` }; })(),
      (() => { const x = n(2); const a = x.a + 2, b = x.b + 1, k = 4;
        return { q: `Is ${a * k}:${b * k + 1} equivalent to ${a}:${b}? Show a test (table or simplify).`, a: `No — only one quantity scaled correctly. Equivalent would be ${a * k}:${b * k}.` }; })(),
      (() => { const x = n(3); const a = x.a + 1, b = x.c;
        return { q: `Complete: ${a}:${b} = ____:${b * 5} = ${a * 2}:____.`, a: `${a * 5}:${b * 5}; ${a * 2}:${b * 2}.` }; })(),
      (() => { const x = n(4); const a = x.a + 2, b = x.b + 2;
        return { q: `At ${ctx(4)}, a mix is ${a} parts juice to ${b} parts water. Give two different batch sizes with the same taste (equivalent ratios).`, a: `Any same-scale pairs, e.g. ${2 * a}:${2 * b} and ${3 * a}:${3 * b}.` }; })(),
      (() => { const x = n(5); const a = x.a + 1, b = x.b + 3;
        return { q: `Explain why adding ${a} to both parts of ${a}:${b} does NOT make an equivalent ratio (use numbers).`, a: `Additive change breaks multiplicative relationship; e.g. ${a}:${b} vs ${2 * a}:${b + a} are not equivalent in general.` }; })(),
      (() => { const x = n(6); const a = x.a + 2, b = x.b + 1; const [sa, sb] = simplify(a * 2, b * 2);
        return { q: `Simplify ${a * 2}:${b * 2}, then scale the simplified ratio by 7. Are all three ratios equivalent?`, a: `Simplified ${sa}:${sb}; ×7 → ${sa * 7}:${sb * 7}. Yes — all equivalent.` }; })(),
    ];
  }

  if (t.includes("ratio tables")) {
    return [
      (() => { const x = n(1); const a = x.a + 1, b = x.b + 1;
        return { q: `Build a ratio table for ${a} cups mix : ${b} cups water with columns ×1, ×2, ×3, ×5. What water matches ${a * 5} mix?`, a: `Rows (${a},${b}), (${2 * a},${2 * b}), (${3 * a},${3 * b}), (${5 * a},${5 * b}). Water for ${a * 5} mix = ${5 * b}.` }; })(),
      (() => { const x = n(2); const a = x.a + 2, b = x.b + 2;
        return { q: `A table shows packs 2,4,6 with ribbons ${b}, ____, ____ if the ratio is 2:${b}. Fill blanks.`, a: `Ribbons ${b}, ${2 * b}, ${3 * b} for packs 2,4,6 (ratio 2:${b} ⇒ per 2 packs).` }; })(),
      (() => { const x = n(3); const a = x.a + 1, b = x.c;
        return { q: `Missing value: ${a}/□ = ${3 * a}/${3 * b}. Find the box and explain with a table row.`, a: `Box = ${b}. Scale factor 3 on both quantities.` }; })(),
      (() => { const x = n(4); const a = x.a + 3, b = x.b + 1;
        return { q: `At ${ctx(4)}, tickets sell at ${a} tickets for $${b}. Use a table to find cost for ${4 * a} tickets and tickets for $${3 * b}.`, a: `${4 * a} tickets cost $${4 * b}; $${3 * b} buys ${3 * a} tickets.` }; })(),
      (() => { const x = n(5); const a = x.a + 1, b = x.b + 2;
        return { q: `A student fills a table by adding ${a} to the first column and ${b + 1} to the second. Why can that break equivalence when the ratio is ${a}:${b}?`, a: `Must scale by the same factor (multiply), not add unrelated amounts.` }; })(),
      (() => { const x = n(6); const a = x.a + 2, b = x.g;
        return { q: `Create your own 4-column ratio table for ${a}:${b}, then write one word problem that uses the ×4 column.`, a: `Table includes (${a},${b})…(${4 * a},${4 * b}); word problem must match that pair.` }; })(),
    ];
  }

  if (t.includes("double number")) {
    return [
      (() => { const x = n(1); const a = x.a + 1, b = x.b + 1;
        return { q: `Double number line: top shows ${a}, ${2 * a}, ${3 * a} packs. Ratio packs:ribbons = ${a}:${b}. Label ribbons under each mark.`, a: `Ribbons ${b}, ${2 * b}, ${3 * b}.` }; })(),
      (() => { const x = n(2); const a = x.a + 2, b = x.b + 2;
        return { q: `On a double number line for ${ctx(2)}, ribbons hit ${3 * b} under an unknown pack mark. If ratio is ${a}:${b}, what pack amount is above ${3 * b}?`, a: `${3 * a} packs.` }; })(),
      (() => { const x = n(3); const a = x.a + 1, b = x.c;
        return { q: `Sketch (describe) a double number line for ${a} miles in ${b} hours. Mark one more equivalent pair.`, a: `Miles ${a},${2 * a},… over hours ${b},${2 * b},…` }; })(),
      (() => { const x = n(4); const a = x.a + 3, b = x.b + 1;
        return { q: `Why must tick marks stay evenly spaced in the same ratio scale on both lines? Give a wrong labeling example using ${a}:${b}.`, a: `Uneven spacing breaks the constant rate; e.g. labeling ${2 * b} under ${3 * a} would be wrong.` }; })(),
      (() => { const x = n(5); const a = x.a + 2, b = x.b + 3;
        return { q: `Use a double number line to find ribbons when packs = ${5 * a} if ${a}:${b} is packs:ribbons.`, a: `${5 * b} ribbons.` }; })(),
      (() => { const x = n(6); const a = x.a + 1, b = x.g;
        return { q: `Compare methods: solve “packs ${4 * a} → ribbons?” with a table AND a double number line for ${a}:${b}. Do answers match?`, a: `Both give ${4 * b} ribbons; representations differ, answer matches.` }; })(),
    ];
  }

  if (t.includes("part-to-part") || t.includes("part-to-whole")) {
    return [
      (() => { const x = n(1); const a = x.a + 2, b = x.b + 1, w = a + b;
        return { q: `Team: ${a} sixth + ${b} seventh (${w} total). Write part-to-part sixth:seventh and part-to-whole sixth:all.`, a: `${a}:${b}; ${a}:${w}.` }; })(),
      (() => { const x = n(2); const a = x.a + 1, b = x.b + 3, w = a + b;
        return { q: `Which comparison answers “What fraction of the team is sixth grade?” for ${a} sixth and ${b} seventh?`, a: `Part-to-whole ${a}:${w} or fraction ${a}/${w}.` }; })(),
      (() => { const x = n(3); const a = x.a + 2, b = x.c, w = a + b;
        return { q: `A fruit bowl has ${a} apples and ${b} oranges. Write apples:oranges and apples:fruit. Context: ${ctx(3)}.`, a: `${a}:${b}; ${a}:${w}.` }; })(),
      (() => { const x = n(4); const a = x.a + 3, b = x.b + 2, w = a + b;
        return { q: `True/false: part-to-part ${a}:${b} equals part-to-whole ${a}:${w}. Explain.`, a: `False — different second quantities (${b} vs ${w}).` }; })(),
      (() => { const x = n(5); const a = x.a + 1, b = x.b + 4, w = a + b;
        return { q: `If part-to-whole sixth:all = ${a}:${w}, how many are not sixth grade?`, a: `${w - a} (the other part).` }; })(),
      (() => { const x = n(6); const a = x.a + 2, b = x.g, w = a + b;
        return { q: `Write a question that requires part-to-part and another that requires part-to-whole using ${a} and ${b} athletes.`, a: `P2P sample: sixth to seventh? P2W sample: what fraction are sixth?` }; })(),
    ];
  }

  if (t.includes("simplifying")) {
    return [
      (() => { const x = n(1); const a = x.a + 1, b = x.b + 1, k = 4; const [sa, sb] = simplify(a, b);
        return { q: `Simplify ${a * k}:${b * k}. Show the GCF you divide by. Context: ${ctx(1)}.`, a: `Divide by ${k * gcd(a, b)}; simplified ${sa}:${sb}.` }; })(),
      (() => { const x = n(2); const a = x.a + 2, b = x.b + 2; const [sa, sb] = simplify(a, b);
        return { q: `Is ${a}:${b} already simplest? If not, simplify. If yes, explain using GCF.`, a: `GCF(${a},${b})=${gcd(a, b)}; simplest ${sa}:${sb}.` }; })(),
      (() => { const x = n(3); const a = x.a + 1, b = x.c, k = 6; const [sa, sb] = simplify(a, b);
        return { q: `A banner ratio ${a * k}:${b * k} should be reported in simplest form for a poster. Write it.`, a: `${sa}:${sb}.` }; })(),
      (() => { const x = n(4); const a = x.a + 3, b = x.b + 1; const [sa, sb] = simplify(2 * a, 2 * b);
        return { q: `Simplify stepwise: ${4 * a}:${4 * b} → ÷2 → ____ → ÷2 → ____.`, a: `${2 * a}:${2 * b} then ${sa}:${sb} (or equivalent correct stepwise).` }; })(),
      (() => { const x = n(5); const a = x.a + 2, b = x.b + 3;
        return { q: `Error hunt: Student simplifies ${a * 2}:${b * 2} to ${a * 2}:${b}. Correct and name the error.`, a: `Correct ${a}:${b} (both parts ÷2). Error: divided only one part.` }; })(),
      (() => { const x = n(6); const a = x.a + 1, b = x.g; const [sa, sb] = simplify(a * 3, b * 3);
        return { q: `Give an unsimplified ratio equivalent to ${sa}:${sb} that uses a factor of 3, then simplify back.`, a: `${sa * 3}:${sb * 3} → ${sa}:${sb}.` }; })(),
    ];
  }

  if (t.includes("comparing ratios")) {
    return [
      (() => { const x = n(1); const a = x.a + 2, b = x.b + 2, c = a + 1, d = b + 3;
        return { q: `Which is greater, ${a}:${b} or ${c}:${d}? Compare unit rates (first÷second).`, a: `${(a / b).toFixed(3)} vs ${(c / d).toFixed(3)} → greater ${a / b >= c / d ? `${a}:${b}` : `${c}:${d}`}.` }; })(),
      (() => { const x = n(2); const a = x.a + 1, b = x.b + 1, c = a + 2, d = b + 2;
        return { q: `At ${ctx(2)}, Team A scores ${a} points in ${b} games; Team B ${c} in ${d}. Who has the higher points-per-game ratio?`, a: `Compare ${a}/${b} vs ${c}/${d}; higher is ${a / b >= c / d ? "A" : "B"}.` }; })(),
      (() => { const x = n(3); const a = x.a + 3, b = x.c;
        return { q: `Make an equivalent form of ${a}:${b} with second term 10× larger, then compare to ${a + 1}:${10 * b}.`, a: `${10 * a}:${10 * b} vs ${a + 1}:${10 * b} — first terms decide (${10 * a} vs ${a + 1}).` }; })(),
      (() => { const x = n(4); const a = x.a + 2, b = x.b + 1;
        return { q: `Explain a fair comparison method when denominators differ, using ${a}:${b} vs ${a + 2}:${b + 3}.`, a: `Unit rates or common second term / tables.` }; })(),
      (() => { const x = n(5); const a = x.a + 1, b = x.b + 4;
        return { q: `Without a calculator narrative: estimate which is larger, ${a}:${b} or 1:2, and justify.`, a: `Compare ${a}/${b} to 0.5; ${a / b > 0.5 ? `${a}:${b} larger` : a / b < 0.5 ? `1:2 larger` : "equal"}.` }; })(),
      (() => { const x = n(6); const a = x.a + 2, b = x.g, c = a + 1, d = b + 1;
        return { q: `Error hunt: Student says ${a}:${b} > ${c}:${d} “because ${a} > nothing needed — first number bigger.” Correct the reasoning.`, a: `Must compare rates/equivalent forms, not first terms alone.` }; })(),
    ];
  }

  if (t.includes("word problems")) {
    return [
      (() => { const x = n(1); const a = x.a + 1, b = x.b + 2;
        return { q: `Juice mix ${a} concentrate : ${b} water. Water needed for ${4 * a} concentrate? Concentrate for ${3 * b} water?`, a: `${4 * b} water; ${3 * a} concentrate.` }; })(),
      (() => { const x = n(2); const a = x.a + 2, b = x.b + 1;
        return { q: `At ${ctx(2)}, ${a} chaperones for ${b} students. How many chaperones for ${5 * b} students at the same ratio?`, a: `${5 * a} chaperones.` }; })(),
      (() => { const x = n(3); const a = x.a + 1, b = x.c;
        return { q: `A paint mix is ${a} blue to ${b} white. How much white with ${2 * a} blue? How much blue with ${5 * b} white?`, a: `${2 * b} white; ${5 * a} blue.` }; })(),
      (() => { const x = n(4); const a = x.a + 3, b = x.b + 2;
        return { q: `Two-step: Start with ${a}:${b} ribbon:bows. You need ${3 * b} bows. Find ribbons, then cost if ribbon is $2 per unit.`, a: `Ribbons ${3 * a}; cost $${6 * a}.` }; })(),
      (() => { const x = n(5); const a = x.a + 2, b = x.b + 3;
        return { q: `A map scale is ${a} cm : ${b} km. A road measures ${4 * a} cm on the map. How many km?`, a: `${4 * b} km.` }; })(),
      (() => { const x = n(6); const a = x.a + 1, b = x.g;
        return { q: `Write and solve your own multi-step ratio story using ${a}:${b} about ${ctx(6)}. Include a missing-value ask.`, a: `Story must use ratio ${a}:${b} with a correct missing-value solution.` }; })(),
    ];
  }

  if (t.includes("mixing") || t.includes("recipes")) {
    return [
      (() => { const x = n(1); const a = x.a + 1, b = x.b + 1, s = 2;
        return { q: `Recipe for ${s} servings: ${a} cups flour, ${b} tbsp sugar. Scale to ${3 * s} servings.`, a: `Flour ${3 * a} cups; sugar ${3 * b} tbsp.` }; })(),
      (() => { const x = n(2); const a = x.a + 2, b = x.b + 2;
        return { q: `Trail mix ${a} cups nuts : ${b} cups fruit. You only have ${2 * a} cups nuts. How much fruit to keep the ratio?`, a: `${2 * b} cups fruit.` }; })(),
      (() => { const x = n(3); const a = x.a + 1, b = x.c, s = 4;
        return { q: `A batch for ${s} people uses ${a}:${b} oil:vinegar. Halve the recipe for ${s / 2} people.`, a: `${a / 2}:${b / 2} if even; otherwise keep fraction form ${a}/2 : ${b}/2.` }; })(),
      (() => { const x = n(4); const a = x.a + 3, b = x.b + 1;
        return { q: `Why can’t you add ${a} cups flour alone to a ${a}:${b} flour:sugar dough and keep the same taste?`, a: `Must scale both ingredients by the same factor.` }; })(),
      (() => { const x = n(5); const a = x.a + 2, b = x.b + 3;
        return { q: `Scale ${a} eggs : ${b} cups milk to use exactly ${3 * a} eggs. Milk needed?`, a: `${3 * b} cups milk.` }; })(),
      (() => { const x = n(6); const a = x.a + 1, b = x.g;
        return { q: `At ${ctx(6)}, punch is ${a} juice : ${b} soda. Make 2 equivalent batches (different sizes) and one non-equivalent “oops” batch.`, a: `Equivalent e.g. ${2 * a}:${2 * b}, ${3 * a}:${3 * b}; oops changes only one part.` }; })(),
    ];
  }

  // review default — 6 distinct review prompts
  return [
    (() => { const x = n(1); const a = x.a + 1, b = x.b + 1; const [sa, sb] = simplify(a, b);
      return { q: `Review: Write ${a}:${b} three ways; simplify ${2 * a}:${2 * b}.`, a: `${a}:${b}, ${a} to ${b}, ${a}/${b}; simplified ${sa}:${sb}.` }; })(),
    (() => { const x = n(2); const a = x.a + 2, b = x.b + 1;
      return { q: `Review: Scale ${a}:${b} by 5; is ${5 * a}:${5 * b + 1} equivalent?`, a: `${5 * a}:${5 * b}; no for the +1 version.` }; })(),
    (() => { const x = n(3); const a = x.a + 1, b = x.c, w = a + b;
      return { q: `Review: Part-to-part vs part-to-whole for ${a} and ${b} (whole ${w}).`, a: `${a}:${b} vs ${a}:${w}.` }; })(),
    (() => { const x = n(4); const a = x.a + 2, b = x.b + 2, c = a + 1, d = b + 3;
      return { q: `Review: Compare ${a}:${b} to ${c}:${d} with unit rates.`, a: `${(a / b).toFixed(3)} vs ${(c / d).toFixed(3)}.` }; })(),
    (() => { const x = n(5); const a = x.a + 1, b = x.b + 3;
      return { q: `Review: Table missing value ${a}:□ = ${3 * a}:${3 * b}.`, a: `□ = ${b}.` }; })(),
    (() => { const x = n(6); const a = x.a + 2, b = x.g;
      return { q: `Review: Recipe scale — ${a} flour : ${b} sugar to 4× batch.`, a: `${4 * a} flour, ${4 * b} sugar.` }; })(),
  ];
}

function rationals(title, seed) {
  const t = title.toLowerCase();
  return six((i) => {
    const n = nset(seed + ":f" + i, 2 + i);
    const ctx = pick(CTX, seed + "f" + i);
    const d1 = 2 + (i % 5);
    const d2 = d1 + 1 + (i % 3);
    const num1 = 1 + (n.a % (d1 - 1 || 1));
    const num2 = 1 + (n.b % (d2 - 1 || 1));

    if (t.includes("fraction sense") || t.includes("benchmark")) {
      return {
        q: `Place ${num1}/${d1} and ${num2}/${d2} on a 0–1 number line sketch for ${ctx}. Which is closer to 1/2? Explain with a benchmark.`,
        a: `Compare to 1/2: ${num1}/${d1} ${num1 / d1 < 0.5 ? "<" : num1 / d1 > 0.5 ? ">" : "="} 1/2; ${num2}/${d2} ${num2 / d2 < 0.5 ? "<" : num2 / d2 > 0.5 ? ">" : "="} 1/2. Closer to 1/2: distance check — |${(num1 / d1).toFixed(2)}−0.5| vs |${(num2 / d2).toFixed(2)}−0.5|.`,
      };
    }
    if (t.includes("adding and subtracting fractions")) {
      const L = (d1 * d2) / gcd(d1, d2);
      const sumN = num1 * (L / d1) + num2 * (L / d2);
      return {
        q: `At ${ctx}, Maya walks ${num1}/${d1} mile then ${num2}/${d2} mile. How far did she walk in all? Estimate first, then compute with a common denominator.`,
        a: `Common denominator ${L}: ${num1 * (L / d1)}/${L} + ${num2 * (L / d2)}/${L} = ${sumN}/${L}${simplify(sumN, L)[0] !== sumN ? ` = ${simplify(sumN, L).join("/")}` : ""}.`,
      };
    }
    if (t.includes("multiplying fractions")) {
      const p = num1 * num2;
      const q = d1 * d2;
      const [sp, sq] = simplify(p, q);
      return {
        q: `A garden plot is ${num1}/${d1} of a full bed wide and ${num2}/${d2} of a full bed long. What fraction of a full bed’s area is the plot? Multiply and simplify.`,
        a: `${num1}/${d1} × ${num2}/${d2} = ${p}/${q} = ${sp}/${sq}.`,
      };
    }
    if (t.includes("dividing fractions by whole")) {
      const whole = 2 + (i % 4);
      const [sp, sq] = simplify(num1, d1 * whole);
      return {
        q: `Share ${num1}/${d1} of a pan of brownies equally among ${whole} students at ${ctx}. How much does each student get?`,
        a: `${num1}/${d1} ÷ ${whole} = ${num1}/${d1 * whole} = ${sp}/${sq}.`,
      };
    }
    if (t.includes("dividing by a fraction")) {
      return {
        q: `How many ${num1}/${d1}-cup servings are in ${n.c} cups of mix? Use keep-change-flip and check with multiplication.`,
        a: `${n.c} ÷ ${num1}/${d1} = ${n.c} × ${d1}/${num1} = ${(n.c * d1) / num1}. Check: servings × ${num1}/${d1} = ${n.c}.`,
      };
    }
    if (t.includes("mixed numbers") || t.includes("improper")) {
      const whole = 1 + (i % 3);
      const improper = whole * d1 + num1;
      return {
        q: `Convert ${whole} ${num1}/${d1} to an improper fraction. Convert ${improper + d1}/${d1} to a mixed number. Context: measuring for ${ctx}.`,
        a: `${whole} ${num1}/${d1} = ${improper}/${d1}. ${improper + d1}/${d1} = ${whole + 1} ${num1}/${d1} (or ${(improper + d1) / d1} if num1=0).`,
      };
    }
    if (t.includes("decimal place")) {
      const x = (n.a + n.b / 1000).toFixed(3);
      const y = (n.c + n.g / 100).toFixed(2);
      return {
        q: `Compare ${x} and ${y}. Which is greater? Write both to thousandths and explain using place value (for scores at ${ctx}).`,
        a: `${x} vs ${Number(y).toFixed(3)}. Greater: ${Number(x) >= Number(y) ? x : Number(y).toFixed(3)}.`,
      };
    }
    if (t.includes("adding and subtracting decimals")) {
      const p = (n.a + n.b / 100).toFixed(2);
      const q = (n.c + n.g / 100).toFixed(2);
      return {
        q: `Ticket sales: $${p} in the morning and $${q} in the afternoon at ${ctx}. What is the total? What is the difference (larger − smaller)? Align place values.`,
        a: `Total $${(Number(p) + Number(q)).toFixed(2)}. Difference $${Math.abs(Number(p) - Number(q)).toFixed(2)}.`,
      };
    }
    if (t.includes("multiplying and dividing decimals")) {
      const p = (2 + (i % 4) + n.a / 100).toFixed(2);
      const q = (1 + (i % 3) + 0.25).toFixed(2);
      return {
        q: `Unit price $${p}; buy ${3 + (i % 3)} items for ${ctx}. Find the total (estimate first). Then: if ${6 + i} feet of ribbon costs $${(Number(p) * 2).toFixed(2)}, what is the price per foot?`,
        a: `Total ≈ estimate; exact ${(Number(p) * (3 + (i % 3))).toFixed(2)}. Per foot: $${(Number(p) * 2 / (6 + i)).toFixed(4)} (show division).`,
      };
    }
    // fraction-decimal / default
    return {
      q: `Write ${num1}/${d1} as a decimal (divide) and as a percent. Then write 0.${n.a % 9}${(n.b % 9)} as a fraction in simplest form. Context: ${ctx}.`,
      a: `${num1}/${d1} = ${(num1 / d1).toFixed(4)} = ${((num1 / d1) * 100).toFixed(2)}%. Convert 0.${n.a % 9}${n.b % 9} by place value and simplify.`,
    };
  });
}

function ratesPercents(title, seed) {
  const t = title.toLowerCase();
  return six((i) => {
    const n = nset(seed + ":p" + i, 3 + i);
    const ctx = pick(CTX, seed + "p" + i);
    const miles = 20 + n.f;
    const hours = 2 + (i % 3);
    const price = 5 + n.a;
    const qty = 2 + (i % 5);

    if (t.includes("unit rates") && !t.includes("speed")) {
      return {
        q: `At ${ctx}, ${qty * price} dollars buys ${qty} packs. What is the unit price per pack? Which is the better buy: that rate or ${price + 1} dollars for 1 pack?`,
        a: `Unit price = $${price} per pack. Compare to $${price + 1}/pack — the $${price} rate is better.`,
      };
    }
    if (t.includes("speed") || t.includes("work rates") || t.includes("price")) {
      return {
        q: `A bus covers ${miles} miles in ${hours} hours for a trip near ${ctx}. What is the unit rate in mph? How far at that rate in ${hours + 2} hours?`,
        a: `${(miles / hours).toFixed(2)} mph. In ${hours + 2} h: ${((miles / hours) * (hours + 2)).toFixed(2)} miles.`,
      };
    }
    if (t.includes("complex rate") || t.includes("rate tables")) {
      return {
        q: `A print shop makes ${n.a} posters every ${n.b} minutes. Build a rate table for 1, 2, and 5 “blocks” of ${n.b} minutes. How many posters in ${n.b * 5} minutes?`,
        a: `Blocks: (${n.b} min → ${n.a}), (${2 * n.b} → ${2 * n.a}), (${5 * n.b} → ${5 * n.a}). In ${n.b * 5} min: ${5 * n.a} posters.`,
      };
    }
    if (t.includes("percent as") || t.includes("per hundred")) {
      const pct = 10 * (1 + (i % 8));
      return {
        q: `Write ${pct}% as a fraction (hundredths) and as a decimal. Then write ${n.a}/${n.a + n.b} as a percent (round to nearest whole percent).`,
        a: `${pct}% = ${pct}/100 = ${(pct / 100).toFixed(2)}. ${n.a}/${n.a + n.b} ≈ ${Math.round((100 * n.a) / (n.a + n.b))}%.`,
      };
    }
    if (t.includes("percent of a number")) {
      const pct = 5 * (2 + (i % 10));
      const whole = 40 + n.f;
      return {
        q: `Find ${pct}% of ${whole} for a discount display at ${ctx}. Show a decimal method and a benchmark check (10% or 1%).`,
        a: `${pct}% of ${whole} = ${(pct / 100) * whole}. Benchmark: 10% = ${whole / 10}.`,
      };
    }
    if (t.includes("finding the whole")) {
      const pct = 20 + 5 * (i % 6);
      const part = n.e;
      return {
        q: `${part} students are ${pct}% of those who signed up for ${ctx}. How many signed up in all? (Solve part = pct% × whole.)`,
        a: `whole = ${part} ÷ (${pct}/100) = ${(part / (pct / 100)).toFixed(2)}.`,
      };
    }
    if (t.includes("increase") || t.includes("decrease")) {
      const start = 50 + n.f;
      const pct = 10 + 5 * (i % 5);
      return {
        q: `A fundraising total goes from $${start} to $${start + Math.round(start * (pct / 100))} at ${ctx}. What is the percent increase?`,
        a: `Change = $${Math.round(start * (pct / 100))}. Percent increase = ${pct}% (change÷start×100).`,
      };
    }
    if (t.includes("tax") || t.includes("tip") || t.includes("discount")) {
      const bill = 20 + n.f;
      const pct = 5 + 5 * (i % 4);
      return {
        q: `A $${bill} subtotal gets a ${pct}% tip and 8% tax (tax on subtotal). Find tip, tax, and total for ${ctx}.`,
        a: `Tip $${((bill * pct) / 100).toFixed(2)}; tax $${((bill * 8) / 100).toFixed(2)}; total $${(bill + (bill * pct) / 100 + (bill * 8) / 100).toFixed(2)}.`,
      };
    }
    if (t.includes("error") || t.includes("estimation")) {
      return {
        q: `Estimate 19% of ${40 + n.f} by using 20%. Then compute the exact percent and the percent error of your estimate (relative to the exact value).`,
        a: `Estimate ≈ 0.2×${40 + n.f} = ${(0.2 * (40 + n.f)).toFixed(1)}. Exact = 0.19×${40 + n.f} = ${(0.19 * (40 + n.f)).toFixed(2)}. Percent error = |est−exact|/exact×100%.`,
      };
    }
    return {
      q: `Mixed rates/percents (${title}): Unit rate for ${n.e} miles in ${n.b} hours; then find ${n.g}0% of ${n.f}. Context: ${ctx}.`,
      a: `Unit rate ${(n.e / n.b).toFixed(2)} mph. ${n.g}0% of ${n.f} = ${((n.g * 10) / 100) * n.f}.`,
    };
  });
}

function exponents(title, seed) {
  const t = title.toLowerCase();
  return six((i) => {
    const n = nset(seed + ":e" + i, 2 + i);
    const base = 2 + (i % 5);
    const exp = 2 + (i % 4);

    if (t.includes("powers as") || t.includes("repeated")) {
      return {
        q: `Write ${base}^${exp} as repeated multiplication and evaluate. Then write a product of ${exp} factors of ${base + 1} in exponent form.`,
        a: `${base}^${exp} = ${Array(exp).fill(base).join("×")} = ${base ** exp}. Product form: (${base + 1})^${exp}.`,
      };
    }
    if (t.includes("evaluating powers")) {
      return {
        q: `Evaluate ${base}^${exp} and ${base + 1}^2. Which is greater? Estimate before computing.`,
        a: `${base}^${exp} = ${base ** exp}; ${base + 1}^2 = ${(base + 1) ** 2}. Greater: ${base ** exp >= (base + 1) ** 2 ? `${base}^${exp}` : `${base + 1}^2`}.`,
      };
    }
    if (t.includes("order of operations") || t.includes("foundations")) {
      return {
        q: `Evaluate ${base} + ${n.a} × ${n.b}^2 − ${n.c}. Show the order (×/÷ and exponents before +/−).`,
        a: `Exponents first: ${n.b}^2 = ${n.b ** 2}. Then ×: ${n.a * n.b ** 2}. Then +/−: ${base + n.a * n.b ** 2 - n.c}.`,
      };
    }
    if (t.includes("grouping")) {
      return {
        q: `Evaluate (${base} + ${n.a}) × ${n.b} − ${n.c}^2 and compare to ${base} + ${n.a} × ${n.b} − ${n.c}^2. Why do they differ?`,
        a: `With grouping: (${base + n.a})×${n.b} − ${n.c ** 2} = ${(base + n.a) * n.b - n.c ** 2}. Without: ${base + n.a * n.b - n.c ** 2}. Parentheses change order.`,
      };
    }
    if (t.includes("area") || t.includes("volume")) {
      return {
        q: `A square patio has side ${base + 3} ft. Write area with an exponent and evaluate. A cube display has edge ${base} in; write volume with an exponent.`,
        a: `Area (${base + 3})^2 = ${(base + 3) ** 2} ft². Volume ${base}^3 = ${base ** 3} in³.`,
      };
    }
    if (t.includes("writing expressions")) {
      return {
        q: `Translate: “the square of a number n, plus ${n.a}” and “${n.b} times the cube of a side length s.”`,
        a: `n^2 + ${n.a}; ${n.b}s^3.`,
      };
    }
    if (t.includes("mistakes")) {
      return {
        q: `A student evaluates ${n.a} + ${n.b}^2 as (${n.a} + ${n.b})^2 = ${(n.a + n.b) ** 2}. Correct the work and name the mistake.`,
        a: `Correct: ${n.a} + ${n.b ** 2} = ${n.a + n.b ** 2}. Mistake: treating addition as inside the power.`,
      };
    }
    return {
      q: `Review: Evaluate 2^${exp} × ${n.a} + (${n.b} − ${i}). Show order of operations.`,
      a: `2^${exp} = ${2 ** exp}; × ${n.a} → ${2 ** exp * n.a}; + (${n.b - i}) → ${2 ** exp * n.a + (n.b - i)}.`,
    };
  });
}

function negatives(title, seed) {
  const t = title.toLowerCase();
  return six((i) => {
    const n = nset(seed + ":n" + i, 2 + i);
    const x = n.a;
    const y = -(n.b);
    const z = n.c - 10;

    if (t.includes("integers on") || t.includes("number line")) {
      return {
        q: `Plot ${x}, ${y}, and ${z} on a number line. Which is farthest left? Which is closest to zero?`,
        a: `Farthest left: ${Math.min(x, y, z)}. Closest to zero: among ${x}, ${y}, ${z} the one with least absolute value (${[x, y, z].sort((a, b) => Math.abs(a) - Math.abs(b))[0]}).`,
      };
    }
    if (t.includes("opposites") || t.includes("absolute")) {
      return {
        q: `What is the opposite of ${y}? What is |${y}|? What is |${z}|? Explain absolute value as distance from 0.`,
        a: `Opposite of ${y} is ${-y}. |${y}| = ${Math.abs(y)}. |${z}| = ${Math.abs(z)}.`,
      };
    }
    if (t.includes("comparing and ordering integers")) {
      return {
        q: `Order ${x}, ${y}, ${z}, and 0 from least to greatest. Justify with a number-line sentence.`,
        a: `${[x, y, z, 0].sort((a, b) => a - b).join(" < ")}.`,
      };
    }
    if (t.includes("real-world") || t.includes("signed quantities")) {
      return {
        q: `Morning temperature is ${y}°F; afternoon is ${x}°F. What is the change from morning to afternoon (use a signed number)? Elevation: ${z} feet relative to sea level — interpret the sign.`,
        a: `Change = ${x - y} degrees (afternoon − morning). Elevation ${z}: ${z < 0 ? "below" : z > 0 ? "above" : "at"} sea level.`,
      };
    }
    if (t.includes("rational numbers beyond") || t.includes("beyond integers")) {
      return {
        q: `Place −${n.a}/${n.b + 1}, ${y}, and 0.${n.c} on a number line sketch. Which is least?`,
        a: `Compare decimal values: −${(n.a / (n.b + 1)).toFixed(3)}, ${y}, ${(n.c / 10).toFixed(1)}. Least = most negative.`,
      };
    }
    if (t.includes("distance between")) {
      return {
        q: `Find the distance between ${y} and ${x} on the number line. Then find the distance between ${z} and ${-z}.`,
        a: `|${x}−(${y})| = ${Math.abs(x - y)}. |${z}−(${-z})| = ${Math.abs(2 * z)}.`,
      };
    }
    if (t.includes("coordinate thinking")) {
      return {
        q: `Starting at 0 on a horizontal line, move ${x} units right, then ${n.b} units left. Where do you end? Relate to signed numbers.`,
        a: `End at ${x - n.b}. Right = positive; left = negative.`,
      };
    }
    if (t.includes("comparing rational")) {
      return {
        q: `Compare −${n.a}.${n.b} and −${n.c}.${n.g}. Which is greater? Remember: with negatives, farther right is greater.`,
        a: `Greater (closer to zero / farther right): ${-Number(`${n.a}.${n.b}`) > -Number(`${n.c}.${n.g}`) ? `−${n.a}.${n.b}` : `−${n.c}.${n.g}`}.`,
      };
    }
    if (t.includes("stories")) {
      return {
        q: `Write a one-sentence story for ${y} dollars in an account (debt/credit) and for a temperature of ${z}°F. Then write a question that requires comparing those signed values.`,
        a: `Sample: “Account balance ${y} means ${y < 0 ? "overdrawn/debt" : "credit"}.” Temperature story for ${z}°F. Comparison question should ask which is colder/higher/etc.`,
      };
    }
    return {
      q: `Review: Order ${y}, ${z}, ${x}; compute |${y}| + |${z}|.`,
      a: `Order ${[y, z, x].sort((a, b) => a - b).join(", ")}. |${y}|+|${z}| = ${Math.abs(y) + Math.abs(z)}.`,
    };
  });
}

function expressions(title, seed) {
  const t = title.toLowerCase();
  return six((i) => {
    const n = nset(seed + ":x" + i, 2 + i);
    const k = n.a;
    const m = n.b;

    if (t.includes("what is a variable")) {
      return {
        q: `Let p = number of posters printed. Write an expression for “${k} more than p” and for “${m} times p.” If p = ${n.c}, evaluate both.`,
        a: `p+${k}; ${m}p. Values: ${n.c + k}; ${m * n.c}.`,
      };
    }
    if (t.includes("writing algebraic")) {
      return {
        q: `Translate: “${k} less than twice a number n” and “the quotient of a number y and ${m}, plus ${n.c}.”`,
        a: `2n − ${k}; y/${m} + ${n.c}.`,
      };
    }
    if (t.includes("evaluating")) {
      return {
        q: `Evaluate 3x + ${k} when x = ${m}, and ${m}(y − ${n.c}) when y = ${n.f}. Show substitution.`,
        a: `3(${m})+${k} = ${3 * m + k}. ${m}(${n.f}−${n.c}) = ${m * (n.f - n.c)}.`,
      };
    }
    if (t.includes("terms") || t.includes("coefficients")) {
      return {
        q: `In 5x + ${k} − 2y, name the terms, the coefficients of x and y, and the constant term.`,
        a: `Terms: 5x, ${k}, −2y. Coeff of x: 5; of y: −2; constant: ${k}.`,
      };
    }
    if (t.includes("like terms")) {
      return {
        q: `Simplify 4x + ${k} + 2x − ${m} + 3y by combining like terms.`,
        a: `(4x+2x) + 3y + (${k}−${m}) = 6x + 3y + ${k - m}.`,
      };
    }
    if (t.includes("distributive")) {
      return {
        q: `Expand ${k}(x + ${m}) and ${n.c}(2y − ${k}). Then write an equivalent factored form for 6x + 15.`,
        a: `${k}x + ${k * m}; ${2 * n.c}y − ${n.c * k}. 6x+15 = 3(2x+5).`,
      };
    }
    if (t.includes("equivalent expressions")) {
      return {
        q: `Are 2(x + ${k}) and 2x + ${2 * k} equivalent? Test with x = ${m}. Are 2x + ${k} and 2(x + ${k}) equivalent?`,
        a: `First pair: yes (distributive). Second: no — 2(x+${k})=2x+${2 * k}.`,
      };
    }
    if (t.includes("diagrams")) {
      return {
        q: `A rectangle has length x+${k} and width ${m}. Write expressions for perimeter and area.`,
        a: `P = 2(x+${k}+${m}) = 2x + ${2 * (k + m)}; A = ${m}(x+${k}) = ${m}x + ${m * k}.`,
      };
    }
    if (t.includes("tables to")) {
      return {
        q: `A table shows input n: 1,2,3 and output: ${k + m}, ${k + 2 * m}, ${k + 3 * m}. Write an expression for the output in terms of n.`,
        a: `Output = ${m}n + ${k} (check each row).`,
      };
    }
    return {
      q: `Review: Simplify 3(x + ${k}) + 2x and evaluate at x = ${m}.`,
      a: `3x + ${3 * k} + 2x = 5x + ${3 * k}; at x=${m}: ${5 * m + 3 * k}.`,
    };
  });
}

function equations(title, seed) {
  const t = title.toLowerCase();
  return six((i) => {
    const n = nset(seed + ":q" + i, 3 + i);
    const a = n.a;
    const b = n.b;

    if (t.includes("equations vs")) {
      return {
        q: `Classify each as expression or equation: (1) 3x+${a}  (2) 3x+${a}=${b}  (3) x/${a}. Explain the difference in one sentence.`,
        a: `(1) expression (2) equation (3) expression. Equations assert equality/balance; expressions name a value.`,
      };
    }
    if (t.includes("addition and subtraction")) {
      return {
        q: `Solve x + ${a} = ${a + b} and y − ${b} = ${a}. Check each solution.`,
        a: `x = ${b}; check ${b}+${a}=${a + b}. y = ${a + b}; check ${a + b}−${b}=${a}.`,
      };
    }
    if (t.includes("multiplication and division")) {
      return {
        q: `Solve ${a}x = ${a * b} and x/${b} = ${a}. Show inverse operations.`,
        a: `x = ${b}; x = ${a * b}.`,
      };
    }
    if (t.includes("modeling with one-step")) {
      return {
        q: `A club has some members; after ${a} join, there are ${a + b}. Write and solve an equation for the starting number. Context: club signup.`,
        a: `x + ${a} = ${a + b} → x = ${b}.`,
      };
    }
    if (t.includes("what is an inequality")) {
      return {
        q: `Write an inequality for “at least ${a} points” and “fewer than ${b} fouls.” Which numbers satisfy n > ${a} from {${a - 1}, ${a}, ${a + 1}, ${a + 2}}?`,
        a: `points ≥ ${a}; fouls < ${b}. Satisfy n>${a}: ${a + 1}, ${a + 2}.`,
      };
    }
    if (t.includes("graphing inequalities")) {
      return {
        q: `Graph x ≥ ${a} and x < ${b} on a number line (describe open/closed circles and shading direction).`,
        a: `x≥${a}: closed at ${a}, shade right. x<${b}: open at ${b}, shade left.`,
      };
    }
    if (t.includes("writing inequalities from")) {
      return {
        q: `“A ride allows riders under ${b + 10} inches tall” and “you need more than ${a} tickets.” Write inequalities for height h and tickets t.`,
        a: `h < ${b + 10}; t > ${a}.`,
      };
    }
    if (t.includes("checking solutions")) {
      return {
        q: `Which of {${a}, ${b}, ${a + b}} satisfy 2x + 1 ≤ ${2 * b + 1}? Show tests.`,
        a: `Test each: solutions are those with 2x+1 ≤ ${2 * b + 1} ⇒ x ≤ ${b}. So values ≤ ${b} from the set.`,
      };
    }
    if (t.includes("mistakes")) {
      return {
        q: `A student solves x − ${a} = ${b} by writing x = ${b} − ${a}. Correct and name the inverse-operation error.`,
        a: `Correct: x = ${b + a}. Error: subtracted instead of adding ${a} to both sides.`,
      };
    }
    return {
      q: `Review: Solve ${a}x = ${a * (b + 1)} and graph x > ${b} (describe).`,
      a: `x = ${b + 1}. Graph: open circle at ${b}, shade right.`,
    };
  });
}

function plane(title, seed) {
  const t = title.toLowerCase();
  return six((i) => {
    const n = nset(seed + ":a" + i, 3 + i);
    const base = n.a + 2;
    const height = n.b + 1;

    if (t.includes("area meaning") || t.includes("square units")) {
      return {
        q: `A rectangle is covered by ${base} rows of ${height} unit squares. What is the area? Why are units “square ${pick(["cm", "in", "ft"], seed + i)}”?`,
        a: `Area = ${base * height} square units. Square units measure covering/filling a 2D region.`,
      };
    }
    if (t.includes("rectangles and parallelograms") || t.includes("parallelogram")) {
      return {
        q: `Find the area of a parallelogram with base ${base} cm and perpendicular height ${height} cm. Why must height be perpendicular?`,
        a: `A = ${base * height} cm². Slanted side is not height; perpendicular distance is.`,
      };
    }
    if (t.includes("triangles")) {
      return {
        q: `A triangle has base ${base} in and height ${height} in. Find the area. How does it relate to a parallelogram with the same base and height?`,
        a: `A = ½×${base}×${height} = ${(base * height) / 2} in². Triangle is half that parallelogram.`,
      };
    }
    if (t.includes("choosing base")) {
      return {
        q: `A triangle is drawn with a horizontal side ${base} and a tilted side ${base + 2}. A dashed perpendicular to the horizontal side has length ${height}. Which length is a valid height for base ${base}?`,
        a: `Height = ${height} (perpendicular to the chosen base ${base}). ${base + 2} is a side, not necessarily height.`,
      };
    }
    if (t.includes("trapezoid")) {
      return {
        q: `A trapezoid has parallel sides ${base} and ${base + 4} and height ${height}. Find area using average of bases × height.`,
        a: `A = ½(${base}+${base + 4})×${height} = ${((2 * base + 4) * height) / 2}.`,
      };
    }
    if (t.includes("composite")) {
      return {
        q: `An L-shaped patio is a ${base + 6}×${height + 4} rectangle with a ${base}×${height} rectangle cut from a corner. Find the remaining area.`,
        a: `Big − cut = ${(base + 6) * (height + 4) - base * height}.`,
      };
    }
    if (t.includes("perimeter")) {
      return {
        q: `A rectangle is ${base} by ${height}. Find perimeter and area. A student says “area is ${2 * (base + height)}.” What did they confuse?`,
        a: `P = ${2 * (base + height)}; A = ${base * height}. Student reported perimeter as area.`,
      };
    }
    return {
      q: `Review: Area of triangle base ${base} height ${height}; area of rectangle ${base} by ${height + 2}.`,
      a: `Triangle ${(base * height) / 2}; rectangle ${base * (height + 2)}.`,
    };
  });
}

function coordinate(title, seed) {
  const t = title.toLowerCase();
  return six((i) => {
    const n = nset(seed + ":c" + i, 2 + i);
    const x = n.a - 5;
    const y = n.b - 4;

    if (t.includes("axes") || t.includes("ordered pairs")) {
      return {
        q: `Plot (${x}, ${y}) and (${y}, ${x}). Are they the same point? Name the x- and y-coordinates of each.`,
        a: `Different unless x=y. First: x=${x}, y=${y}. Second: x=${y}, y=${x}.`,
      };
    }
    if (t.includes("four quadrants")) {
      return {
        q: `Name the quadrant (or axis) for (${n.a}, ${-n.b}), (${-n.a}, ${n.b}), (${-n.a}, ${-n.b}), and (${n.a}, 0).`,
        a: `QIV; QII; QIII; on x-axis (not a quadrant).`,
      };
    }
    if (t.includes("reflecting")) {
      return {
        q: `Reflect (${x}, ${y}) across the x-axis and across the y-axis. Give both image coordinates.`,
        a: `Across x-axis: (${x}, ${-y}). Across y-axis: (${-x}, ${y}).`,
      };
    }
    if (t.includes("distances") || t.includes("horizontal and vertical")) {
      return {
        q: `Find the distance between (${x}, ${y}) and (${x}, ${y + n.c}) (vertical). Then between (${x}, ${y}) and (${x + n.a}, ${y}) (horizontal).`,
        a: `Vertical distance ${Math.abs(n.c)}; horizontal ${Math.abs(n.a)}.`,
      };
    }
    if (t.includes("polygons on")) {
      return {
        q: `Vertices (0,0), (${n.a},0), (${n.a},${n.b}), (0,${n.b}) form a rectangle. Find side lengths and area.`,
        a: `Sides ${n.a} and ${n.b}; area ${n.a * n.b}.`,
      };
    }
    if (t.includes("stories")) {
      return {
        q: `A map uses (0,0) at school. The library is (${n.a}, ${n.b}) and the park is (${n.a}, ${-n.c}). How far is library to park (vertical path)?`,
        a: `Distance |${n.b}−(${-n.c})| = ${n.b + n.c} blocks (same x).`,
      };
    }
    if (t.includes("tables to graphs")) {
      return {
        q: `Ratio table x: 1,2,3 and y: ${n.a},${2 * n.a},${3 * n.a}. Plot the three points. What pattern do you see?`,
        a: `Points (1,${n.a}), (2,${2 * n.a}), (3,${3 * n.a}); y = ${n.a}x (line through origin).`,
      };
    }
    return {
      q: `Review: Quadrant of (${-n.a},${n.b}); distance from (${0},${n.b}) to (${0},${-n.c}).`,
      a: `QII; distance ${n.b + n.c}.`,
    };
  });
}

function solid3d(title, seed) {
  const t = title.toLowerCase();
  return six((i) => {
    const n = nset(seed + ":s" + i, 2 + i);
    const l = n.a + 1;
    const w = n.b;
    const h = n.c;

    if (t.includes("prisms and pyramids") || t.includes("overview")) {
      return {
        q: `A rectangular prism has how many faces, edges, and vertices? A square pyramid has how many faces? (Count carefully.)`,
        a: `Prism: 6 faces, 12 edges, 8 vertices. Square pyramid: 5 faces (4 triangles + 1 square).`,
      };
    }
    if (t.includes("nets")) {
      return {
        q: `For a ${l}×${w}×${h} rectangular prism, describe a valid net (list face sizes). Name one arrangement that would NOT fold into the prism.`,
        a: `Valid net uses faces: two ${l}×${w}, two ${l}×${h}, two ${w}×${h} without overlapping when folded. Invalid: e.g. more than 4 faces in a row that overlap when folded.`,
      };
    }
    if (t.includes("surface area from nets") && !t.includes("formula")) {
      return {
        q: `Using a net, find surface area of a ${l}×${w}×${h} prism (sum all six face areas).`,
        a: `SA = 2(${l}×${w} + ${l}×${h} + ${w}×${h}) = ${2 * (l * w + l * h + w * h)}.`,
      };
    }
    if (t.includes("surface area formula")) {
      return {
        q: `Use SA = 2lw+2lh+2wh for l=${l}, w=${w}, h=${h}. Show each pair of faces.`,
        a: `2(${l}*${w})+2(${l}*${h})+2(${w}*${h}) = ${2 * (l * w + l * h + w * h)}.`,
      };
    }
    if (t.includes("volume as filling")) {
      return {
        q: `How many 1×1×1 cubes pack a ${l}×${w}×${h} box? Why are units cubic?`,
        a: `${l * w * h} unit cubes. Cubic units measure 3D space/filling.`,
      };
    }
    if (t.includes("volume of rectangular")) {
      return {
        q: `Find volume of a prism with base area ${l * w} square cm and height ${h} cm. Also compute l·w·h with l=${l}, w=${w}, h=${h}.`,
        a: `V = Bh = ${l * w * h} cm³. Same as ${l}×${w}×${h}.`,
      };
    }
    if (t.includes("surface area vs volume")) {
      return {
        q: `You wrap a ${l}×${w}×${h} gift (ignore overlap). Do you need surface area or volume? You fill the same box with packing peanuts — which measure?`,
        a: `Wrapping → surface area ${2 * (l * w + l * h + w * h)}. Filling → volume ${l * w * h}.`,
      };
    }
    // fix the buggy return above for formula case - handled in regenerate
    if (t.includes("review")) {
      return {
        q: `Review: SA and volume for ${l}×${w}×${h} prism.`,
        a: `SA=${2 * (l * w + l * h + w * h)}; V=${l * w * h}.`,
      };
    }
    return {
      q: `Find volume and surface area of a ${l}×${w}×${h} rectangular prism.`,
      a: `V=${l * w * h}; SA=${2 * (l * w + l * h + w * h)}.`,
    };
  });
}

function stats(title, seed) {
  const t = title.toLowerCase();
  return six((i) => {
    const n = nset(seed + ":d" + i, 2 + i);
    const data = [n.a, n.b, n.c, n.a + 1, n.b - 1, n.g].map((v) => Math.max(1, v));

    if (t.includes("statistical questions")) {
      return {
        q: `Which is statistical (anticipates variability)? (A) “How tall is our flagpole?” (B) “How tall are the Grade 6 students in advisory?” Explain.`,
        a: `(B) is statistical — heights vary across students. (A) has a single measured answer.`,
      };
    }
    if (t.includes("collecting") || t.includes("organizing")) {
      return {
        q: `Make a tally table idea for favorite lunch among {pizza, salad, sandwich} after surveying ${8 + i} classmates. Why might surveying only the basketball team be unfair?`,
        a: `Tallies count each choice. Basketball-only sample may skew toward certain preferences — not representative of all Grade 6.`,
      };
    }
    if (t.includes("dot plots")) {
      return {
        q: `Data (hours of homework): ${data.join(", ")}. Sketch a letter-style dot plot description (list stack heights per value). Where is a cluster?`,
        a: `Count frequency per distinct value in [${data.join(", ")}]; cluster = values with most dots.`,
      };
    }
    if (t.includes("histogram")) {
      return {
        q: `For data ${data.join(", ")}, suggest bins of width 2 starting at ${Math.min(...data)}. Which bin would hold the most points (estimate by listing)?`,
        a: `Assign each value to bins [min,min+2), etc.; the fullest bin depends on the list ${data.join(", ")}.`,
      };
    }
    if (t.includes("mean")) {
      const sum = data.reduce((s, v) => s + v, 0);
      return {
        q: `Find the mean of ${data.join(", ")}. Show sum ÷ count. What does the mean represent?`,
        a: `Mean = ${sum}/${data.length} = ${(sum / data.length).toFixed(2)}. Fair-share / balance point.`,
      };
    }
    if (t.includes("median")) {
      const sorted = [...data].sort((a, b) => a - b);
      const med =
        sorted.length % 2
          ? sorted[(sorted.length - 1) / 2]
          : (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
      return {
        q: `Find the median of ${data.join(", ")}. Order first. When would median be more helpful than mean?`,
        a: `Ordered ${sorted.join(", ")}; median ${med}. Median resists extreme outliers better than mean.`,
      };
    }
    if (t.includes("range") || t.includes("mad") || t.includes("spread")) {
      const sorted = [...data].sort((a, b) => a - b);
      return {
        q: `For ${data.join(", ")}, find the range. Then find each deviation from the mean ≈ ${(data.reduce((s, v) => s + v, 0) / data.length).toFixed(1)} and describe spread in words.`,
        a: `Range = ${sorted[sorted.length - 1] - sorted[0]}. Larger range → more spread; MAD averages absolute deviations from the mean.`,
      };
    }
    if (t.includes("shape of")) {
      return {
        q: `If a dot plot piles on the left with a long tail right, is it left-skewed, right-skewed, or symmetric? Sketch what symmetric would look like for ${data.length} points.`,
        a: `Long tail right → right-skewed. Symmetric: balanced piles on both sides of center.`,
      };
    }
    if (t.includes("comparing distributions")) {
      return {
        q: `Class A scores: ${data.slice(0, 4).join(", ")}. Class B: ${data.slice(2).join(", ")}. Compare centers (means) in one sentence and spreads (ranges) in one sentence.`,
        a: `Compute means and ranges for each subset; state which class has higher center and which has larger spread.`,
      };
    }
    return {
      q: `Review: Mean and range of ${data.join(", ")}.`,
      a: `Mean ${(data.reduce((s, v) => s + v, 0) / data.length).toFixed(2)}; range ${Math.max(...data) - Math.min(...data)}.`,
    };
  });
}
