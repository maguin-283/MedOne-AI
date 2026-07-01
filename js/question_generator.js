/**
 * DYNAMIC QUESTION GENERATOR
 * Generates unlimited unique questions from knowledge nodes
 */

class DynamicQuestionGenerator {
  constructor() {
    this.questionId = 0;
    this.generatedQuestions = [];
  }

  generateQuestionsFromNode(node) {
    const questions = [];

    if (node.clinicalRelevance && node.clinicalRelevance.length > 0) {
      questions.push(this.generateClinicalScenario(node));
    }

    questions.push(this.generateBasicRecall(node));

    if (node.relatedConcepts && node.relatedConcepts.length > 0) {
      questions.push(this.generateConceptComparison(node));
    }

    if (node.mechanisms && node.mechanisms.length > 0) {
      questions.push(this.generateMechanism(node));
    }

    if (node.negativeFeatures && node.negativeFeatures.length > 0) {
      questions.push(this.generateNegativeQuestion(node));
    }

    if (node.clinicalRelevance && node.clinicalRelevance.length > 0) {
      questions.push(this.generateDiagnosis(node));
    }

    if (node.treatments && node.treatments.length > 0) {
      questions.push(this.generateTreatment(node));
    }

    if (node.nerves && node.nerves.length > 0) {
      questions.push(this.generateNerveQuestion(node));
    }

    if (node.enzymes && node.enzymes.length > 0) {
      questions.push(this.generateEnzymeQuestion(node));
    }

    if (node.receptors && node.receptors.length > 0) {
      questions.push(this.generateReceptorQuestion(node));
    }

    return questions.filter(q => q !== null);
  }

  generateClinicalScenario(node) {
    const ageGroups = ['25-year-old', '45-year-old', '65-year-old', 'elderly patient'];
    const genders = ['male', 'female'];
    
    const age = this.randomSelect(ageGroups);
    const gender = this.randomSelect(genders);
    const symptom = this.randomSelect(node.clinicalRelevance);
    const finding = this.randomSelect(node.characteristics);

    const stem = `A ${age} ${gender} presents with ${symptom}. Examination reveals ${finding}. What is the most likely diagnosis?`;
    const distractors = this.generateDistractors(node.relatedConcepts, 3);

    return this.createQuestion(`Clinical Scenario`, stem, [node.concept, ...distractors], 0, 'Clinical Scenario', node);
  }

  generateBasicRecall(node) {
    const stem = `Which of the following best describes ${node.concept}?`;
    const distractors = this.generateDefinitionDistractors(node, 3);

    return this.createQuestion(`Basic Recall`, stem, [node.definition, ...distractors], 0, 'Basic Recall', node);
  }

  generateConceptComparison(node) {
    if (!node.relatedConcepts || node.relatedConcepts.length === 0) return null;

    const related = this.randomSelect(node.relatedConcepts);
    const stem = `How does ${node.concept} differ from ${related}?`;
    const distinction = `${node.concept} is characterized by ${this.randomSelect(node.characteristics)}`;
    const distractors = ['Both are identical', `${related} shows similar features`, 'Indistinguishable'];

    return this.createQuestion(`Comparison`, stem, [distinction, ...distractors], 0, 'Concept Comparison', node);
  }

  generateMechanism(node) {
    if (!node.mechanisms || node.mechanisms.length === 0) return null;

    const mechanism = this.randomSelect(node.mechanisms);
    const stem = `The mechanism by which ${node.concept} works involves:`;
    const distractors = this.generateDistractors(node.relatedConcepts, 3);

    return this.createQuestion(`Mechanism`, stem, [mechanism, ...distractors], 0, 'Mechanism', node);
  }

  generateNegativeQuestion(node) {
    if (!node.negativeFeatures || node.negativeFeatures.length === 0) return null;

    const stem = `All of the following are features of ${node.concept} EXCEPT:`;
    const correctAnswer = this.randomSelect(node.negativeFeatures);
    const distractors = node.characteristics.slice(0, 3);

    return this.createQuestion(`Negative`, stem, [...distractors, correctAnswer], 3, 'Negative Question', node, true);
  }

  generateDiagnosis(node) {
    const feature = this.randomSelect(node.clinicalRelevance);
    const finding = this.randomSelect(node.characteristics);
    const stem = `A patient with ${feature} and ${finding} likely has:`;
    const distractors = this.generateDistractors(node.relatedConcepts, 3);

    return this.createQuestion(`Diagnosis`, stem, [node.concept, ...distractors], 0, 'Most Likely Diagnosis', node);
  }

