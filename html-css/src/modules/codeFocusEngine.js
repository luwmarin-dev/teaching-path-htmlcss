/**
 * Code Focus Engine
 * Allows students to focus strictly on their assignment (Task Mode)
 * without being overwhelmed or distracted by dozens of lines of background
 * boilerplate styling (container shells, grids, SVG illustrations).
 * 
 * Provides a 1-click toggle to inspect full element styles whenever desired.
 */

export const TASK_CSS_START = '/* === SIZNING VAZIFANGIZ (CSS) === */';
export const TASK_CSS_END = '/* === VAZIFA TUGADI (CSS) === */';
export const TASK_HTML_START = '<!-- === SIZNING VAZIFANGIZ (HTML) === -->';
export const TASK_HTML_END = '<!-- === VAZIFA TUGADI (HTML) === -->';

/**
 * Checks if code contains task delimiters
 */
export function hasTaskMarkers(code) {
  if (!code || typeof code !== 'string') return false;
  return code.includes(TASK_CSS_START) || code.includes(TASK_HTML_START);
}

/**
 * Extracts task-only code from full code.
 * If markers are present, returns only the task CSS and/or task HTML.
 * If no markers are present, returns full code unchanged.
 */
export function extractTaskCode(fullCode) {
  if (!fullCode || typeof fullCode !== 'string') return '';
  if (!hasTaskMarkers(fullCode)) return fullCode;

  let taskCss = '';
  let taskHtml = '';

  // Extract CSS
  if (fullCode.includes(TASK_CSS_START)) {
    const cssParts = fullCode.split(TASK_CSS_START);
    if (cssParts.length > 1) {
      const rest = cssParts[1];
      if (rest.includes(TASK_CSS_END)) {
        taskCss = rest.split(TASK_CSS_END)[0].trim();
      } else {
        taskCss = rest.trim();
      }
    }
  }

  // Extract HTML
  if (fullCode.includes(TASK_HTML_START)) {
    const htmlParts = fullCode.split(TASK_HTML_START);
    if (htmlParts.length > 1) {
      const rest = htmlParts[1];
      if (rest.includes(TASK_HTML_END)) {
        taskHtml = rest.split(TASK_HTML_END)[0].trim();
      } else {
        taskHtml = rest.trim();
      }
    }
  }

  // Compose clean task document
  const sections = [];
  if (taskCss) {
    sections.push(`<style>\n${taskCss}\n</style>`);
  }
  if (taskHtml) {
    sections.push(taskHtml);
  }

  return sections.join('\n\n');
}

/**
 * Merges task code back into a full template.
 * If fullCode has markers, replaces the task sections with userTaskCode.
 */
export function mergeTaskIntoFullCode(fullTemplate, userTaskCode) {
  if (!fullTemplate || typeof fullTemplate !== 'string') return userTaskCode || '';
  if (!hasTaskMarkers(fullTemplate)) return userTaskCode;

  let merged = fullTemplate;

  // Check if userTaskCode contains <style>...</style>
  let userCss = '';
  let userHtml = userTaskCode;

  const styleMatch = userTaskCode.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  if (styleMatch) {
    userCss = styleMatch[1].trim();
    // HTML is everything outside the <style> tag
    userHtml = userTaskCode.replace(/<style[^>]*>[\s\S]*?<\/style>/i, '').trim();
  } else if (!userTaskCode.includes('<') && userTaskCode.includes('{')) {
    // Pure CSS was provided
    userCss = userTaskCode.trim();
    userHtml = '';
  }

  // Replace CSS task section
  if (fullTemplate.includes(TASK_CSS_START)) {
    const startIdx = merged.indexOf(TASK_CSS_START);
    const endIdx = merged.indexOf(TASK_CSS_END);
    if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
      const before = merged.slice(0, startIdx + TASK_CSS_START.length);
      const after = merged.slice(endIdx);
      merged = `${before}\n  ${userCss || '/* Shu yerda vazifani yozing */'}\n  ${after}`;
    }
  }

  // Replace HTML task section
  if (fullTemplate.includes(TASK_HTML_START)) {
    const startIdx = merged.indexOf(TASK_HTML_START);
    const endIdx = merged.indexOf(TASK_HTML_END);
    if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
      const before = merged.slice(0, startIdx + TASK_HTML_START.length);
      const after = merged.slice(endIdx);
      merged = `${before}\n  ${userHtml}\n  ${after}`;
    }
  }

  return merged;
}
