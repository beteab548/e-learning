document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.getElementById('profile-image');
    const blurBackground = document.getElementById('blur-background');
    const profileForm = document.getElementById('profile-form');

    profileImage.addEventListener('click', () => {
        blurBackground.style.display = 'block';
        profileForm.style.display = 'block';
    });

    blurBackground.addEventListener('click', () => {
        blurBackground.style.display = 'none';
        profileForm.style.display = 'none';
    });
});