  generateTreatment(node) {
    if (!node.treatments || node.treatments.length === 0) return null;

    const treatment = this.randomSelect(node.treatments);
    const stem = `First-line treatment for ${node.concept} is:`;
    const distractors = this.generateDistractors(node.treatments.slice(1), 3);

    return this.createQuestion(`Treatment`, stem, [treatment, ...distractors], 0, 'Most Appropriate Treatment', node);
  }

  generateNerveQuestion(node) {
    if (!node.nerves || node.nerves.length === 0) return null;

    const nerve = this.randomSelect(node.nerves);
    const feature = this.randomSelect(node.characteristics);
    const stem = `${feature} would result from damage to which nerve?`;
    const distractors = ['Radial nerve', 'Median nerve', 'Ulnar nerve'].filter(n => n !== nerve).slice(0, 3);

    return this.createQuestion(`Nerve`, stem, [nerve, ...distractors], 0, 'Most Likely Nerve', node);
  }

  generateEnzymeQuestion(node) {
    if (!node.enzymes || node.enzymes.length === 0) return null;

    const enzyme = this.randomSelect(node.enzymes);
    const stem = `Deficiency of ${enzyme} causes:`;
    const effect = this.randomSelect(node.characteristics);
    const distractors = this.generateDistractors(node.enzymes.slice(1), 3);

    return this.createQuestion(`Enzyme`, stem, [effect, ...distractors], 0, 'Most Likely Enzyme', node);
  }

  generateReceptorQuestion(node) {
    if (!node.receptors || node.receptors.length === 0) return null;

    const receptor = this.randomSelect(node.receptors);
    const stem = `${receptor} activation leads to:`;
    const effect = this.randomSelect(node.characteristics);
    const distractors = this.generateDistractors(node.receptors.slice(1), 3);

    return this.createQuestion(`Receptor`, stem, [effect, ...distractors], 0, 'Most Likely Receptor', node);
  }

  createQuestion(type, stem, choices, correctIndex, questionType, node, isNegative = false) {
    this.questionId++;

    const shuffled = this.shuffleChoices(choices, correctIndex);

    return {
      id: `Q_${node.id}_${type}_${this.questionId}`,
      nodeId: node.id,
      type: type,
      questionType: questionType,
      subject: node.subject,
      chapter: node.chapter,
      topic: node.topic,
      concept: node.concept,
      stem: isNegative ? stem + ' (Choose the EXCEPT option)' : stem,
      choices: shuffled.choices,
      answer: shuffled.correctIndex,
      explanation: `${node.concept}: ${node.definition}`,
      difficulty: node.difficulty,
      highYield: node.highYield,
      tags: [node.topic, node.concept, questionType],
      isNegative: isNegative,
      createdAt: new Date().toISOString(),
      generatedFromNode: true
    };
  }

  shuffleChoices(choices, correctIndex) {
    const indexed = choices.map((choice, idx) => ({
      choice,
      isCorrect: idx === correctIndex
    }));

    for (let i = indexed.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indexed[i], indexed[j]] = [indexed[j], indexed[i]];
    }

    const newCorrectIndex = indexed.findIndex(item => item.isCorrect);

    return {
      choices: indexed.map(item => item.choice),
      correctIndex: newCorrectIndex
    };
  }

  randomSelect(array) {
    if (!array || array.length === 0) return '';
    return array[Math.floor(Math.random() * array.length)];
  }

  generateDistractors(source, count) {
    if (!source || source.length === 0) return this.generateGenericDistractors(count);
    const shuffled = [...source].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }

  generateGenericDistractors(count) {
    const generic = [
      'Random unrelated condition',
      'Alternative diagnosis',
      'Rare inherited disorder',
      'Common complication',
      'Side effect of treatment'
    ];
    return generic.slice(0, count);
  }

  generateDefinitionDistractors(node, count) {
    const distractors = [
      `A disorder of ${node.topic}`,
      `A genetic condition affecting ${node.topic}`,
      `An inflammatory process in ${node.topic}`,
      `A degenerative disease of ${node.topic}`,
      `An autoimmune condition`
    ];
    return distractors.slice(0, count);
  }
}
