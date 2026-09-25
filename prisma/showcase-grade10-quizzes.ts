/**
 * Authored section-quiz banks for Grade 10 showcase courses.
 * Seed MUST use these for Math / ELA / Bible showcases — never sectionQuestionsFromTopics.
 */
import { authoredQuestions, type AuthoredItem, type QuestionSeed } from "./assessments";

function mcq(
  prompt: string,
  correct: string,
  d1: string,
  d2: string,
  d3: string,
  explanation: string
): AuthoredItem {
  return { prompt, correct, distractors: [d1, d2, d3], explanation };
}

const MATH_SECTION_QUIZZES: AuthoredItem[][] = [
[
      mcq(
        "Slope of the line through (0, 3) and (4, 11) is…",
        "2",
        "1/2",
        "8",
        "−2",
        "Δy/Δx = 8/4 = 2"
      ),
      mcq(
        "In y = −5x + 2, which value is the slope?",
        "−5",
        "2",
        "5",
        "−2",
        "m is the coefficient of x"
      ),
      mcq(
        "Point-slope form for slope 3 through (1, −4) is…",
        "y + 4 = 3(x − 1)",
        "y − 4 = 3(x − 1)",
        "y = 3x − 1",
        "x + 4 = 3(y − 1)",
        "y − y1 = m(x − x1)"
      ),
      mcq(
        "A 2×2 system with parallel distinct lines has…",
        "No solution",
        "Exactly one solution",
        "Infinitely many solutions",
        "Two solutions",
        "Parallel distinct → empty intersection"
      ),
      mcq(
        "Solving x + y = 7 and y = 2x by substitution yields…",
        "x = 7/3, y = 14/3",
        "x = 7, y = 0",
        "x = 2, y = 5",
        "x = 0, y = 7",
        "7/3 + 14/3 = 7"
      ),
      mcq(
        "Elimination is most natural when…",
        "Coefficients of one variable are opposites or easy multiples",
        "Both equations are already solved for y",
        "The system is nonlinear",
        "You only have a graph",
        "Aligned coefficients cancel by addition"
      ),
      mcq(
        "Solve −2x + 5 > 1 and express in interval notation.",
        "x < 2 → (−∞, 2)",
        "x > 2 → (2, ∞)",
        "x ≤ 2 → (−∞, 2]",
        "x ≥ 2 → [2, ∞)",
        "−2x > −4 → flip inequality when dividing by −2"
      ),
      mcq(
        "Which statement is true of a closed endpoint on a number-line graph of an inequality?",
        "The endpoint is included (≤ or ≥)",
        "The endpoint is always excluded",
        "It means no solution",
        "It only appears for absolute-value equations",
        "Filled circle / bracket means included"
      ),
      mcq(
        "Equivalent linear forms represent…",
        "The same set of points",
        "Different parallel lines",
        "Only the y-intercept",
        "A quadratic relationship",
        "Algebraically equivalent forms graph identically"
      ),
      mcq(
        "If a linear model’s rate of change is not constant, then…",
        "A linear model is inappropriate",
        "Slope is still well-defined as one number",
        "Standard form is required",
        "The y-intercept must be zero",
        "Linearity needs constant Δy/Δx"
      )
    ],
[
      mcq(
        "|x − 3| = 5 has solutions…",
        "x = 8 or x = −2",
        "x = 8 only",
        "x = −2 only",
        "x = 2 or x = 8",
        "Distance from 3 is 5"
      ),
      mcq(
        "|2x + 1| < 7 means…",
        "−7 < 2x + 1 < 7",
        "2x + 1 > 7 or 2x + 1 < −7",
        "2x + 1 = ±7 only",
        "x has no real solutions",
        "Strict inequality of absolute value → compound AND"
      ),
      mcq(
        "Vertex form of a quadratic highlights…",
        "Vertex (h, k) and stretch factor a",
        "Only the y-intercept",
        "Complex roots only",
        "The discriminant alone",
        "y = a(x − h)^2 + k"
      ),
      mcq(
        "In y = (x − 2)(x + 6), the zeros are…",
        "x = 2 and x = −6",
        "x = −2 and x = 6",
        "x = 2 and x = 6",
        "x = −2 and x = −6",
        "Zero product property"
      ),
      mcq(
        "Factored form is most helpful for…",
        "Reading zeros / x-intercepts",
        "Finding only the axis of symmetry without zeros",
        "Computing end behavior alone",
        "Naming the discriminant",
        "Factors show roots directly"
      ),
      mcq(
        "Factor x² − 9 completely over the reals:",
        "(x − 3)(x + 3)",
        "(x − 9)(x + 1)",
        "(x − 3)²",
        "Prime / irreducible",
        "Difference of squares"
      ),
      mcq(
        "To factor x² + 5x + 6, find integers that…",
        "Multiply to 6 and add to 5",
        "Multiply to 5 and add to 6",
        "Multiply to −6 and add to 5",
        "Divide 6 by 5",
        "Standard trinomial method"
      ),
      mcq(
        "If |ax + b| = c with c < 0, then…",
        "No real solutions",
        "Two real solutions always",
        "One real solution",
        "Infinitely many solutions",
        "Absolute value is never negative"
      ),
      mcq(
        "Standard form ax² + bx + c makes which feature easiest?",
        "Evaluating at x = 0 (y-intercept c)",
        "Reading the vertex without completing the square",
        "Naming complex conjugates instantly",
        "Factoring by grouping only",
        "c is f(0)"
      ),
      mcq(
        "A quadratic opens downward when…",
        "The leading coefficient a is negative",
        "a is positive",
        "The constant term is negative",
        "The discriminant is zero",
        "Sign of a controls opening"
      )
    ],
[
      mcq(
        "Quadratic formula for ax² + bx + c = 0 is…",
        "x = (−b ± √(b² − 4ac)) / (2a)",
        "x = (−b ± √(b² + 4ac)) / (2a)",
        "x = (b ± √(b² − 4ac)) / (2a)",
        "x = (−b ± √(b² − 4ac)) / a",
        "Standard formula"
      ),
      mcq(
        "If discriminant D = b² − 4ac = 0, the equation has…",
        "One real repeated root",
        "Two distinct real roots",
        "Two complex non-real roots",
        "No roots in any number system",
        "Perfect square under the radical"
      ),
      mcq(
        "D < 0 means…",
        "Two complex conjugate roots (no real roots)",
        "Two distinct real roots",
        "One real root",
        "Infinitely many roots",
        "Negative discriminant → non-real"
      ),
      mcq(
        "Completing the square on x² + 6x yields…",
        "x² + 6x + 9 = (x + 3)²",
        "x² + 6x + 6 = (x + 3)²",
        "x² + 6x + 3 = (x + 3)²",
        "(x + 6)²",
        "Half of 6 is 3; 3² = 9"
      ),
      mcq(
        "Vertex form from completing the square helps find…",
        "Vertex and minimum/maximum value",
        "Only the y-intercept",
        "Only complex roots",
        "The slope of a line",
        "Vertex is (h, k)"
      ),
      mcq(
        "Degree of (2x³ − x) + (x³ + 4) is…",
        "3",
        "4",
        "2",
        "1",
        "Leading terms 2x³ + x³"
      ),
      mcq(
        "(x + 2)(x² − 3) expands to…",
        "x³ + 2x² − 3x − 6",
        "x³ − 3x + 2",
        "x³ + 2x² − 6",
        "x² − 3x + 2",
        "Distribute carefully"
      ),
      mcq(
        "Leading term of −4x² · 5x³ is…",
        "−20x⁵",
        "−20x⁶",
        "20x⁵",
        "−9x⁵",
        "Multiply coefficients and add exponents"
      ),
      mcq(
        "When D > 0 and a perfect square (rational coeffs), roots are often…",
        "Two distinct rational or real roots (depending on coeffs)",
        "Always complex",
        "Always repeated",
        "Undefined",
        "Positive perfect-square D → nice real roots"
      ),
      mcq(
        "After completing the square, y = (x − 1)² + 4 has vertex…",
        "(1, 4)",
        "(−1, 4)",
        "(1, −4)",
        "(4, 1)",
        "Form a(x − h)² + k"
      )
    ],
[
      mcq(
        "First step often useful before factoring a polynomial is…",
        "Factor out a GCF",
        "Divide by the discriminant",
        "Take a logarithm",
        "Add the constant term to both sides",
        "GCF simplifies later factoring"
      ),
      mcq(
        "Factoring by grouping is designed for…",
        "Four-term polynomials that pair nicely",
        "Only monomials",
        "Only absolute-value equations",
        "Exponential models",
        "Group pairs → common binomial"
      ),
      mcq(
        "Simplify (x² − 9)/(x − 3) for x ≠ 3:",
        "x + 3",
        "x − 3",
        "x² − 3",
        "1",
        "Difference of squares then cancel"
      ),
      mcq(
        "Domain restriction for 1/(x − 5) is…",
        "x ≠ 5",
        "x ≠ 0",
        "x > 5",
        "x ≥ 5",
        "Denominator ≠ 0"
      ),
      mcq(
        "Multiply (2/x) · (x/4) for x ≠ 0:",
        "1/2",
        "2",
        "8/x²",
        "x/8",
        "Cancel x; 2/4 = 1/2"
      ),
      mcq(
        "When solving a rational equation, you must…",
        "Check for extraneous solutions that make a denominator zero",
        "Never clear denominators",
        "Ignore domain",
        "Square both sides always",
        "Clearing denoms can introduce invalid x"
      ),
      mcq(
        "LCD for 1/(x−1) and 1/(x+1) is…",
        "(x − 1)(x + 1)",
        "x − 1",
        "x + 1",
        "x²",
        "Product of distinct linear factors"
      ),
      mcq(
        "x/(x − 2) = 3 → after solving and checking…",
        "x = 3",
        "x = 2",
        "x = −3",
        "No solution",
        "x = 3(x−2) → x = 3x − 6 → 6 = 2x → x = 3; x≠2 OK"
      ),
      mcq(
        "A rational expression is simplified when…",
        "Numerator and denominator share no common polynomial factors",
        "Degree of numerator exceeds denominator",
        "It equals zero",
        "All variables cancel to 1 always",
        "Cancel only common factors"
      ),
      mcq(
        "Dividing by a fraction is equivalent to…",
        "Multiplying by its reciprocal",
        "Subtracting numerators",
        "Adding denominators",
        "Squaring both fractions",
        "a/b ÷ c/d = a/b · d/c"
      )
    ],
[
      mcq(
        "√(49) equals…",
        "7",
        "−7 only",
        "±7 as principal square root notation",
        "14",
        "Principal square root is non-negative"
      ),
      mcq(
        "Solve √(x − 1) = 4; valid solution is…",
        "x = 17",
        "x = 15",
        "x = 5",
        "x = −15",
        "Square: x − 1 = 16 → x = 17; check"
      ),
      mcq(
        "Extraneous roots appear in radical equations when…",
        "Squaring both sides creates solutions that fail the original",
        "The radicand is always positive",
        "You use the quadratic formula",
        "You simplify like radicals",
        "Always substitute back"
      ),
      mcq(
        "In A = A0 · (1.05)^t, the 1.05 is…",
        "A growth factor (5% growth per period)",
        "A decay factor",
        "The initial amount",
        "Time in years always",
        "b > 1 → growth"
      ),
      mcq(
        "If a quantity halves every 3 hours from 80, after 6 hours it is…",
        "20",
        "40",
        "10",
        "5",
        "Two half-lives: 80 → 40 → 20"
      ),
      mcq(
        "log_b(a) = c means…",
        "b^c = a",
        "a^c = b",
        "c^b = a",
        "b^a = c",
        "Log definition"
      ),
      mcq(
        "log_10(1000) equals…",
        "3",
        "2",
        "4",
        "100",
        "10^3 = 1000"
      ),
      mcq(
        "Domain of y = √(2x − 6) requires…",
        "x ≥ 3",
        "x > 0",
        "x ≤ 3",
        "All real x",
        "2x − 6 ≥ 0"
      ),
      mcq(
        "Simplify √(12):",
        "2√3",
        "3√2",
        "4√3",
        "√6",
        "√(4·3) = 2√3"
      ),
      mcq(
        "Exponential decay uses base b where…",
        "0 < b < 1",
        "b > 1",
        "b = 0",
        "b < 0",
        "Proper fraction base shrinks"
      )
    ],
[
      mcq(
        "f(x) = (x − 3)² + 1 relative to y = x² is…",
        "Shift right 3, up 1",
        "Shift left 3, up 1",
        "Shift right 3, down 1",
        "Reflect over x-axis",
        "Inside subtract → right; outside add → up"
      ),
      mcq(
        "y = −f(x) compared to y = f(x) is…",
        "Reflection across the x-axis",
        "Reflection across the y-axis",
        "Horizontal stretch",
        "Vertical shift up",
        "Negating outputs flips vertically"
      ),
      mcq(
        "Domain of f(x) = 1/(x + 2) is…",
        "All reals except x = −2",
        "All reals except x = 2",
        "x > −2",
        "x ≥ 0",
        "Denominator zero at −2"
      ),
      mcq(
        "If f(x) = 2x − 1, then f(3) equals…",
        "5",
        "6",
        "−1",
        "2",
        "2·3 − 1 = 5"
      ),
      mcq(
        "Range of y = |x| is…",
        "[0, ∞)",
        "(−∞, ∞)",
        "(−∞, 0]",
        "(0, ∞) excluding 0",
        "Absolute value ≥ 0"
      ),
      mcq(
        "To find an inverse of y = 2x + 4, swap and solve for y to get…",
        "y = (x − 4)/2",
        "y = 2x − 4",
        "y = x/2 + 4",
        "y = −2x + 4",
        "x = 2y + 4 → y = (x−4)/2"
      ),
      mcq(
        "f and f⁻¹ satisfy…",
        "(f ∘ f⁻¹)(x) = x on appropriate domains",
        "f(x) · f⁻¹(x) = 1 always",
        "f(x) + f⁻¹(x) = 0",
        "They have the same graph always",
        "Composition yields identity"
      ),
      mcq(
        "A vertical stretch by factor 3 of f is…",
        "y = 3f(x)",
        "y = f(3x)",
        "y = f(x) + 3",
        "y = f(x − 3)",
        "Outside multiply stretches vertically"
      ),
      mcq(
        "Function notation f(x) means…",
        "The output of f at input x",
        "f multiplied by x",
        "The inverse of x",
        "Only the y-intercept",
        "Evaluation, not multiplication"
      ),
      mcq(
        "Horizontal line test failing means…",
        "The function is not one-to-one (no inverse function on full domain)",
        "The function has no y-intercept",
        "Domain is empty",
        "Slope is zero only",
        "One-to-one needed for inverse function"
      )
    ],
[
      mcq(
        "In a right triangle, sin θ =…",
        "opposite / hypotenuse",
        "adjacent / hypotenuse",
        "opposite / adjacent",
        "hypotenuse / opposite",
        "SOH"
      ),
      mcq(
        "cos θ = adjacent/hypotenuse; if adj = 3 and hyp = 5, cos θ =…",
        "3/5",
        "4/5",
        "3/4",
        "5/3",
        "Direct ratio"
      ),
      mcq(
        "tan θ =…",
        "opposite / adjacent",
        "adjacent / opposite",
        "opposite / hypotenuse",
        "hypotenuse / adjacent",
        "TOA"
      ),
      mcq(
        "Arithmetic sequence with a1 = 4, d = 3: a5 equals…",
        "16",
        "15",
        "12",
        "19",
        "a_n = a1 + (n−1)d → 4 + 12 = 16"
      ),
      mcq(
        "Geometric sequence 2, 6, 18, … has common ratio…",
        "3",
        "2",
        "4",
        "1/3",
        "6/2 = 3"
      ),
      mcq(
        "Explicit formula for geometric a_n = a1 · r^(n−1) with a1 = 5, r = 2: a4 =…",
        "40",
        "20",
        "10",
        "80",
        "5 · 2³ = 40"
      ),
      mcq(
        "P(A and B) for independent events equals…",
        "P(A)·P(B)",
        "P(A)+P(B)",
        "P(A)−P(B)",
        "P(A)/P(B)",
        "Independence → multiply"
      ),
      mcq(
        "If P(A) = 0.4 and P(B|A) = 0.5, then P(A and B) =…",
        "0.2",
        "0.9",
        "0.1",
        "0.8",
        "0.4 · 0.5 = 0.2"
      ),
      mcq(
        "Two events that cannot both occur are…",
        "Mutually exclusive",
        "Independent",
        "Complementary only if probabilities sum to 2",
        "Geometric",
        "Disjoint outcomes"
      ),
      mcq(
        "If a right triangle has opposite = 5 and adjacent = 12, tan θ =…",
        "5/12",
        "12/5",
        "5/13",
        "13/5",
        "opp/adj"
      )
    ],
[
      mcq(
        "The median of 2, 5, 5, 9, 11 is…",
        "5",
        "2",
        "9",
        "6.4",
        "Middle value of ordered list"
      ),
      mcq(
        "IQR is…",
        "Q3 − Q1",
        "Max − min",
        "Mean − median",
        "σ²",
        "Interquartile range"
      ),
      mcq(
        "A histogram is best for…",
        "Showing distribution of a quantitative variable",
        "Comparing categories with unrelated labels only",
        "Plotting exact paired (x,y) trends",
        "Showing only the mode as a single number",
        "Bins + frequencies"
      ),
      mcq(
        "Choosing a linear model is reasonable when…",
        "Scatter shows roughly constant rate of change",
        "Data clearly curves exponentially",
        "Residuals grow systematically in a U-shape",
        "Only two categories exist",
        "Linearity check first"
      ),
      mcq(
        "An exponential model fits situations with…",
        "Roughly constant percent change per period",
        "Constant absolute change only",
        "No pattern",
        "Only integer outputs",
        "Multiplicative growth/decay"
      ),
      mcq(
        "A common algebra error is dropping a negative sign; a good habit is…",
        "Annotate signs and substitute back into the original",
        "Erase work to save space",
        "Skip parentheses always",
        "Trust the first calculator output without check",
        "Verification catches sign errors"
      ),
      mcq(
        "Exact answer √2 is preferred over 1.414 when…",
        "The problem asks for exact form or further algebraic work",
        "You only need a rough estimate for a graph sketch",
        "The context is money to cents",
        "Units are degrees of an angle only",
        "Exact vs approximate depends on ask"
      ),
      mcq(
        "Mean is pulled toward outliers more than the median because…",
        "It uses every value equally in a sum",
        "It ignores all large values",
        "It only uses Q1 and Q3",
        "It is always equal to the mode",
        "Arithmetic mean sensitivity"
      ),
      mcq(
        "When comparing linear vs quadratic for a scatterplot, prefer quadratic if…",
        "A clear U-shaped (or inverted-U) pattern appears",
        "Points hug a straight line with constant slope",
        "Data are purely categorical",
        "n = 2 exactly",
        "Curvature → quadratic family"
      ),
      mcq(
        "Precision habit: after solving a multi-step equation you should…",
        "Check the candidate in the original equation and note domain",
        "Circle the answer and stop immediately",
        "Multiply by zero to simplify",
        "Replace variables with slogans",
        "Check + domain = reliability"
      )
    ]
];

