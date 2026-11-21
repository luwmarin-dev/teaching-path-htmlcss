/**
 * CodeCraft Challenge Validator
 * Evaluates whether student HTML/CSS code meets the learning objectives.
 */

export function validateChallenge(code, rules = [], lang = 'en') {
  const codeStr = (typeof code === 'object' && code !== null)
    ? (code[lang] || code.en || code.uz || Object.values(code)[0] || '')
    : code;

  if (!codeStr || typeof codeStr !== 'string') {
    return {
      passed: false,
      feedback: [lang === 'uz' ? 'Topshiriqni boshlash uchun muharrirga kod yozing!' : 'Write some code in the editor to start the challenge!']
    };
  }

  // Strip HTML and CSS comments so instructions inside comments don't trigger false passes
  const codeWithoutComments = codeStr
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '');
  const feedback = [];

  for (const rule of rules) {
    let passed = false;

    switch (rule.type) {
      case 'hasTag': {
        const tagRegex = new RegExp(`<\\s*${rule.tag}(\\s+[^>]*)?>`, 'i');
        passed = tagRegex.test(codeWithoutComments);
        break;
      }

      case 'hasAttribute': {
        // Looks for <tag ... attr="..." or attr='...' or attr>
        const attrRegex = new RegExp(`<\\s*${rule.tag}[^>]*\\s+${rule.attribute}(?:\\s*=\\s*["'][^"']*["'])?[^>]*>`, 'i');
        passed = attrRegex.test(codeWithoutComments);
        break;
      }

      case 'hasCssProperty': {
        // Check for style tag or inline style with property: value
        // Matches e.g. color: hotpink; or style="... color: hotpink ..."
        const escapedProp = rule.property.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const cssRegex = new RegExp(`${escapedProp}\\s*:\\s*([^;}"']+)`, 'gi');
        let match;
        while ((match = cssRegex.exec(codeWithoutComments)) !== null) {
          const val = match[1].trim();
          if (!rule.valuePattern) {
            passed = true;
            break;
          }
          if (rule.valuePattern instanceof RegExp && rule.valuePattern.test(val)) {
            passed = true;
            break;
          }
          if (typeof rule.valuePattern === 'string' && val.toLowerCase().includes(rule.valuePattern.toLowerCase())) {
            passed = true;
            break;
          }
        }
        break;
      }

      case 'tagContainsText': {
        // Matches <tag ...>content</tag>
        const tagContentRegex = new RegExp(`<\\s*${rule.tag}[^>]*>([\\s\\S]*?)<\\s*\\/\\s*${rule.tag}\\s*>`, 'i');
        const match = tagContentRegex.exec(codeWithoutComments);
        if (match) {
          const innerText = match[1].replace(/<[^>]+>/g, '').trim();
          if (rule.pattern instanceof RegExp) {
            passed = rule.pattern.test(innerText);
          } else if (typeof rule.pattern === 'string') {
            passed = innerText.toLowerCase().includes(rule.pattern.toLowerCase());
          } else {
            passed = innerText.length > 0;
          }
        }
        break;
      }

      case 'custom': {
        try {
          const fn = rule.check || rule.fn;
          passed = typeof fn === 'function' ? !!fn(codeWithoutComments) : false;
        } catch {
          passed = false;
        }
        break;
      }

      default:
        passed = true;
    }

    if (!passed) {
      let msg = rule.feedback || rule.message || (lang === 'uz' ? "Ushbu topshiriq talabini tekshirib ko'ring!" : 'Check this mission requirement!');
      if (typeof msg === 'object' && msg !== null) {
        msg = msg[lang] || msg.uz || msg.en || Object.values(msg)[0];
      }
      feedback.push(msg);
    }
  }

  return {
    passed: feedback.length === 0,
    feedback
  };
}
