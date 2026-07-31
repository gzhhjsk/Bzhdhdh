document.addEventListener('DOMContentLoaded', function() {

    const card = document.getElementById('card');
    const husky = document.getElementById('husky');
    const passwordInput = document.getElementById('password');
    const usernameInput = document.getElementById('username');
    const doorBtn = document.getElementById('doorBtn');
    const loginForm = document.getElementById('loginForm');
    const toast = document.getElementById('toast');

    let toastTimeout = null;

    // ===== پنجه‌ها روی فیلد رمز =====
    passwordInput.addEventListener('focus', function() {
        husky.classList.add('password-focused');
    });
    passwordInput.addEventListener('blur', function() {
        husky.classList.remove('password-focused');
    });

    // ===== لاگین =====
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username !== 'reza grootz' || password !== '1234') {
            showToast('❌ Username or password is incorrect!', 'error');
            husky.style.animation = 'none';
            void husky.offsetWidth;
            husky.style.animation = 'happyHusky 0.3s ease 2';
            return;
        }

        // انیمیشن در
        doorBtn.classList.remove('door-closed');
        doorBtn.classList.add('door-open');
        await wait(380);

        doorBtn.classList.add('walking');
        await wait(200);

        doorBtn.classList.add('out');
        await wait(560);

        doorBtn.classList.remove('walking', 'door-open', 'out');
        doorBtn.classList.add('door-closed');

        card.classList.add('is-happy');
        showToast('✅ Welcome back, Reza!', 'success');

        husky.classList.remove('password-focused');
        passwordInput.blur();
    });

    // ===== توابع =====
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function showToast(message, type = 'info') {
        if (toastTimeout) {
            clearTimeout(toastTimeout);
            toast.classList.remove('show');
        }
        toast.textContent = message;
        toast.className = 'toast';
        if (type === 'success') toast.classList.add('success');
        if (type === 'error') toast.classList.add('error');
        void toast.offsetWidth;
        toast.classList.add('show');
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
            toastTimeout = null;
        }, 3000);
    }

    // ===== دکمه‌های اجتماعی =====
    document.querySelectorAll('.social-btns button').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showToast('🔐 Use "Sign in" with reza grootz / 1234', 'info');
        });
    });

    document.querySelector('.form-actions a').addEventListener('click', function(e) {
        e.preventDefault();
        showToast('📧 Reset link sent (demo)', 'info');
    });

    document.querySelector('.signup-link a').addEventListener('click', function(e) {
        e.preventDefault();
        showToast('📝 Create account page (demo)', 'info');
    });

    doorBtn.classList.add('door-closed');
    usernameInput.value = 'reza grootz';
});