const ELA_SECTION_QUIZZES: AuthoredItem[][] = [
[
      mcq(
        "A strong annotation system should…",
        "Mark claims, evidence, and questions in a repeatable code",
        "Highlight every adjective without purpose",
        "Only underline words you already know",
        "Replace reading with summary videos",
        "Repeatable codes support later analysis"
      ),
      mcq(
        "Claim–evidence–warrant structure requires the warrant to…",
        "Explain how the evidence supports the claim",
        "Restate the plot in longer sentences",
        "List unrelated quotes",
        "Attack the author’s biography only",
        "Warrant = logical bridge"
      ),
      mcq(
        "A precise thesis under timed conditions should be…",
        "Debatable, specific, and preview analytical focus",
        "A three-word topic label",
        "A plot summary of the whole book",
        "A rhetorical question with no stance",
        "Argument needs a clear contestable claim"
      ),
      mcq(
        "Weak evidence in a paragraph usually looks like…",
        "Vague summary without a concrete textual detail",
        "A short quotation tied to an effect",
        "A paraphrase with a citation",
        "A warrant that names a craft choice",
        "Specifics beat vagueness"
      ),
      mcq(
        "Annotation of diction often tracks…",
        "Connotation shifts that build tone",
        "Only page numbers",
        "Font size in the edition",
        "The publisher’s ISBN",
        "Word choice → tone"
      ),
      mcq(
        "Best revision of “The book is good” as a thesis seed:",
        "The narrator’s ironic understatement exposes social hypocrisy in Chapter 3",
        "Books can be good or bad",
        "I liked it",
        "There are characters and a setting",
        "Specific + debatable"
      ),
      mcq(
        "When evidence is a quotation, academic paragraphs usually…",
        "Introduce, quote/paraphrase, then analyze",
        "Drop the quote with no commentary",
        "Only cite the title",
        "Replace analysis with emojis",
        "ICE / quote sandwich"
      ),
      mcq(
        "Close reading differs from skimming because it…",
        "Attends to craft choices that produce meaning",
        "Counts chapters only",
        "Memorizes blurbs",
        "Ignores structure entirely",
        "Craft + meaning"
      ),
      mcq(
        "A warrant is missing when a student…",
        "Jumps from quote to claim with no explanation of the link",
        "Explains the logical connection carefully",
        "Defines a key term",
        "Names the literary device used",
        "Gap between E and C"
      ),
      mcq(
        "Timed thesis drafting should avoid…",
        "Sweeping moral slogans with no textual anchor",
        "Naming a specific tension in the passage",
        "Limiting scope to a manageable claim",
        "Previewing two analytical angles",
        "Slogans ≠ analysis"
      )
    ],
[
      mcq(
        "Ethos primarily appeals to…",
        "Credibility and character of the speaker",
        "Audience emotions only",
        "Abstract statistics only",
        "Rhyme scheme",
        "Ethos = trust/credibility"
      ),
      mcq(
        "Pathos that substitutes for evidence is a problem because…",
        "Emotion alone may not justify the claim",
        "Emotion is never used in speeches",
        "Logos forbids all stories",
        "Tone cannot be analyzed",
        "Sufficiency of evidence still matters"
      ),
      mcq(
        "Connotation differs from denotation in that connotation is…",
        "The associated emotional/cultural shading of a word",
        "The dictionary’s bare definition only",
        "The author’s biography",
        "The page layout",
        "Shading beyond literal"
      ),
      mcq(
        "Tracking a motif means…",
        "Following a recurring image/idea and arguing its thematic work",
        "Listing every proper noun",
        "Counting syllables only",
        "Ignoring repetition",
        "Recurrence → theme"
      ),
      mcq(
        "A symbol analysis fails when students…",
        "Assign a meaning the text never supports",
        "Tie image to theme with textual cues",
        "Note recurrence across scenes",
        "Compare two related images",
        "Textual control"
      ),
      mcq(
        "Logos is strongest when…",
        "Reasons and evidence are sufficient and relevant",
        "The speaker only shares feelings",
        "Credentials replace all data",
        "The audience is flattered",
        "Logic + evidence"
      ),
      mcq(
        "Diction analysis should cite…",
        "Particular word choices and their effects",
        "Only chapter titles",
        "The table of contents",
        "Unrelated historical trivia",
        "Words → effect"
      ),
      mcq(
        "Tone is best described as…",
        "The author’s or speaker’s attitude toward subject/audience",
        "The rhyme pattern",
        "The publisher’s marketing genre",
        "The number of pages",
        "Attitude in language"
      ),
      mcq(
        "Evaluating rhetorical sufficiency asks…",
        "Whether appeals and evidence actually support the purpose",
        "Whether the speech was long",
        "Whether the audience clapped",
        "Whether ethos is mentioned by name",
        "Purpose ↔ support"
      ),
      mcq(
        "A recurring color image that deepens theme is most likely a…",
        "Motif (and possibly a symbol if meaning stabilizes)",
        "Thesis statement",
        "Works-cited entry",
        "Stage direction only",
        "Recurring image = motif"
      )
    ],
[
      mcq(
        "First-person limited POV typically…",
        "Restricts knowledge to one narrator’s mind",
        "Knows all characters’ private thoughts equally",
        "Has no narrator",
        "Only describes setting objectively forever",
        "Limited = bounded knowledge"
      ),
      mcq(
        "An unreliable narrator is suggested when…",
        "Self-presentation conflicts with other textual evidence",
        "The narrator uses first person",
        "There is dialogue",
        "Chapters are numbered",
        "Gaps/contradictions"
      ),
      mcq(
        "In poetry, alliteration is…",
        "Repetition of initial consonant sounds",
        "Exact end rhyme only",
        "A type of stanza break",
        "A stage whisper",
        "Sound device"
      ),
      mcq(
        "Analyzing structure in a poem may include…",
        "Stanza breaks, lineation, and volta/turn",
        "Only the poet’s birth year",
        "Font brand",
        "ISBN",
        "Form shapes meaning"
      ),
      mcq(
        "Stage directions in drama are useful evidence because they…",
        "Reveal action, tone, or unspoken intention beyond dialogue",
        "Replace all dialogue analysis",
        "Are never authorial",
        "Only list props for fun",
        "Directions = performative cues"
      ),
      mcq(
        "Subtext is…",
        "Meaning implied beneath the spoken line",
        "The footnote font",
        "The cast list",
        "Exact paraphrase of stage design manuals",
        "Under-the-surface meaning"
      ),
      mcq(
        "Imagery in poetry primarily appeals to…",
        "The senses through concrete language",
        "Abstract definitions only",
        "Meter counting alone",
        "Publisher blurbs",
        "Sensory language"
      ),
      mcq(
        "Dramatic irony occurs when…",
        "Audience knows more than a character",
        "A character says the opposite of what they mean only",
        "Weather mirrors mood only",
        "Two characters rhyme",
        "Audience > character knowledge"
      ),
      mcq(
        "Comparing dialogue to stage directions helps readers…",
        "Catch tension between what is said and what is enacted",
        "Ignore character relationships",
        "Skip annotation",
        "Focus only on rhyme",
        "Said vs done"
      ),
      mcq(
        "A poem’s sound devices matter analytically when you…",
        "Link sound patterns to tone or emphasis",
        "List devices with no effect claim",
        "Count letters randomly",
        "Ignore meaning entirely",
        "Device → effect"
      )
    ],
[
      mcq(
        "Comparing two texts on one issue should…",
        "Map agreements, disagreements, and differing assumptions",
        "Summarize only the longer text",
        "Ignore author’s purpose",
        "Quote without synthesis",
        "Points of contact + clash"
      ),
      mcq(
        "Synthesis across 3+ sources fails when writing becomes…",
        "Patchwork quotes without a controlling claim",
        "An argument that integrates sources under a thesis",
        "A comparison of methods",
        "A discussion of credibility",
        "Controlling idea required"
      ),
      mcq(
        "Credibility evaluation may examine…",
        "Purpose, expertise, funding, and framing",
        "Only word count",
        "Only publication year always",
        "Whether the title is catchy",
        "Source critique"
      ),
      mcq(
        "Bias is best treated as…",
        "A slant to analyze, not an automatic discard without reason",
        "Proof the source is useless forever",
        "Identical to lying in every case",
        "Irrelevant to academic reading",
        "Analyze framing"
      ),
      mcq(
        "A strong cross-text paragraph often…",
        "Puts sources in conversation around a student claim",
        "Stacks summaries in unrelated order",
        "Avoids naming authors",
        "Uses only one adjective",
        "Conversation > dump"
      ),
      mcq(
        "Media framing analysis asks…",
        "What is emphasized, omitted, or emotionally loaded",
        "Only how many ads appear",
        "The pixel resolution",
        "Whether comments are enabled",
        "Selection + emphasis"
      ),
      mcq(
        "When sources disagree on facts, a careful writer…",
        "Notes the conflict and weighs methods/evidence",
        "Picks the catchiest headline",
        "Ignores one silently",
        "Averages the claims numerically always",
        "Disclose and weigh"
      ),
      mcq(
        "Integrating a source ethically requires…",
        "Accurate paraphrase/quotation and clear citation trail",
        "Changing a few words with no citation",
        "Omitting quotation marks on exact language",
        "Hiding the URL always",
        "Attribution"
      ),
      mcq(
        "A synthesis thesis should…",
        "Take a position that requires multiple sources to develop",
        "List titles only",
        "Avoid controversy by saying nothing",
        "Copy one source’s thesis verbatim",
        "Multi-source claim"
      ),
      mcq(
        "Funding disclosure matters because…",
        "It can reveal incentives that shape framing",
        "It proves the text is fiction",
        "It replaces all content analysis",
        "It is only about fonts",
        "Incentives ↔ framing"
      )
    ],
[
      mcq(
        "Verbal irony is…",
        "Saying one thing while meaning another",
        "A plot twist only",
        "Audience knowing more than characters only",
        "Exact rhyme",
        "Said ≠ meant"
      ),
      mcq(
        "Satire typically…",
        "Critiques vice/folly through humor, irony, or exaggeration",
        "Is identical to a lab report",
        "Avoids social targets",
        "Only defines vocabulary",
        "Critique via wit"
      ),
      mcq(
        "A subordinate clause…",
        "Cannot stand alone as a sentence and depends on a main clause",
        "Is always a complete sentence",
        "Must begin with a coordinating conjunction only",
        "Cannot contain a verb",
        "Dependent clause"
      ),
      mcq(
        "Coordination with and/but joins…",
        "Grammatically similar elements",
        "A clause to a preposition randomly",
        "Only adjectives to verbs",
        "Titles to ISBNs",
        "Parallel joining"
      ),
      mcq(
        "Varying sentence openings helps style by…",
        "Controlling emphasis and rhythm for readers",
        "Making every sentence the same length",
        "Removing all verbs",
        "Eliminating punctuation",
        "Rhythm + emphasis"
      ),
      mcq(
        "Dramatic irony differs from situational irony in that dramatic irony…",
        "Depends on audience knowledge exceeding a character’s",
        "Is only a weather/mood match",
        "Requires end rhyme",
        "Is identical to sarcasm always",
        "Audience advantage"
      ),
      mcq(
        "A run-on can be fixed by…",
        "Separating clauses with correct punctuation or subordination",
        "Deleting all verbs",
        "Adding more commas randomly without structure",
        "Writing louder",
        "Clause boundaries"
      ),
      mcq(
        "Advanced syntax for rhetoric might…",
        "Place a key word at the sentence end for emphasis",
        "Hide the subject forever",
        "Avoid modifiers entirely always",
        "Use only fragments",
        "Periodic emphasis"
      ),
      mcq(
        "Situational irony involves…",
        "A contrast between expectation and outcome",
        "Only sarcastic tone",
        "Only stage whispers",
        "Dictionary definitions",
        "Expected vs actual"
      ),
      mcq(
        "Choosing subordination over coordination can…",
        "Show which idea is logically dependent or less central",
        "Make all ideas equally ranked always",
        "Remove meaning",
        "Replace evidence",
        "Hierarchy of ideas"
      )
    ],
[
      mcq(
        "A colon in analytical prose often…",
        "Introduces an explanation, list, or amplification after a complete clause",
        "Joins two independent clauses like a weak comma always",
        "Replaces all periods",
        "Only appears in titles",
        "Clause → reveal"
      ),
      mcq(
        "A semicolon typically…",
        "Links closely related independent clauses",
        "Introduces a dependent clause only",
        "Ends abbreviations only",
        "Marks possession",
        "Independent + independent"
      ),
      mcq(
        "Dashes can…",
        "Set off an emphatic aside or appositive",
        "Replace subject-verb agreement rules",
        "Delete the need for evidence",
        "Only hyphenate fractions",
        "Emphatic interruption"
      ),
      mcq(
        "A research question should be…",
        "Focused, arguable, and researchable with sources",
        "Answerable by yes/no only with no depth",
        "Identical to a dictionary lookup",
        "A full thesis already settled",
        "Inquiry drives research"
      ),
      mcq(
        "A working thesis is…",
        "Provisional and revisable as evidence accumulates",
        "Never allowed to change",
        "A bibliography entry",
        "A single noun topic",
        "Provisional claim"
      ),
      mcq(
        "Note-taking that avoids plagiarism…",
        "Paraphrases in your own words and records citations immediately",
        "Copies long passages unmarked for later",
        "Omits page numbers always",
        "Relies on memory only",
        "Cite-as-you-go"
      ),
      mcq(
        "Patchwriting is a risk when students…",
        "Keep source sentence structure while swapping a few words",
        "Fully restate ideas newly and cite",
        "Quote briefly with marks",
        "Outline first",
        "Too-close paraphrase"
      ),
      mcq(
        "Moving from question to thesis usually requires…",
        "Preliminary reading that narrows scope",
        "Skipping sources",
        "Choosing the longest article title",
        "Avoiding conflict",
        "Reading informs claim"
      ),
      mcq(
        "Punctuation is rhetorical when it…",
        "Shapes pace, emphasis, and relationship between ideas",
        "Is random decoration",
        "Only follows spellcheck",
        "Ignores clause structure",
        "Pace + logic"
      ),
      mcq(
        "A citation trail from first note helps because…",
        "You can attribute accurately when drafting",
        "It replaces analysis",
        "It guarantees a high grade alone",
        "It removes the need for a thesis",
        "Traceability"
      )
    ],
[
      mcq(
        "Converting an outline to a draft should…",
        "Turn each major node into developed paragraphs with transitions",
        "Paste the outline bullets as the final essay",
        "Skip topic sentences",
        "Delete the thesis",
        "Nodes → paragraphs"
      ),
      mcq(
        "Global revision focuses first on…",
        "Argument structure, claim clarity, and evidence sufficiency",
        "Comma splices only",
        "Font choice",
        "Title italics alone",
        "Big-picture first"
      ),
      mcq(
        "Local revision includes…",
        "Sentence clarity, diction, and mechanics",
        "Only changing the thesis topic entirely",
        "Adding unrelated sources randomly",
        "Removing all evidence",
        "Line-level craft"
      ),
      mcq(
        "Actionable peer feedback sounds like…",
        "“Paragraph 2’s warrant doesn’t explain how the quote proves the claim—add a craft link.”",
        "“It’s fine.”",
        "“I liked it.”",
        "“Needs work.” with no location",
        "Specific + located"
      ),
      mcq(
        "A multi-paragraph essay needs…",
        "Coherent progression of ideas supporting the thesis",
        "Random order of brilliant sentences",
        "One giant paragraph always",
        "No transitions",
        "Architecture"
      ),
      mcq(
        "Revision order “global then local” prevents…",
        "Polishing sentences in a structurally weak draft",
        "Ever fixing commas",
        "Using evidence",
        "Having a title",
        "Don’t line-edit a broken argument"
      ),
      mcq(
        "Peer review protocols should…",
        "Use evidence-based comments tied to criteria",
        "Only praise to avoid conflict",
        "Rewrite the paper silently for the author",
        "Ignore the rubric",
        "Criteria-based"
      ),
      mcq(
        "A transition that clarifies contrast might use…",
        "However / by contrast + a precise point of difference",
        "Also as the only connector forever",
        "Random emojis",
        "Deleting the next paragraph",
        "Logical relation"
      ),
      mcq(
        "When peer notes “unclear claim,” the writer should…",
        "Rewrite the thesis/topic sentence for specificity",
        "Add more adjectives only",
        "Remove all evidence",
        "Change the font",
        "Clarify stance"
      ),
      mcq(
        "Outline depth is useful when…",
        "It sequences reasons and evidence before drafting prose",
        "It replaces reading the sources",
        "It is never consulted again",
        "It lists only synonyms",
        "Plan before prose"
      )
    ],
[
      mcq(
        "Timed writing strategy usually includes…",
        "Brief plan, draft, and a final check for claim/evidence",
        "Writing with no plan until time expires",
        "Only outlining with no sentences",
        "Skipping the prompt",
        "Plan → draft → check"
      ),
      mcq(
        "Under exam timing, a smart move is…",
        "Prioritize a clear thesis and two developed body paragraphs over ornate intros",
        "Spend half the time on a title flourish",
        "Ignore the prompt verbs",
        "Quote without analysis to fill space",
        "Substance > decoration"
      ),
      mcq(
        "A literary presentation should…",
        "Advance a close-reading argument with textual slides",
        "Only summarize plot orally",
        "Avoid citing lines",
        "Read the dictionary aloud",
        "Argument + text"
      ),
      mcq(
        "Slide evidence works best when…",
        "Short quoted phrases are paired with analysis spoken aloud",
        "Entire chapters are pasted unreadably",
        "There is no claim",
        "Fonts blink randomly",
        "Readable evidence"
      ),
      mcq(
        "An analytical portfolio shows growth by…",
        "Curating revised pieces with reflection on craft changes",
        "Submitting only first drafts unchanged",
        "Including unrelated math homework",
        "Listing grades without work",
        "Revision evidence"
      ),
      mcq(
        "Reflection in a portfolio should…",
        "Name specific moves improved (thesis precision, warrants, etc.)",
        "Say only “I tried hard”",
        "Blame the prompt only",
        "Avoid mentioning feedback",
        "Concrete metacognition"
      ),
      mcq(
        "Prompt verbs like analyze / evaluate tell you to…",
        "Do more than summarize—make an evidence-based judgment or breakdown",
        "Retell the story only",
        "Define one vocabulary word",
        "Ignore the text",
        "Verb = task"
      ),
      mcq(
        "Oral close reading differs from summary speaking because it…",
        "Argues how craft produces meaning",
        "Lists characters in order",
        "Avoids quotations",
        "Focuses on author biography only",
        "Craft → meaning"
      ),
      mcq(
        "A final timed check might catch…",
        "A body paragraph with evidence but no warrant",
        "The need for a longer title only",
        "Whether margins are artistic",
        "ISBN formatting",
        "Warrant gaps"
      ),
      mcq(
        "Capstone curation implies…",
        "Selecting work that demonstrates analytical and stylistic progress",
        "Printing everything you ever wrote unselectively",
        "Hiding weak pieces without reflection",
        "Only including quizzes",
        "Intentional selection"
      )
    ]
];

