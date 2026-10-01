/** Independent practice for Grade 10 Biology & Chemistry. Returns 6 {q,a}. */
function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < String(s).length; i++) {
    h ^= String(s).charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function n(seed, i) {
  const h = hash(seed + i);
  return { a: 2 + (h % 6), b: 3 + ((h >> 3) % 5), c: 10 + (h % 40) };
}

export function sci10IndepPractice(unitN, lessonTitle, seed) {
  const t = lessonTitle.toLowerCase();
  const items = [];
  for (let i = 1; i <= 6; i++) {
    const x = n(seed, i);
    let q, a;
    if (unitN <= 2 || /cell|organelle|membrane|macromolecule|biomolecule/.test(t)) {
      q = `A cell model shows a membrane separating inside/outside. Explain one job of the membrane and predict what happens if a channel protein for nutrient X stops working. Use numbers only if helpful (relative rates ${x.a}:${x.b}).`;
      a = `Membrane controls passage; blocked channels reduce uptake of X; evidence should mention selective permeability, not “cells get sad.”`;
    } else if (unitN === 3 || /photo|respir|ATP|energy|enzyme/.test(t)) {
      q = `Compare inputs/outputs for the process in “${lessonTitle}.” Identify where energy is stored or released, and name one measurement you would collect in a lab (${x.c} minutes trial).`;
      a = `Correct inputs/outputs; energy location named (bonds/ATP/light); measurement is observable (gas, mass, temperature proxy) with controls.`;
    } else if (unitN === 4 || /gene|DNA|Mendel|heredity|meiosis|mitosis/.test(t)) {
      q = `A trait shows ${x.a} dominant : ${x.b} recessive in a simple Mendelian cross prediction discussion. Explain what the ratio claims — and one reason a real pedigree might differ.`;
      a = `Ratio is a probability model for large samples; real families are small, traits can be polygenic, environment can matter.`;
    } else if (unitN === 5 || /evolution|selection|speciation|fossil|phylogen/.test(t)) {
      q = `A population of beetles varies in shell thickness. Birds eat thinner shells more often. Predict allele-frequency direction over generations and name the mechanism.`;
      a = `Thicker-shell alleles increase if heritable; mechanism = natural selection (not individuals “trying” to evolve).`;
    } else if (unitN === 6 || /ecosystem|carbon|population|biome|biodiversity/.test(t)) {
      q = `Sketch a mini food web with 4 organisms. Remove one species and predict two ripple effects. Cite energy-flow direction.`;
      a = `Arrows point toward consumers; removals cause cascading effects; energy transfer is inefficient (not recycled 100% as usable energy).`;
    } else if (unitN <= 8 || /atom|bond|mole|stoich|reaction|periodic|electron/.test(t)) {
      q = `For a simple reaction context tied to “${lessonTitle},” balance a skeleton equation idea (conceptual counts ${x.a} and ${x.b}) and state what is conserved.`;
      a = `Atoms conserved; coefficients balance; mass conserved in a closed system; students show atom inventory.`;
    } else {
      q = `Write a CER (claim-evidence-reasoning) paragraph applying “${lessonTitle}” to a school-lab or everyday phenomenon. Include one quantitative or comparative observation.`;
      a = `Claim is specific; evidence is observable; reasoning links to the unit model without slogans.`;
    }
    items.push({ q: `Practice ${i}: ${q}`, a });
  }
  return items;
}
