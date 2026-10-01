/**
 * Real Independent-practice banks for Grade 10 Algebra & Beyond (Algebra II sequence).
 * Returns 6 {q,a} items per lesson.
 */
function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < String(s).length; i++) {
    h ^= String(s).charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function nset(seed, base = 2) {
  const h = hash(seed);
  const a = base + (h % 7);
  const b = base + 1 + ((h >> 3) % 6);
  const c = base + ((h >> 6) % 5);
  return { a, b, c, d: a + b, e: a * b, f: 2 + (h % 5), g: 3 + (h % 4) };
}

export function math10IndepPractice(unitN, lessonTitle, seed) {
  const t = lessonTitle.toLowerCase();
  const items = [];
  for (let i = 1; i <= 6; i++) {
    items.push(buildItem(unitN, t, seed, i));
  }
  return items;
}

function buildItem(unitN, t, seed, i) {
  const n = nset(seed + ":p" + i, 2 + (i % 3));
  const a = n.a, b = n.b, c = n.c, k = n.f;

  // Unit-aware defaults with title overrides
  if (unitN === 1 || /linear|slope|system|inequal/.test(t)) {
    if (/system|two equations|elimination|substitution/.test(t)) {
      const x = a, y = b;
      return {
        q: `Solve the system: x + y = ${a + b}, ${k}x − y = ${k * a - b}. Show substitution or elimination.`,
        a: `x = ${a}, y = ${b}. Check: ${a}+${b}=${a + b}; ${k}(${a})−${b}=${k * a - b}.`,
      };
    }
    if (/inequal/.test(t)) {
      return {
        q: `Solve and graph on a number line: ${k}x + ${b} ${i % 2 ? ">" : "≥"} ${k * a + b}. State the solution in interval notation.`,
        a: i % 2
          ? `x > ${a}; interval (${a}, ∞).`
          : `x ≥ ${a}; interval [${a}, ∞).`,
      };
    }
    if (/absolute/.test(t)) {
      return {
        q: `Solve |x − ${a}| = ${b}. List both solutions and check each.`,
        a: `x = ${a + b} or x = ${a - b}. Both satisfy |x−${a}|=${b}.`,
      };
    }
    const m = k, b0 = c;
    return {
      q: `A line has slope ${m} and y-intercept ${b0}. Write y = mx + b, then find y when x = ${a}.`,
      a: `y = ${m}x + ${b0}; when x=${a}, y = ${m * a + b0}.`,
    };
  }

  if (unitN === 2 || /quadratic|vertex|factor|discriminant|completing/.test(t)) {
    if (/formula|discriminant/.test(t)) {
      // (x-a)(x-b)=0 → x^2-(a+b)x+ab
      const A = 1, B = -(a + b), C = a * b;
      const disc = (a - b) * (a - b);
      return {
        q: `For ${A}x² + (${B})x + ${C} = 0, compute the discriminant and the roots.`,
        a: `Discriminant = ${disc}. Roots x = ${a} and x = ${b}.`,
      };
    }
    if (/complet/.test(t)) {
      const h = a, k0 = b;
      return {
        q: `Rewrite x² − ${2 * h}x + ${h * h + k0} by completing the square. Name the vertex.`,
        a: `(x − ${h})² + ${k0}; vertex (${h}, ${k0}).`,
      };
    }
    if (/factor/.test(t)) {
      return {
        q: `Factor completely: x² − ${a + b}x + ${a * b}. Then state the zeros.`,
        a: `(x − ${a})(x − ${b}) = 0 ⇒ x = ${a}, x = ${b}.`,
      };
    }
    if (/vertex|forms|graph/.test(t)) {
      return {
        q: `A parabola is y = (x − ${a})² + ${b}. State vertex, axis of symmetry, and whether it opens up or down.`,
        a: `Vertex (${a}, ${b}); axis x = ${a}; opens upward (leading coefficient +1).`,
      };
    }
    return {
      q: `Expand (x − ${a})(x − ${b}) and identify a, b, c in ax² + bx + c.`,
      a: `x² − ${a + b}x + ${a * b}; a=1, b=${-(a + b)}, c=${a * b}.`,
    };
  }

  if (unitN === 3 || /polynomial|degree|leading|synthetic|remainder/.test(t)) {
    if (/synthetic|remainder|factor theorem/.test(t)) {
      return {
        q: `Use synthetic division to divide x³ − ${a}x² + ${b}x − ${c} by (x − 1). State the remainder.`,
        a: `Evaluate at x=1 (Remainder Theorem): 1 − ${a} + ${b} − ${c} = ${1 - a + b - c}. Remainder = ${1 - a + b - c}.`,
      };
    }
    return {
      q: `Add (2x² − ${a}x + ${b}) + (x² + ${c}x − 1). State degree and leading coefficient of the sum.`,
      a: `3x² + (${c - a})x + ${b - 1}; degree 2; leading coefficient 3.`,
    };
  }

  if (unitN === 4 || /rational expression|complex fraction|extraneous/.test(t)) {
    if (/equation|extraneous/.test(t)) {
      return {
        q: `Solve (x + ${a})/(x − ${b}) = 2. Check for extraneous solutions (domain x ≠ ${b}).`,
        a: `x + ${a} = 2(x − ${b}) ⇒ x + ${a} = 2x − ${2 * b} ⇒ x = ${a + 2 * b}. Valid if ≠ ${b}.`,
      };
    }
    return {
      q: `Simplify (${k}x²)/(${k}x) for x ≠ 0. State the simplified expression and excluded value.`,
      a: `x (for x ≠ 0). Excluded: x = 0.`,
    };
  }

  if (unitN === 5 || /radical|rational exponent|root/.test(t)) {
    if (/equation/.test(t)) {
      return {
        q: `Solve √(x + ${a}) = ${b}. Check the solution in the original equation.`,
        a: `x + ${a} = ${b * b} ⇒ x = ${b * b - a}. Check: √(${b * b}) = ${b}.`,
      };
    }
    return {
      q: `Rewrite ${a * a}x⁴ under a square root as a simplified radical (assume x ≥ 0).`,
      a: `√(${a * a}x⁴) = ${a}x².`,
    };
  }

  if (unitN === 6 || /exponential|logarithm|growth|decay/.test(t)) {
    if (/log/.test(t)) {
      return {
        q: `Evaluate log_${k}(${k ** 3}) and rewrite log_${k}(x) = ${a} as an exponential equation.`,
        a: `log_${k}(${k ** 3}) = 3; x = ${k}^${a} = ${k ** a}.`,
      };
    }
    return {
      q: `A balance starts at $${100 * a} and grows by factor ${k} each year. Write A(t) = A0·b^t and find A(2).`,
      a: `A(t) = ${100 * a}·${k}^t; A(2) = ${100 * a * k * k}.`,
    };
  }

  if (unitN === 7 || /sequence|series|arithmetic|geometric/.test(t)) {
    if (/geometric/.test(t)) {
      return {
        q: `Geometric sequence: a1 = ${a}, common ratio r = ${k}. Find a3 and the explicit formula an.`,
        a: `a3 = ${a * k * k}; an = ${a}·${k}^(n−1).`,
      };
    }
    return {
      q: `Arithmetic sequence: a1 = ${a}, common difference d = ${b}. Find a5 and an.`,
      a: `a5 = ${a + 4 * b}; an = ${a} + (n−1)·${b}.`,
    };
  }

  if (unitN === 8 || /trig|sine|cosine|tangent|right triangle/.test(t)) {
    return {
      q: `In a right triangle, opposite = ${3 * a}, adjacent = ${4 * a}. Find sin, cos, and tan of the acute angle opposite the ${3 * a} side (exact ratios).`,
      a: `sin = ${3 * a}/${5 * a} = 3/5; cos = 4/5; tan = 3/4 (hypotenuse ${5 * a} by 3-4-5).`,
    };
  }

  if (unitN === 9 || /probability|statistic|mean|deviation|normal/.test(t)) {
    if (/probability|independent|compound/.test(t)) {
      return {
        q: `P(A) = ${a}/${a + b}, P(B) = ${b}/${a + b}, independent. Find P(A and B) as a fraction in lowest terms if possible.`,
        a: `P(A∩B) = (${a}/${a + b})·(${b}/${a + b}) = ${a * b}/${(a + b) * (a + b)}.`,
      };
    }
    const vals = [a, b, c, a + 1, b + 2];
    const mean = vals.reduce((s, v) => s + v, 0) / vals.length;
    return {
      q: `Data set: ${vals.join(", ")}. Compute the mean.`,
      a: `Mean = ${mean}.`,
    };
  }

  // Unit 10 modeling / functions
  return {
    q: `A quantity starts at ${a * 10} and changes by ${i % 2 ? "+" : "×"}${k} each step. Write a recursive rule for the first three terms.`,
    a: i % 2
      ? `a1=${a * 10}; a_{n+1}=a_n+${k}. Terms: ${a * 10}, ${a * 10 + k}, ${a * 10 + 2 * k}.`
      : `a1=${a * 10}; a_{n+1}=${k}·a_n. Terms: ${a * 10}, ${a * 10 * k}, ${a * 10 * k * k}.`,
  };
}
