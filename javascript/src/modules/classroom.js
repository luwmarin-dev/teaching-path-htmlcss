/**
 * Classroom Multi-Student & Shift Portal Module for CodeCraft JS
 * 100% Offline LocalStorage student management for computer labs with shifts.
 * Runs on Windows 7, 8, 10 with ZERO internet, servers, or database installations.
 */

import {
  listStudentProfiles,
  getActiveProfileId,
  registerStudentProfile,
  loginStudentProfile,
  deleteStudentProfile,
  loadProfileState,
  exportClassroomBackup,
  importClassroomBackup,
  CLASS_SHIFTS
} from './state.js';
import { t, escapeHtml } from './i18n.js';
import { LESSONS } from './curriculum.js';

export function openStudentPortalModal({ state, onProfileSwitched, playSound, defaultTab = 'login' }) {
  playSound?.('click', state.audioEnabled);

  const existing = document.getElementById('student-portal-modal');
  if (existing) existing.remove();

  const isUz = state.lang === 'uz';
  let activeTab = defaultTab;
  let selectedAvatar = '⚡';
  let selectedShiftFilter = 'all';
  let defaultRegShift = '1-Smena (10:30 - 12:00)';

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'student-portal-modal';

  function renderModalContent() {
    const profiles = listStudentProfiles();
    const activeId = getActiveProfileId();

    modal.innerHTML = `
      <div class="modal-card student-portal-card">
        <div class="student-portal-header">
          <div class="portal-header-left">
            <span class="portal-icon">⚡</span>
            <div>
              <h3 class="portal-title">${isUz ? "CodeCraft JS: O'quvchilar & Smenalar Portali" : "CodeCraft JS: Student Profiles & Shifts"}</h3>
              <p class="portal-subtitle">${isUz ? "100% Oflayn: Ma'lumotlar ushbu kompyuterda xavfsiz saqlanadi" : "100% Offline: Data stored permanently on this PC"}</p>
            </div>
          </div>
          <button id="btn-close-portal" class="btn-close-modal" title="Close">✕</button>
        </div>

        <div class="portal-tabs-nav">
          <button class="portal-tab-btn ${activeTab === 'login' ? 'active' : ''}" id="tab-btn-login">
            👤 ${isUz ? "O'quvchini Tanlash (Kirish)" : "Login / Select Student"} (${profiles.length})
          </button>
          <button class="portal-tab-btn ${activeTab === 'register' ? 'active' : ''}" id="tab-btn-register">
            ➕ ${isUz ? "Yangi O'quvchi (Ro'yxatdan o'tish)" : "New Student (Register)"}
          </button>
          <button class="portal-tab-btn ${activeTab === 'backup' ? 'active' : ''}" id="tab-btn-backup">
            💾 ${isUz ? "Fleshka & O'qituvchi Boshqaruvi" : "USB Backup & Teacher Tools"}
          </button>
        </div>

        <div class="portal-body" id="portal-tab-body">
          ${renderTabBody(profiles, activeId)}
        </div>
      </div>
    `;

    attachEvents();
  }

  function renderTabBody(profiles, activeId) {
    if (activeTab === 'login') {
      if (profiles.length === 0) {
        return `
          <div class="portal-empty-state">
            <span style="font-size: 48px;">🎒</span>
            <h4>${isUz ? "Hali hech qanday o'quvchi ro'yxatdan o'tmagan" : "No students registered on this computer yet"}</h4>
            <p>${isUz ? "Darsni boshlash uchun yangi o'quvchini ro'yxatdan o'tkazing." : "Register a new student to start tracking their progress."}</p>
            <button id="btn-go-to-reg" class="btn-modal btn-modal-primary" style="margin-top: 12px;">
              ➕ ${isUz ? "Yangi O'quvchi Qo'shish" : "Add First Student"}
            </button>
          </div>
        `;
      }

      const countAll = profiles.length;
      const count1 = profiles.filter(p => (p.shift || '').includes('1-Smena') || (p.shift || '').includes('10:30')).length;
      const count2 = profiles.filter(p => (p.shift || '').includes('2-Smena') || (p.shift || '').includes('14:00')).length;
      const count3 = profiles.filter(p => (p.shift || '').includes('3-Smena') || (p.shift || '').includes('15:30')).length;

      let filteredProfiles = profiles;
      if (selectedShiftFilter === '1') {
        filteredProfiles = profiles.filter(p => (p.shift || '').includes('1-Smena') || (p.shift || '').includes('10:30'));
      } else if (selectedShiftFilter === '2') {
        filteredProfiles = profiles.filter(p => (p.shift || '').includes('2-Smena') || (p.shift || '').includes('14:00'));
      } else if (selectedShiftFilter === '3') {
        filteredProfiles = profiles.filter(p => (p.shift || '').includes('3-Smena') || (p.shift || '').includes('15:30'));
      }

      return `
        <div class="portal-shift-pills-bar">
          <button type="button" class="portal-shift-pill ${selectedShiftFilter === 'all' ? 'active' : ''}" data-filter-shift="all">
            👥 ${isUz ? "Barcha Smenalar" : "All Shifts"} (${countAll})
          </button>
          <button type="button" class="portal-shift-pill ${selectedShiftFilter === '1' ? 'active' : ''}" data-filter-shift="1">
            🕒 1-Smena (10:30 – 12:00) (${count1})
          </button>
          <button type="button" class="portal-shift-pill ${selectedShiftFilter === '2' ? 'active' : ''}" data-filter-shift="2">
            🕒 2-Smena (14:00 – 15:30) (${count2})
          </button>
          <button type="button" class="portal-shift-pill ${selectedShiftFilter === '3' ? 'active' : ''}" data-filter-shift="3">
            🕒 3-Smena (15:30 – 17:00) (${count3})
          </button>
        </div>

        ${filteredProfiles.length === 0 ? `
          <div class="portal-empty-state" style="padding: 24px;">
            <span style="font-size: 36px;">🕒</span>
            <h4>${isUz ? "Ushbu smenada hozircha o'quvchilar yo'q" : "No students found in this shift"}</h4>
            <p>${isUz ? "Ushbu smenadagi o'quvchini ro'yxatdan o'tkazish uchun quyidagi tugmani bosing." : "Click below to register a new student for this shift schedule."}</p>
            <button class="btn-modal btn-modal-primary" id="btn-add-to-shift" style="margin-top: 10px;">
              ➕ ${isUz ? "Shu smenaga o'quvchi qo'shish" : "Add Student to this Shift"}
            </button>
          </div>
        ` : `
          <div class="student-cards-grid">
            ${filteredProfiles.map(p => {
              const pState = loadProfileState(p.id);
              const total = LESSONS.length;
              const completed = pState.completedLessons ? pState.completedLessons.length : 0;
              const pct = Math.round((completed / total) * 100);
              const isActive = p.id === activeId;

              return `
                <div class="student-profile-card ${isActive ? 'active-card' : ''}" data-profile-id="${p.id}">
                  <div class="card-avatar-col">
                    <span class="card-avatar">${escapeHtml(p.avatar || '⚡')}</span>
                    ${p.pin ? '<span class="pin-protected-badge" title="PIN bilan himoyalangan">🔒 PIN</span>' : ''}
                  </div>
                  <div class="card-info-col">
                    <div class="card-name-row">
                      <strong class="card-student-name">${escapeHtml(p.name)}</strong>
                      ${isActive ? `<span class="badge-active-tag">${isUz ? 'Faol' : 'Active'}</span>` : ''}
                    </div>
                    <div class="card-shift-tag">🕒 ${escapeHtml(p.shift || '1-Smena (10:30 - 12:00)')}</div>
                    <div class="card-progress-bar-wrap">
                      <div class="card-progress-bar-fill" style="width: ${pct}%;"></div>
                    </div>
                    <div class="card-stats-row">
                      <span>📚 ${completed}/${total} (${pct}%)</span>
                      <span>⭐ ${pState.stars || 0}</span>
                      <span>🏆 ${pState.badges ? pState.badges.length : 0}</span>
                    </div>
                  </div>
                  <div class="card-action-col">
                    <button class="btn-card-select ${isActive ? 'btn-selected' : ''}" data-id="${p.id}">
                      ${isActive ? (isUz ? '✅ Tanlangan' : '✅ Active') : (isUz ? '👉 Kirish' : '👉 Login')}
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `}
      `;
    }

    if (activeTab === 'register') {
      const avatars = ['⚡', '🤖', '🚀', '🦊', '🦁', '🐼', '💎', '⭐', '🎮', '🦄'];
      return `
        <form class="portal-form" id="form-register-student">
          <div class="form-row">
            <label for="reg-name"><strong>${isUz ? "O'quvchi Ismi va Familiyasi:" : "Student Full Name:"}</strong></label>
            <input type="text" id="reg-name" class="lab-input-text" placeholder="${isUz ? 'Masalan: Ali Karimov' : 'e.g. Alex Johnson'}" required autofocus />
          </div>

          <div class="form-row">
            <label for="reg-shift"><strong>${isUz ? "Dars Smenasi / Vaqti:" : "Class Shift Schedule:"}</strong></label>
            <select id="reg-shift" class="lab-select">
              <option value="1-Smena (10:30 - 12:00)" ${defaultRegShift.includes('10:30') ? 'selected' : ''}>1-Smena (10:30 – 12:00)</option>
              <option value="2-Smena (14:00 - 15:30)" ${defaultRegShift.includes('14:00') ? 'selected' : ''}>2-Smena (14:00 – 15:30)</option>
              <option value="3-Smena (15:30 - 17:00)" ${defaultRegShift.includes('15:30') ? 'selected' : ''}>3-Smena (15:30 – 17:00)</option>
            </select>
          </div>

          <div class="form-row">
            <label><strong>${isUz ? "Qahramoningizni Tanlang (Avatar):" : "Choose Your Avatar:"}</strong></label>
            <div class="avatar-picker-row">
              ${avatars.map(av => `
                <button type="button" class="avatar-pick-btn ${av === selectedAvatar ? 'selected' : ''}" data-avatar="${av}">
                  ${av}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="form-row">
            <label for="reg-pin"><strong>${isUz ? "Maxfiy PIN-kod (Ixtiyoriy 4 ta raqam):" : "Secret PIN (Optional 4 digits):"}</strong></label>
            <input type="password" id="reg-pin" class="lab-input-text" maxlength="4" placeholder="${isUz ? 'Boshqalar kirmasligi uchun (ixtiyoriy)' : 'Prevent others from accessing (optional)'}" />
            <small style="color: var(--text-muted); font-size: 11px;">
              ${isUz ? "Agar kiritmasangiz, o'quvchi 1 ta bosishda erkin kira oladi." : "If empty, student can log in instantly with 1 click."}
            </small>
          </div>

          <div class="form-submit-row">
            <button type="submit" class="btn-modal btn-modal-primary" style="padding: 12px 24px; font-size: 14px;">
              🚀 ${isUz ? "Ro'yxatdan O'tish va Boshlash" : "Register & Start Practice"}
            </button>
          </div>
        </form>
      `;
    }

    if (activeTab === 'backup') {
      return `
        <div class="portal-backup-panel">
          <div class="backup-info-card">
            <h4>💾 ${isUz ? "O'qituvchi Uchun: Fleshkaga Saqlash & O'tkazish" : "Teacher Tools: USB Backup & Transfer"}</h4>
            <p>${isUz ? "Ushbu kompyuterdagi barcha JavaScript o'quvchilari ro'yxati va ularning yulduzchalarini fleshkaga fayl qilib saqlab oling. Boshqa kompyuterga bir zumda yuklashingiz mumkin." : "Export all student accounts and their progress into a single file to keep backups on USB or transfer students between offline lab PCs."}</p>
          </div>

          <div class="backup-actions-grid">
            <div class="backup-action-box">
              <span style="font-size: 32px;">💾</span>
              <strong>${isUz ? "Fleshkaga Saqlash" : "Export to USB"}</strong>
              <p style="font-size: 11px; color: var(--text-muted);">${isUz ? "Barcha o'quvchilar progressini bitta .json faylga yuklab oladi." : "Downloads a complete .json file with all student profiles & stars."}</p>
              <button id="btn-export-backup" class="btn-modal btn-modal-primary">
                💾 ${isUz ? "Faylni Yuklab Olish (.json)" : "Download Backup (.json)"}
              </button>
            </div>

            <div class="backup-action-box">
              <span style="font-size: 32px;">📂</span>
              <strong>${isUz ? "Fleshkadan Yuklash" : "Import from USB"}</strong>
              <p style="font-size: 11px; color: var(--text-muted);">${isUz ? "Boshqa kompyuterdan saqlangan .json faylni ushbu kompyuterga qo'shadi." : "Restores or merges students from a .json backup file into this PC."}</p>
              <input type="file" id="file-import-backup" accept=".json" style="display: none;" />
              <button id="btn-trigger-import" class="btn-modal" style="background: var(--bg-surface); border: 1px solid var(--border-color); color: white;">
                📂 ${isUz ? "Faylni Tanlash..." : "Choose File..."}
              </button>
            </div>
          </div>

          <div style="margin-top: 20px;">
            <h4 style="font-size: 13px; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px;">
              ${isUz ? "Ushbu Kompyuterdagi O'quvchilar Ro'yxati:" : "Registered Students on this PC:"}
            </h4>
            <div class="backup-students-table-wrap">
              <table class="tag-list-table">
                <thead>
                  <tr>
                    <th>${isUz ? "O'quvchi" : "Student"}</th>
                    <th>${isUz ? "Smena" : "Shift"}</th>
                    <th>${isUz ? "Bajarilgan" : "Completed"}</th>
                    <th>⭐</th>
                    <th>${isUz ? "Amal" : "Action"}</th>
                  </tr>
                </thead>
                <tbody>
                  ${profiles.map(p => {
                    const pState = loadProfileState(p.id);
                    return `
                      <tr>
                        <td><strong>${escapeHtml(p.avatar || '⚡')} ${escapeHtml(p.name)}</strong></td>
                        <td>${escapeHtml(p.shift || '1-Smena (10:30 - 12:00)')}</td>
                        <td>${pState.completedLessons ? pState.completedLessons.length : 0} / ${LESSONS.length}</td>
                        <td>⭐ ${pState.stars || 0}</td>
                        <td>
                          <button class="btn-delete-student" data-del-id="${p.id}" title="${isUz ? 'Profilni o\'chirish' : 'Delete profile'}">
                            🗑️
                          </button>
                        </td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    }

    return '';
  }

  function attachEvents() {
    // Close button
    modal.querySelector('#btn-close-portal')?.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });

    // Tab buttons
    modal.querySelector('#tab-btn-login')?.addEventListener('click', () => { activeTab = 'login'; renderModalContent(); });
    modal.querySelector('#tab-btn-register')?.addEventListener('click', () => { activeTab = 'register'; renderModalContent(); });
    modal.querySelector('#tab-btn-backup')?.addEventListener('click', () => { activeTab = 'backup'; renderModalContent(); });
    modal.querySelector('#btn-go-to-reg')?.addEventListener('click', () => { activeTab = 'register'; renderModalContent(); });

    // Shift filter pills
    modal.querySelectorAll('.portal-shift-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedShiftFilter = btn.getAttribute('data-filter-shift') || 'all';
        renderModalContent();
      });
    });

    // Add student to specific shift button
    modal.querySelector('#btn-add-to-shift')?.addEventListener('click', () => {
      if (selectedShiftFilter === '1') defaultRegShift = '1-Smena (10:30 - 12:00)';
      else if (selectedShiftFilter === '2') defaultRegShift = '2-Smena (14:00 - 15:30)';
      else if (selectedShiftFilter === '3') defaultRegShift = '3-Smena (15:30 - 17:00)';
      activeTab = 'register';
      renderModalContent();
    });

    // Select student in login tab
    modal.querySelectorAll('.btn-card-select').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const profiles = listStudentProfiles();
        const p = profiles.find(x => x.id === id);
        if (!p) return;

        let pin = '';
        if (p.pin) {
          pin = prompt(isUz ? "Maxfiy 4 xonali PIN-kodni kiriting:" : "Enter your 4-digit secret PIN:");
          if (pin === null) return;
        }

        const res = loginStudentProfile(id, pin);
        if (res.success) {
          playSound?.('success', true);
          onProfileSwitched?.(res.state, res.profile);
          modal.remove();
        } else {
          playSound?.('tryAgain', true);
          alert(isUz ? "❌ PIN-kod noto'g'ri kiritildi!" : "❌ Incorrect PIN!");
        }
      });
    });

    // Avatar pickers in register tab
    modal.querySelectorAll('.avatar-pick-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedAvatar = btn.getAttribute('data-avatar');
        modal.querySelectorAll('.avatar-pick-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });

    // Form submit for registration
    modal.querySelector('#form-register-student')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = modal.querySelector('#reg-name')?.value;
      const shift = modal.querySelector('#reg-shift')?.value;
      const pin = modal.querySelector('#reg-pin')?.value;

      const { profile, state: freshState } = registerStudentProfile({
        name,
        shift,
        avatar: selectedAvatar,
        pin
      });

      playSound?.('success', true);
      onProfileSwitched?.(freshState, profile);
      modal.remove();
    });

    // Export to USB JSON file
    modal.querySelector('#btn-export-backup')?.addEventListener('click', () => {
      const backupJson = exportClassroomBackup();
      const dateStr = new Date().toISOString().slice(0, 10);
      const filename = `codecraft_js_backup_${dateStr}.json`;

      const blob = new Blob([backupJson], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      playSound?.('click', true);
    });

    // Trigger Import file input
    const fileInput = modal.querySelector('#file-import-backup');
    modal.querySelector('#btn-trigger-import')?.addEventListener('click', () => {
      fileInput?.click();
    });

    fileInput?.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (evt) => {
        const text = evt.target?.result;
        const res = importClassroomBackup(text);
        if (res.success) {
          playSound?.('success', true);
          alert(isUz ? `✅ ${res.count} ta o'quvchi ma'lumotlari muvaffaqiyatli yuklandi!` : `✅ ${res.count} student profiles imported successfully!`);
          renderModalContent();
        } else {
          playSound?.('tryAgain', true);
          alert(isUz ? "❌ Faylni o'qishda xatolik yuz berdi." : "❌ Failed to parse backup file.");
        }
      };
      reader.readAsText(file);
    });

    // Delete student profile in backup tab
    modal.querySelectorAll('.btn-delete-student').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-del-id');
        const confirmMsg = isUz ? "Haqiqatan ham ushbu o'quvchi profilini o'chirmoqchimisiz?" : "Are you sure you want to delete this student profile?";
        if (confirm(confirmMsg)) {
          deleteStudentProfile(id);
          playSound?.('click', true);
          renderModalContent();
        }
      });
    });
  }

  renderModalContent();
  document.body.appendChild(modal);
}
