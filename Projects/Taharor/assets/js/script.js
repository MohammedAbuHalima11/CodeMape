//Login Page

//Toggle password visibility

const passwordInput = document.getElementById('password');
const togglePasswordIcon = document.getElementById('togglePassword');

if (passwordInput && togglePasswordIcon) {
    togglePasswordIcon.onclick = function () {

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePasswordIcon.src = '../assets/images/eye.png';
        }
        else {
            passwordInput.type = 'password';
            togglePasswordIcon.src = '../assets/images/eye-slash.png';
        }
    }
}



// Handle form submission

const loginForm = document.querySelector('form');

if (loginForm) {
    loginForm.addEventListener('submit', function (e) {


        e.preventDefault(); // منع عمل الصفحة ريفريش و اختفاء البيانات

        const emailValue = document.getElementById('email').value.trim();
        const passwordValue = document.getElementById('password').value.trim();

        if (emailValue === 'mohammed.abu.halima11@gmail.com' && passwordValue === '0123456789') {
            alert('تم تسجيل الدخول بنجاح!');
            window.location.href = 'index.html';
        }
        else {
            alert('البريد الإلكتروني أو كلمة المرور غير صحيحة. يرجى المحاولة مرة أخرى.');
        }
    })
}


// //===============================================================================================//
// Sidebare



// ==========================================
// 1. ميزة التلوين الديناميكي لأزرار السايد بار (المعدلة)
// ==========================================

const sidebarLinks = document.querySelectorAll('aside a');

if (sidebarLinks) {
    const currentPage = window.location.pathname.split('/').pop();

    sidebarLinks.forEach(link => {
        const linkPage = link.getAttribute('href');

        if (linkPage && linkPage.includes(currentPage)) {

            link.classList.add('bg-[#81C6C3]', 'text-[#075E66]', 'font-bold');
            link.classList.remove('hover:bg-[#05444a]');


            const textSpan = link.querySelector('span');
            textSpan.classList.replace('text-white', 'text-[#075E66]');

        } else {

            link.classList.remove('bg-[#81C6C3]', 'text-[#075E66]', 'font-bold');

            const textSpan = link.querySelector('span');
            textSpan.classList.replace('text-[#075E66]', 'text-white');

        }
    });
}

const supportProgramsLink = document.getElementById('support-programs');
const listSupportPrograms = document.getElementById('list-support-programs');

const notificationsLink = document.getElementById('notifications');
const listNotifications = document.getElementById('list-notifications');

const pagesLink = document.getElementById('pages-link');
const listPages = document.getElementById('list-pages');

const supportProgramsArrow = document.getElementById('support-programs-arrow');
const notificationsArrow = document.getElementById('notifications-arrow');
const pagesArrow = document.getElementById('pages-arrow');

if (supportProgramsLink) {

    //الضغط على زر البرامج الداعمة
    supportProgramsLink.addEventListener('click', function (e) {
        if (!listNotifications.classList.contains('hidden')) {
            notificationsArrow.classList.remove('-scale-y-100');
            listNotifications.classList.add('hidden');
        }

        if (!listPages.classList.contains('hidden')) {
            pagesArrow.classList.remove('-scale-y-100');
            listPages.classList.add('hidden');
        }
        supportProgramsArrow.classList.toggle('-scale-y-100');
        listSupportPrograms.classList.toggle('hidden');
    });

    //الضغط على زر الاشعارات
    notificationsLink.addEventListener('click', function (e) {
        if (!listSupportPrograms.classList.contains('hidden')) {
            supportProgramsArrow.classList.remove('-scale-y-100');
            listSupportPrograms.classList.add('hidden');
        }

        if (!listPages.classList.contains('hidden')) {
            pagesArrow.classList.remove('-scale-y-100');
            listPages.classList.add('hidden');
        }
        notificationsArrow.classList.toggle('-scale-y-100');
        listNotifications.classList.toggle('hidden');
    });

    //الضغط على زر الصفحات
    pagesLink.addEventListener('click', function (e) {
        if (!listSupportPrograms.classList.contains('hidden')) {
            supportProgramsArrow.classList.remove('-scale-y-100');
            listSupportPrograms.classList.add('hidden');
        }

        if (!listNotifications.classList.contains('hidden')) {
            notificationsArrow.classList.remove('-scale-y-100');
            listNotifications.classList.add('hidden');
        }
        pagesArrow.classList.toggle('-scale-y-100');
        listPages.classList.toggle('hidden');
    });
}




//======================================================================================//
//header

const profile_menu_logout_btn = document.getElementById('profile-menu-logout-btn');
const profile_menu_logout = document.getElementById('profile-menu-logout');

