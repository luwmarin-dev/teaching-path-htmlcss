import os
import re

root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def clean_module(code):
    # remove imports: import ... from '...';
    code = re.sub(r"^import\s+[\s\S]*?from\s+['\"][^'\"]+['\"];?", "", code, flags=re.MULTILINE)
    # unexport declarations: export const/let/var/function/class ...
    code = re.sub(r"^export\s+(const|let|var|function|class)\s+", r"\1 ", code, flags=re.MULTILINE)
    # remove export { ... }; blocks
    code = re.sub(r"^export\s*\{\s*[\s\S]*?\};?", "", code, flags=re.MULTILINE)
    # remove default exports
    code = re.sub(r"^export\s+default\s+", "", code, flags=re.MULTILINE)
    return code

def read_src(rel_path):
    with open(os.path.join(root_dir, rel_path), 'r', encoding='utf-8') as f:
        return f.read()

curriculum_code = clean_module(read_src('src/modules/curriculum.js'))
i18n_code = clean_module(read_src('src/modules/i18n.js'))
validator_code = clean_module(read_src('src/modules/validator.js'))
state_code = clean_module(read_src('src/modules/state.js'))
audio_code = clean_module(read_src('src/modules/audio.js'))
confetti_code = clean_module(read_src('src/modules/confetti.js'))
speech_code = clean_module(read_src('src/modules/speech.js'))
sandbox_code = clean_module(read_src('src/modules/sandbox.js'))
classroom_code = clean_module(read_src('src/modules/classroom.js'))
box_model_lab_code = clean_module(read_src('src/labs/boxModelLab.js'))
flexbox_lab_code = clean_module(read_src('src/labs/flexboxLab.js'))
color_lab_code = clean_module(read_src('src/labs/colorLab.js'))
grid_lab_code = clean_module(read_src('src/labs/gridLab.js'))
topic_labs_code = clean_module(read_src('src/labs/topicLabs.js'))
app_code = clean_module(read_src('src/app.js'))

css_code = read_src('public/css/style.css')

bundled_js = f"""/**
 * CodeCraft Kids - Standalone Offline Bundle
 * Runs 100% offline via file:// protocol directly in any browser with ZERO Node.js or web server.
 */
(function() {{
  'use strict';

  // --- Curriculum Module ---
  {curriculum_code}

  // --- i18n Module ---
  {i18n_code}

  // --- Validator Module ---
  {validator_code}

  // --- State Module ---
  {state_code}

  // --- Audio Module ---
  {audio_code}

  // --- Confetti Module ---
  {confetti_code}

  // --- Speech Module ---
  {speech_code}

  // --- Sandbox Module ---
  {sandbox_code}

  // --- Classroom Module ---
  {classroom_code}

  // --- Box Model Lab Module ---
  {box_model_lab_code}

  // --- Flexbox Lab Module ---
  {flexbox_lab_code}

  // --- Color Lab Module ---
  {color_lab_code}

  // --- Grid Lab Module ---
  {grid_lab_code}

  // --- Topic Labs Module ---
  {topic_labs_code}

  // --- Main App Controller ---
  {app_code}

  // Boot on DOM ready
  if (document.readyState === 'loading') {{
    document.addEventListener('DOMContentLoaded', initApp);
  }} else {{
    initApp();
  }}
}})();
"""

with open(os.path.join(root_dir, 'public/js/codecraft.js'), 'w', encoding='utf-8') as f:
    f.write(bundled_js)
print('✅ Generated public/js/codecraft.js')

template_html = read_src('index.template.html')

def create_standalone_html(default_lang, custom_title=None):
    html = template_html.replace(
        '<!-- INLINE_CSS_PLACEHOLDER -->',
        f'<style>\n/* Inlined Stylesheet */\n{css_code}\n</style>'
    )

    lang_boot_code = ''
    if default_lang == 'uz':
        lang_boot_code = """
    // Force Uzbek default for this dedicated edition
    state = setLanguage(state, 'uz');
    saveStateToStorage(state);
    """
        html = html.replace('<html lang="en">', '<html lang="uz">')
    elif default_lang == 'en':
        lang_boot_code = """
    // Force English default for this dedicated edition
    state = setLanguage(state, 'en');
    saveStateToStorage(state);
    """
        html = html.replace('<html lang="en">', '<html lang="en">')

    if custom_title:
        html = re.sub(r'<title>.*?</title>', f'<title>{custom_title}</title>', html)

    customized_js = bundled_js.replace(
        'function initApp() {',
        f'function initApp() {{\n    {lang_boot_code}'
    )

    html = html.replace(
        '<!-- INLINE_JS_PLACEHOLDER -->',
        f'<script>\n{customized_js}\n</script>'
    )
    return html

with open(os.path.join(root_dir, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(create_standalone_html(None))
print('✅ Generated index.html (Main standalone with working dual switcher)')

with open(os.path.join(root_dir, 'index_uz.html'), 'w', encoding='utf-8') as f:
    f.write(create_standalone_html('uz', "CodeCraft 👾 Bolalar uchun HTML va CSS (O'zbekcha)"))
print("✅ Generated index_uz.html (Dedicated 100% pure Uzbek version)")

with open(os.path.join(root_dir, 'index_en.html'), 'w', encoding='utf-8') as f:
    f.write(create_standalone_html('en', "CodeCraft 👾 HTML & CSS for Kids (English)"))
print("✅ Generated index_en.html (Dedicated 100% pure English version)")
