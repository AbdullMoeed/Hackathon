const toggleButton = document.getElementById('toggle-skills-btn');
const skillsSection = document.getElementById('skills-section');

toggleButton?.addEventListener('click', () => {
    if (skillsSection?.classList.contains('hidden')) {
        skillsSection.classList.remove('hidden');
    } else {
        skillsSection?.classList.add('hidden');
    }
});