if (profile_menu_logout) {
    profile_menu_logout_btn.onclick = () => {
        profile_menu_logout.classList.toggle('hidden');
        profile_menu_logout_btn.classList.toggle('-scale-y-100');
    }
}

const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menu-btn");

if (sidebar && menuBtn) {
    menuBtn.addEventListener("click", function () {
        sidebar.classList.toggle("translate-x-full");
    });
}






//======================================================================================//
// Customer-management page

const customerManaementPage = document.getElementById('customer-management-page');

if (customerManaementPage) {
    const actionButtons = document.querySelectorAll('.table-action-btn');

    actionButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();

            const currentMenu = this.nextElementSibling;

            document.querySelectorAll('.table-action-menu').forEach(menu => {
                if (menu !== currentMenu) {
                    menu.classList.add('hidden');
                }
            });

            currentMenu.classList.toggle('hidden');
        });
    });

    // اغلاق القائمة عند الضغط على اي مكان في الصفحة
    document.addEventListener('click', function () {
        document.querySelectorAll('.table-action-menu').forEach(menu => {
            menu.classList.add("hidden");
        });
    });

    // واجهة فرز الأعضاء
    const filteringBtn = document.getElementById('filtering-btn')
    const customerSortingContainer = document.getElementById('customer-sorting-container');
    const closeCustomerSortingBtn = document.getElementById('close-customer-sorting-btn');

    filteringBtn.addEventListener('click', function () {
        customerSortingContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeCustomerSortingBtn.addEventListener('click', function () {
        customerSortingContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });


    //واجهة اضافة عميل
    const addClientBtn = document.getElementById('add-client-btn')
    const addClientContainer = document.getElementById('add-client-container');
    const closeAddClientBtn = document.getElementById('close-add-client-btn');
    const cancleAddClientBtn = document.getElementById('cancle-add-client-btn');


    addClientBtn.addEventListener('click', function () {
        addClientContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeAddClientBtn.addEventListener('click', function () {
        addClientContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    cancleAddClientBtn.onclick = () => {
        addClientContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

}


//======================================================================================//
// Customer-details page

const customerDetailspage = document.getElementById('customer-details-page')

if (customerDetailspage) {
    const customerOptionsBtn = document.getElementById('customer-options-btn');
    const customerOptionsMenu = document.getElementById('customer-options-menu');

    customerOptionsBtn.onclick = (e) => {
        /*
        لما نضغط على الزر بالاول بتظهر القائمة و بنفس الوقت بتختفي لانه الزر من ال
        document
        لدلك استخدمنا e.stopPropagation()
        لمنع صعود الحدث للاعلى و عدم تأثر غير الزر بحدث النقرة على الزر
        */
        e.stopPropagation();
        customerOptionsMenu.classList.toggle('hidden');
    }
    document.onclick = () => {
        if (!customerOptionsMenu.classList.contains('hidden')) customerOptionsMenu.classList.add('hidden');
    }
}


//======================================================================================//
// Session-details page

const sessionDetailspage = document.getElementById('session-details-page')

if (sessionDetailspage) {
    
}


//======================================================================================//
// Specialist-management page

const specialistManaementPage = document.getElementById('specialist-management-page');

if (specialistManaementPage) {
    const actionButtons = document.querySelectorAll('.table-action-btn');

    actionButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();

            const currentMenu = this.nextElementSibling;

            document.querySelectorAll('.table-action-menu').forEach(menu => {
                if (menu !== currentMenu) {
                    menu.classList.add('hidden');
                }
            });

            currentMenu.classList.toggle('hidden');
        });
    });

    // اغلاق القائمة عند الضغط على اي مكان في الصفحة
    document.addEventListener('click', function () {
        document.querySelectorAll('.table-action-menu').forEach(menu => {
            menu.classList.add("hidden");
        });
    });

    // واجهة فرز الأعضاء
    const filteringBtn = document.getElementById('filtering-btn')
    const specialistSortingContainer = document.getElementById('specialist-sorting-container');
    const closeSpecialistSortingBtn = document.getElementById('close-specialist-sorting-btn');

    filteringBtn.addEventListener('click', function () {
        specialistSortingContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeSpecialistSortingBtn.addEventListener('click', function () {
        specialistSortingContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });


    //واجهة اضافة عميل
    const addSpecialistBtn = document.getElementById('add-specialist-btn')
    const addSpecialistContainer = document.getElementById('add-specialist-container');
    const closeAddSpecialistBtn = document.getElementById('close-add-specialist-btn');
    const cancleAddSpecialistBtn = document.getElementById('cancle-add-specialist-btn');


    addSpecialistBtn.addEventListener('click', function () {
        addSpecialistContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeAddSpecialistBtn.addEventListener('click', function () {
        addSpecialistContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    cancleAddSpecialistBtn.onclick = () => {
        addSpecialistContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

}