const BIBLE_SECTION_QUIZZES: AuthoredItem[][] = [
[
      mcq(
        "Why slow down for word study in Hallelujah Scriptures framing?",
        "So meaning is not skipped and roots/usage clarify English renderings",
        "To invent dramatic claims without the verse",
        "To replace reading with slogans",
        "To debate for sport",
        "Careful reading serves understanding"
      ),
      mcq(
        "Paleo-Hebrew pictographic associations should be treated as…",
        "Memory aids under textual control",
        "Freestanding proofs that override grammar",
        "Replacements for lexicon glosses",
        "Reasons to skip the passage",
        "Aids, not absolute proofs"
      ),
      mcq(
        "Best first move in a word-study session?",
        "Read the passage carefully in context",
        "Force a letter-story before reading",
        "Ignore Hebrew forms entirely",
        "Memorize only English catchphrases",
        "Context first"
      ),
      mcq(
        "Aleph–Dalet letter lab emphasizes…",
        "Stroke practice and cautious associations before ambitious etymology",
        "Using pictographs against the verse",
        "Skipping lexicon tools",
        "Hiding uncertainty",
        "Form fluency + humility"
      ),
      mcq(
        "When a pictograph fights the verse’s grammar, you should…",
        "Set the association aside and follow context/usage",
        "Keep the pictograph and rewrite the verse",
        "Delete the lexicon entry",
        "Stop reading Scripture",
        "Text rules"
      ),
      mcq(
        "Hallelujah Scriptures emphasis highlighted in this course includes…",
        "Attention to the Name and Hebraic understanding of the text",
        "Treating study as entertainment only",
        "Ignoring original words",
        "Regional dialect framing",
        "Name + Hebraic care"
      ),
      mcq(
        "A notebook entry for a key word should typically include…",
        "Term, short gloss, and a contextual observation from the passage",
        "Only a doodle of a letter",
        "Uncited sensational claims",
        "No verse reference",
        "Gloss + context"
      ),
      mcq(
        "Academic and faithful study means…",
        "Seeking understanding for obedience, not for arguments",
        "Winning debates at any cost",
        "Skipping reverence",
        "Preferring slogans to sources",
        "Understanding → obedience"
      ),
      mcq(
        "Letter associations differ across charts; that disagreement is…",
        "A reason for caution, not for sensational certainty",
        "Proof one chart is secretly inspired over all others without check",
        "A reason to abandon Hebrew study",
        "Irrelevant to humility",
        "Caution"
      ),
      mcq(
        "Paleo-Hebrew form practice pairs each letter with…",
        "One association and one caution",
        "Unlimited proofs",
        "No glosses ever",
        "Only English rhymes",
        "Association + caution"
      )
    ],
[
      mcq(
        "He–Teth letter labs primarily train…",
        "The eye for recognition before ambitious etymology",
        "Forced proofs from pictures alone",
        "Skipping comparing charts",
        "Ignoring caution notes",
        "Recognition first"
      ),
      mcq(
        "Comparing two reputable Paleo-Hebrew charts is wise because…",
        "Associations can differ; difference teaches caution",
        "Charts never disagree",
        "You should pick the flashiest claim",
        "Grammar is irrelevant",
        "Disagreement → humility"
      ),
      mcq(
        "Yod–Mem range matters partly because…",
        "Many frequent roots use letters from this range",
        "These letters never appear in Scripture",
        "Final forms erase meaning always",
        "They replace reading",
        "Frequency aids reading"
      ),
      mcq(
        "Final forms in square script vs Paleo forms remind students to…",
        "Keep historical eras and scripts straight",
        "Treat all scripts as identical in every detail",
        "Ignore teacher charts",
        "Prefer slogans",
        "Era awareness"
      ),
      mcq(
        "Nun–Tav completion of the alphabet lab should still…",
        "Never let drills replace reading the passage",
        "Replace all passage reading with flashcards forever",
        "Hide uncertainties",
        "Overclaim from one letter",
        "Passage > drills"
      ),
      mcq(
        "Timed mixed-letter recognition builds…",
        "Fluency that later supports root study",
        "Permission to ignore context",
        "A substitute for reverence",
        "Debate tactics",
        "Fluency supports later work"
      ),
      mcq(
        "Recording uncertainties openly in a journal is…",
        "An academic discipline of honesty",
        "A sign of failure",
        "Forbidden in class",
        "Replaced by guessing loudly",
        "Honest uncertainty"
      ),
      mcq(
        "A good letter-lab habit after drawing forms is…",
        "Return to the verse context",
        "Stop at the picture story",
        "Invent a new verse",
        "Ignore approved tools",
        "Back to the text"
      ),
      mcq(
        "Full-alphabet fluency is valuable because it…",
        "Supports later root and lexicon work",
        "Proves pictographs override grammar",
        "Removes need for Hallelujah Scriptures reading",
        "Ends all caution",
        "Foundation for roots"
      ),
      mcq(
        "When associations differ, sensational certainty is…",
        "Inappropriate; prefer cautious claims with sources",
        "Required for a good grade",
        "The course goal",
        "Better than citing tools",
        "Caution > hype"
      )
    ],
[
      mcq(
        "“Hallelujah” word study highlights…",
        "Praise language joined with the Name as a summons to praise",
        "A regional slogan contest",
        "Ignoring psalm contexts",
        "Performance without understanding",
        "Praise + Name"
      ),
      mcq(
        "Praise in Scripture is often described in this course as…",
        "Public, obedient, and wholehearted",
        "Private only and optional",
        "A debate tactic",
        "Unrelated to the Name",
        "Obedient praise"
      ),
      mcq(
        "Covenant vocabulary study (e.g., fields around loyal love) emphasizes…",
        "Relationship, loyalty, and promise-keeping",
        "Only letter pictures without glosses",
        "Ignoring English gloss care",
        "Cross-references replacing the passage",
        "Loyalty/promise"
      ),
      mcq(
        "English glosses like “steadfast love” should be…",
        "Mapped carefully to Hebrew terms with lexical care",
        "Treated as identical in every verse without check",
        "Ignored entirely",
        "Used to override the passage",
        "Careful mapping"
      ),
      mcq(
        "Shema-oriented reading treats hearing as…",
        "Often implying heeding—listening that leads to doing",
        "Information collection only",
        "Optional for word study",
        "A synonym for pictographs",
        "Hear → heed"
      ),
      mcq(
        "After reading a short instruction passage, a shema response asks…",
        "What the passage requires, forbids, or reveals",
        "How to win an argument",
        "Which slogan is catchiest",
        "How to avoid application",
        "Require/forbid/reveal"
      ),
      mcq(
        "Word study of praise should deepen…",
        "Worshipful understanding, not performance",
        "Theatrical one-upmanship",
        "Ignoring verbs of praise",
        "Skipping reasons given in the psalm",
        "Understanding > show"
      ),
      mcq(
        "Cross-references in covenant study should…",
        "Still serve the passage’s own argument",
        "Replace reading the assigned text",
        "Prove any claim without context",
        "Ignore verse references",
        "Passage remains primary"
      ),
      mcq(
        "Accountability with mentors/family in shema practice helps…",
        "Application stick beyond the classroom hour",
        "Replace the text",
        "Avoid obedience language",
        "Hide sources",
        "Lived response"
      ),
      mcq(
        "Listing verbs of praise in a psalm with reasons given is…",
        "A concrete word-study practice for this section",
        "Unnecessary if you know a slogan",
        "A replacement for reverence",
        "Only about Paleo strokes",
        "Verbs + reasons"
      )
    ],
[
      mcq(
        "When Scripture explains a name in-story, students should…",
        "Prioritize the meaning the text itself gives before optional etymology",
        "Prefer speculative etymology first",
        "Ignore the narrative explanation",
        "Treat names as random sounds only",
        "In-text meaning first"
      ),
      mcq(
        "Sacred names require…",
        "Reverence in speech and study",
        "Casual slogan use",
        "Debate mockery",
        "Ignoring Hallelujah Scriptures framing",
        "Reverence"
      ),
      mcq(
        "Hebrew poetry often relates lines by…",
        "Parallelism of ideas more than English-style sound rhyme",
        "Only end rhyme identical to English hymns",
        "Random line breaks without relation",
        "Stage directions",
        "Idea parallelism"
      ),
      mcq(
        "Before interpreting imagery in a couplet, label…",
        "Synonymous, antithetic, or synthetic relationships",
        "Only the font",
        "Only Paleo strokes without reading",
        "Publisher notes only",
        "Relation type first"
      ),
      mcq(
        "A root-family gloss sheet should…",
        "List related forms with glosses and cite tools used",
        "Hide sources",
        "Use only pictographs as proofs",
        "Omit verse citations",
        "Forms + citations"
      ),
      mcq(
        "Context selects which sense of a root fits because…",
        "Roots generate related forms; usage chooses the sense",
        "Every gloss applies in every verse",
        "Pictographs decide alone",
        "English slogans decide",
        "Usage selects sense"
      ),
      mcq(
        "Symbols in poetic texts must be read…",
        "In literary and covenant context",
        "As freestanding modern idioms always",
        "Without parallelism labels",
        "Against the grammar intentionally",
        "Context for symbols"
      ),
      mcq(
        "Names often carry meaning tied to…",
        "Story, calling, or remembrance in the narrative",
        "Only modern nicknames",
        "Printer errors",
        "Unrelated trivia",
        "Narrative meaning"
      ),
      mcq(
        "Building a gloss sheet prevents…",
        "Isolated guesses about a single form",
        "All humility",
        "Citing lexicons",
        "Reading verses",
        "Related forms together"
      ),
      mcq(
        "Paraphrasing a couplet’s combined meaning after labeling parallelism is…",
        "A precision practice for Hebrew poetic thought",
        "Optional enrichment unrelated to the lesson",
        "A reason to skip the psalm",
        "Identical to forcing pictographs",
        "Label → paraphrase"
      )
    ],
[
      mcq(
        "Motion verbs in covenant narratives often…",
        "Carry theological freight—who moves, why, at whose command",
        "Are always purely literal travel with no framing",
        "Should be allegorized freely beyond the text",
        "Replace lexicon work",
        "Map movement carefully"
      ),
      mcq(
        "Avoid allegory that…",
        "The text does not support",
        "Is explicitly developed by the passage",
        "Comes from careful parallelism labels",
        "Cites approved tools",
        "Textual control"
      ),
      mcq(
        "Truth/falsehood vocabulary connects…",
        "Speech ethics to covenant loyalty",
        "Only Paleo letter drills",
        "Unrelated math formulas",
        "Regional dialects",
        "Speech ↔ loyalty"
      ),
      mcq(
        "Comparing parallel lines that contrast true and false witness helps…",
        "Sharpen moral contrast in wisdom/Torah texts",
        "Replace reading",
        "Prove pictographs",
        "Avoid application",
        "Antithesis clarifies"
      ),
      mcq(
        "Light/path imagery in guidance psalms often concerns…",
        "Instruction and obedient walking",
        "Modern idioms foreign to the passage",
        "Only astronomy facts",
        "Printer ornaments",
        "Instruction → walk"
      ),
      mcq(
        "Metaphors unpack best via…",
        "Parallelism and immediate context",
        "Importing later idioms the passage does not use",
        "Ignoring couplet relations",
        "Skipping Hebrew key words when available",
        "Context unpacks metaphor"
      ),
      mcq(
        "Application of truth vocabulary begins with…",
        "Accurate reading, not slogans",
        "Slogans without the verse",
        "Forced letter-stories",
        "Hiding sources",
        "Accuracy first"
      ),
      mcq(
        "Charting three motion verbs with subject, destination, and framing is…",
        "A concrete narrative word-study method",
        "Unnecessary if you know a slogan",
        "A substitute for reverence",
        "Only about drawing letters",
        "Subject/destination/frame"
      ),
      mcq(
        "Guidance metaphors should not…",
        "Import later idioms the passage does not use",
        "Be read with parallelism in view",
        "Attend to obedience called for",
        "Mark metaphors in annotation",
        "Stay within the text’s usage"
      ),
      mcq(
        "Integrity applications from truth vocabulary might include…",
        "Honest schoolwork practices grounded in the passage",
        "Inventing claims without sources",
        "Skipping the assigned text",
        "Treating study as sport",
        "Concrete integrity"
      )
    ],
[
      mcq(
        "Creation vocabulary study repays…",
        "Slow reading of repeated words and patterns of speech/completion",
        "Speeding past repetition",
        "Speculation contests without the text",
        "Ignoring order and naming",
        "Slow pattern reading"
      ),
      mcq(
        "Order and naming in creation texts are…",
        "Literary features to observe carefully",
        "Printer accidents only",
        "Reasons to skip lexicon care",
        "Proofs for pictograph overreach",
        "Observe literary features"
      ),
      mcq(
        "Return/repent language in prophetic calls often means…",
        "Covenant reorientation",
        "Only physical travel with no moral sense",
        "A debate slogan",
        "Ignoring invitation language",
        "Reorientation"
      ),
      mcq(
        "Prophetic calls frequently pair…",
        "Diagnosis with invitation",
        "Only condemnation without invitation",
        "Only praise without content",
        "Pictographs without verses",
        "Problem + invitation"
      ),
      mcq(
        "Wisdom sayings are often…",
        "General insights, not mechanical guarantees",
        "Absolute formulas for every case without nuance",
        "Identical to narrative law codes in form always",
        "Unrelated to antithetic lines",
        "Nuanced generality"
      ),
      mcq(
        "Antithetic lines in proverbs…",
        "Sharpen moral contrast",
        "Erase meaning",
        "Replace Hebrew key words",
        "Forbid comparison of related sayings",
        "Contrast teaches"
      ),
      mcq(
        "Before forcing a single English proverb equivalent, students should…",
        "Compare related sayings and note Hebrew key words when available",
        "Ignore parallelism",
        "Prefer slogans",
        "Skip the verse citation",
        "Compare first"
      ),
      mcq(
        "Application of repentance language should be…",
        "Specific and humble",
        "Vague and performative only",
        "Hidden from mentors always",
        "Based on pictographs alone",
        "Specific humility"
      ),
      mcq(
        "Tracking repeated verbs in a creation passage helps students…",
        "Notice pattern of speech and completion",
        "Invent new verses",
        "Avoid literary observation",
        "Replace reverence with contests",
        "Pattern awareness"
      ),
      mcq(
        "Word study of creation serves…",
        "Understanding the passage, not speculation contests",
        "Winning arguments with unverified claims",
        "Ignoring repeated words",
        "Skipping Hallelujah Scriptures reading",
        "Passage understanding"
      )
    ],
[
      mcq(
        "Interlinears and lexicons…",
        "Show forms and glosses; they do not replace reading",
        "Replace reading entirely",
        "Forbid citations",
        "Prove any sensational claim alone",
        "Tools aid; text remains"
      ),
      mcq(
        "When relying on a tool, cite…",
        "Edition and entry",
        "Nothing—tools are secret",
        "Only the pictograph chart forever",
        "A slogan",
        "Cite tools"
      ),
      mcq(
        "If a claim seems sensational, prefer…",
        "Multiple checks before asserting",
        "Louder certainty",
        "Hiding uncertainty",
        "Ignoring grammar",
        "Multiple checks"
      ),
      mcq(
        "Pictograph overreach means…",
        "Forced letter-stories that contradict grammar or context",
        "Cautious use of associations as memory aids",
        "Citing lexicons",
        "Reading the verse first",
        "Force vs caution"
      ),
      mcq(
        "If an association fights the verse, set it aside because…",
        "Grammar and usage rule over aids",
        "Aids override grammar",
        "Reverence is optional",
        "Sources should be hidden",
        "Grammar/usage rule"
      ),
      mcq(
        "Humility in this unit is…",
        "An academic and spiritual discipline",
        "A weakness to hide",
        "Unnecessary if claims are flashy",
        "Replaced by overclaiming",
        "Discipline"
      ),
      mcq(
        "Connecting word study to integrity in work means…",
        "Faithfulness in small tasks—homework, training, honest dealing—without regional dialect framing",
        "Only discussing sports scores",
        "Skipping wisdom sayings",
        "Using local-color dialect framing in every answer",
        "Diligence vocabulary → practice"
      ),
      mcq(
        "A diligence/honesty saying applied to homework integrity should…",
        "Cite verse and key word with a concrete habit",
        "Avoid citations",
        "Use only pictographs as proofs",
        "Remain purely abstract",
        "Cite + concrete"
      ),
      mcq(
        "Presenting a bad forced reading beside a corrected contextual reading teaches…",
        "How to refuse overreach",
        "How to prefer force",
        "How to skip tools",
        "How to hide sources",
        "Contrast corrects"
      ),
      mcq(
        "Approved tools in interlinear discipline are used to…",
        "Support cautious synthesis after reading",
        "Replace Hallelujah Scriptures engagement",
        "Create regional framing",
        "Avoid verse references",
        "Cautious synthesis"
      )
    ],
[
      mcq(
        "Communal reading habits include…",
        "Sharing sources and uncertainties, not only conclusions",
        "Hiding uncertainties to sound certain",
        "Correcting harshly without the text open",
        "Ignoring reverence for the Name",
        "Sources + humility"
      ),
      mcq(
        "Correcting one another should be done…",
        "Gently with the text open",
        "By mockery",
        "Without references",
        "Using only slogans",
        "Gentle + textual"
      ),
      mcq(
        "Reverence for the Name shapes…",
        "Speech in discussion as well as private study",
        "Only calligraphy practice",
        "Debate insults",
        "Skipping passages",
        "Speech ethics"
      ),
      mcq(
        "A 3-minute share format in class might include…",
        "Passage, word, gloss, context, and one open question",
        "Only a pictograph proof",
        "No sources",
        "A regional anecdote as the main point",
        "Structured share"
      ),
      mcq(
        "Spaced review of letter forms beats…",
        "Cramming",
        "Never reviewing",
        "Ignoring the alphabet after week one without cost",
        "Replacing reading forever",
        "Spacing > cram"
      ),
      mcq(
        "A personal lexicon of covenant/praise terms should…",
        "Pair each entry with a verse citation",
        "Omit verses",
        "Rely on slogans only",
        "Prefer unverified viral claims",
        "Entry + verse"
      ),
      mcq(
        "Capstone word study should select a word that…",
        "Appears multiple times—prefer verbs or covenant nouns",
        "Never appears in the passage",
        "Is chosen only for flashy pictographs",
        "Cannot be cited",
        "Frequency + category"
      ),
      mcq(
        "Capstone presentations must…",
        "Cite sources and avoid overclaiming from pictographs alone",
        "Hide tools used",
        "Force letter-stories against grammar",
        "Skip application entirely",
        "Cite + restrain"
      ),
      mcq(
        "Integrating alphabet review with covenant vocabulary means…",
        "Letter fluency plus a short lexicon serving later reading",
        "Drills that replace all Scripture reading",
        "Regional framing of every gloss",
        "Dropping reverence",
        "Fluency + lexicon"
      ),
      mcq(
        "Synthesis in the capstone should show…",
        "How the word deepens understanding and obedience within Hallelujah Scriptures framing",
        "Only Paleo strokes without meaning",
        "Debate victory",
        "Unsourced sensational claims",
        "Understanding + obedience"
      )
    ]
];

