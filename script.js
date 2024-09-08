"use strict";
const toggleButton = document.getElementById('toggle-skills-btn');
const skillsSection = document.getElementById('skills-section');
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', () => {
    if (skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.classList.contains('hidden')) {
        skillsSection.classList.remove('hidden');
    }
    else {
        skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.classList.add('hidden');
    }
});
