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

    // واجهة فرز الاخصائيين
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


    //واجهة اضافة الاخصائيين
    const addSpecialistBtn = document.getElementById('add-specialist-btn')
    const addSpecialistContainer = document.getElementById('add-specialist-container');
    const closeAddSpecialistBtn = document.getElementById('close-add-specialist-btn');



    addSpecialistBtn.addEventListener('click', function () {
        addSpecialistContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        // progressRate.classList.add('w-1/4');
        progressRate.style.width = '25%';
    });





    // واجهة اضافة الاخصائيين - الخطوات

    const personalData = document.getElementById('personal-data');
    const addressInformation = document.getElementById('address-information');
    const educationalDetails = document.getElementById('educational-details');
    const professionalDetails = document.getElementById('professional-details');

    const nextPersonalDataBtn = document.getElementById('next-personal-data-btn');
    const nextAddressInformationBtn = document.getElementById('next-address-information-btn');
    const nextEducationalDetailsBtn = document.getElementById('next-educational-details-btn');

    const cancleAddSpecialistBtn = document.querySelectorAll('.cancle-add-specialist-btn');

    const titlePart = document.getElementById('title-part');  // العنصر الذي يعرض عنوان الجزء الحالي من النموذج 
    const iconPart = document.querySelector('#icon-part');  // العنصر الذي يعرض الايقونة الخاصة بالجزء الحالي من النموذج

    const progressRate = document.querySelector('.progress-rate');

    nextPersonalDataBtn.onclick = (e) => {
        e.preventDefault();
        personalData.classList.add('hidden');
        addressInformation.classList.remove('hidden');
        titlePart.textContent = 'معلومات العنوان';
        iconPart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M9.00016 10.0726C10.2925 10.0726 11.3402 9.02492 11.3402 7.73258C11.3402 6.44023 10.2925 5.39258 9.00016 5.39258C7.70781 5.39258 6.66016 6.44023 6.66016 7.73258C6.66016 9.02492 7.70781 10.0726 9.00016 10.0726Z" stroke="#4E5969" stroke-width="1.5"/>
<path d="M2.71478 6.3675C4.19228 -0.127498 13.8148 -0.119998 15.2848 6.375C16.1473 10.185 13.7773 13.41 11.6998 15.405C10.1923 16.86 7.80728 16.86 6.29228 15.405C4.22228 13.41 1.85228 10.1775 2.71478 6.3675Z" stroke="#4E5969" stroke-width="1.5"/>
</svg>`;

        progressRate.style.width = '50%'; 
    }

    nextAddressInformationBtn.onclick = (e) => {
        e.preventDefault();
        addressInformation.classList.add('hidden');
        educationalDetails.classList.remove('hidden');
        titlePart.textContent = 'التفاصيل التعليمية';
        iconPart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M3.19531 8.26508V11.9926C3.19531 13.3576 3.19531 13.3576 4.48531 14.2276L8.03281 16.2751C8.56531 16.5826 9.43531 16.5826 9.96781 16.2751L13.5153 14.2276C14.8053 13.3576 14.8053 13.3576 14.8053 11.9926V8.26508C14.8053 6.90008 14.8053 6.90008 13.5153 6.03008L9.96781 3.98258C9.43531 3.67508 8.56531 3.67508 8.03281 3.98258L4.48531 6.03008C3.19531 6.90008 3.19531 6.90008 3.19531 8.26508Z" stroke="#4E5969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.125 5.7225V3.75C13.125 2.25 12.375 1.5 10.875 1.5H7.125C5.625 1.5 4.875 2.25 4.875 3.75V5.67" stroke="#4E5969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.47282 8.24271L9.90032 8.91022C9.96782 9.01522 10.1178 9.12021 10.2303 9.15021L10.9953 9.34522C11.4678 9.46522 11.5953 9.87021 11.2878 10.2452L10.7853 10.8527C10.7103 10.9502 10.6503 11.1227 10.6578 11.2427L10.7028 12.0302C10.7328 12.5177 10.3878 12.7652 9.93782 12.5852L9.20282 12.2927C9.09032 12.2477 8.90282 12.2477 8.79032 12.2927L8.05532 12.5852C7.60532 12.7652 7.26032 12.5102 7.29032 12.0302L7.33532 11.2427C7.34282 11.1227 7.28282 10.9427 7.20782 10.8527L6.70532 10.2452C6.39782 9.87021 6.52532 9.46522 6.99782 9.34522L7.76282 9.15021C7.88282 9.12021 8.03282 9.00772 8.09282 8.91022L8.52032 8.24271C8.79032 7.83771 9.21032 7.83771 9.47282 8.24271Z" stroke="#4E5969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
        progressRate.style.width = '75%'; 
    }

    nextEducationalDetailsBtn.onclick = (e) => {
        e.preventDefault();
        educationalDetails.classList.add('hidden');
        professionalDetails.classList.remove('hidden');
        titlePart.textContent = 'التفاصيل المهنية';
        iconPart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M9 13.6499C10.6569 13.6499 12 12.3068 12 10.6499C12 8.99305 10.6569 7.6499 9 7.6499C7.34315 7.6499 6 8.99305 6 10.6499C6 12.3068 7.34315 13.6499 9 13.6499Z" stroke="#4E5969" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.1875 9.7124V10.4099C9.1875 10.6724 9.0525 10.9199 8.82 11.0549L8.25 11.3999" stroke="#4E5969" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.99963 16.5H11.9996C15.0146 16.5 15.5546 15.2925 15.7121 13.8225L16.2746 7.8225C16.4771 5.9925 15.9521 4.5 12.7496 4.5H5.24963C2.04713 4.5 1.52213 5.9925 1.72463 7.8225L2.28713 13.8225C2.44463 15.2925 2.98463 16.5 5.99963 16.5Z" stroke="#4E5969" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 4.5V3.9C6 2.5725 6 1.5 8.4 1.5H9.6C12 1.5 12 2.5725 12 3.9V4.5" stroke="#4E5969" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.2378 8.25C14.9403 9.195 13.5003 9.855 12.0078 10.23" stroke="#4E5969" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.96484 8.45264C3.21734 9.30764 4.58234 9.91514 5.99984 10.2601" stroke="#4E5969" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
        
        
        progressRate.style.width = '100%'; 
    }

    cancleAddSpecialistBtn.forEach(btn => {
        btn.onclick = (e) => {
            addSpecialistContainer.classList.add('hidden');
            personalData.classList.remove('hidden');
            addressInformation.classList.add('hidden');
            educationalDetails.classList.add('hidden');
            professionalDetails.classList.add('hidden');
            titlePart.textContent = 'البيانات الشخصية';
            iconPart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path
                                d="M9.11992 8.1525C9.04492 8.145 8.95492 8.145 8.87242 8.1525C7.08742 8.0925 5.66992 6.63 5.66992 4.83C5.66992 2.9925 7.15492 1.5 8.99992 1.5C10.8374 1.5 12.3299 2.9925 12.3299 4.83C12.3224 6.63 10.9049 8.0925 9.11992 8.1525Z"
                                stroke="#4E5969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M5.37004 10.92C3.55504 12.135 3.55504 14.115 5.37004 15.3225C7.43254 16.7025 10.815 16.7025 12.8775 15.3225C14.6925 14.1075 14.6925 12.1275 12.8775 10.92C10.8225 9.5475 7.44004 9.5475 5.37004 10.92Z"
                                stroke="#4E5969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>`;
            
            
            progressRate.style.width = '25%';            
        }
    })
    
    closeAddSpecialistBtn.onclick = () => {
        addSpecialistContainer.classList.add('hidden');
        personalData.classList.remove('hidden');
        addressInformation.classList.add('hidden');
        educationalDetails.classList.add('hidden');
        professionalDetails.classList.add('hidden');
        titlePart.textContent = 'البيانات الشخصية';
        iconPart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path
                                d="M9.11992 8.1525C9.04492 8.145 8.95492 8.145 8.87242 8.1525C7.08742 8.0925 5.66992 6.63 5.66992 4.83C5.66992 2.9925 7.15492 1.5 8.99992 1.5C10.8374 1.5 12.3299 2.9925 12.3299 4.83C12.3224 6.63 10.9049 8.0925 9.11992 8.1525Z"
                                stroke="#4E5969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M5.37004 10.92C3.55504 12.135 3.55504 14.115 5.37004 15.3225C7.43254 16.7025 10.815 16.7025 12.8775 15.3225C14.6925 14.1075 14.6925 12.1275 12.8775 10.92C10.8225 9.5475 7.44004 9.5475 5.37004 10.92Z"
                                stroke="#4E5969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>`;
        
        progressRate.style.width = '25%'; 
    }
           
        
    




}