export type ShowcaseQuizSubject = "math" | "ela" | "bible";

export function showcaseSubjectKey(subject: string): ShowcaseQuizSubject | null {
  if (subject.includes("Algebra") || subject === "Mathematics") return "math";
  if (subject.includes("English") || subject.includes("Language Arts")) return "ela";
  if (subject.includes("Bible")) return "bible";
  return null;
}

/** Returns authored 8–12 MCQs for a showcase section quiz, or null if not a showcase subject. */
export function getShowcaseSectionQuiz(
  subject: string,
  grade: number,
  sectionKey: string
): QuestionSeed[] | null {
  if (grade !== 10) return null;
  const key = showcaseSubjectKey(subject);
  if (!key) return null;
  const match = /^section-(\d+)$/.exec(sectionKey);
  if (!match) return null;
  const idx = Number(match[1]) - 1;
  const bank =
    key === "math" ? MATH_SECTION_QUIZZES : key === "ela" ? ELA_SECTION_QUIZZES : BIBLE_SECTION_QUIZZES;
  const items = bank[idx];
  if (!items || items.length < 8) {
    throw new Error(`Missing authored showcase quiz for ${subject} ${sectionKey}`);
  }
  return authoredQuestions(items, 12);
}

export function showcaseQuizCounts(): Record<ShowcaseQuizSubject, number[]> {
  return {
    math: MATH_SECTION_QUIZZES.map((s) => s.length),
    ela: ELA_SECTION_QUIZZES.map((s) => s.length),
    bible: BIBLE_SECTION_QUIZZES.map((s) => s.length),
  };
}
