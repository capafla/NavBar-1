// NAV - 1

const navUm = document.querySelectorAll(".nav-1");

navUm.forEach(el => {
    el.addEventListener("click", () => {
        function nav (){
            navUm.forEach(el => {
                    el.classList.remove("active-1");
            });
        }
        nav();

        el.classList.toggle("active-1");
    })
});


// NAV - 2


const navDois = document.querySelectorAll(".nav-2");

navDois.forEach(el => {
    el.addEventListener("click", () => {
        function nav (){
            navDois.forEach(el => {
                    el.classList.remove("active-2");
            });
        }
        nav();

        el.classList.toggle("active-2");
    })
});
