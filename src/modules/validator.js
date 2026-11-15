/**
 * CodeCraft Challenge Validator
 * Evaluates whether student HTML/CSS code meets the learning objectives.
 */

export function validateChallenge(code, rules = []) {
  if (!code || typeof code !== 'string') {
    return {
      passed: false,
      feedback: ['Write some code in the editor to start the challenge!']
    };
  }

  const feedback = [];

  for (const rule of rules) {
    let passed = false;

    switch (rule.type) {
      case 'hasTag': {
        const tagRegex = new RegExp(`<\\s*${rule.tag}(\\s+[^>]*)?>`, 'i');
        passed = tagRegex.test(code);
        break;
      }

      case 'hasAttribute': {
        // Looks for <tag ... attr="..." or attr='...' or attr>
        const attrRegex = new RegExp(`<\\s*${rule.tag}[^>]*\\s+${rule.attribute}(?:\\s*=\\s*["'][^"']*["'])?[^>]*>`, 'i');
        passed = attrRegex.test(code);
        break;
      }

      case 'hasCssProperty': {
        // Check for style tag or inline style with property: value
        // Matches e.g. color: hotpink; or style="... color: hotpink ..."
        const escapedProp = rule.property.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const cssRegex = new RegExp(`${escapedProp}\\s*:\\s*([^;}"']+)`, 'gi');
        let match;
        while ((match = cssRegex.exec(code)) !== null) {
          const val = match[1].trim();
          if (!rule.valuePattern || rule.valuePattern.test(val)) {
            passed = true;
            break;
          }
        }
        break;
      }

      case 'tagContainsText': {
        // Matches <tag ...>content</tag>
        const tagContentRegex = new RegExp(`<\\s*${rule.tag}[^>]*>([\\s\\S]*?)<\\s*\\/\\s*${rule.tag}\\s*>`, 'i');
        const match = tagContentRegex.exec(code);
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
          passed = !!rule.check(code);
        } catch {
          passed = false;
        }
        break;
      }

      default:
        passed = true;
    }

    if (!passed) {
      feedback.push(rule.message || 'Check this mission requirement!');
    }
  }

  return {
    passed: feedback.length === 0,
    feedback
  };
}
