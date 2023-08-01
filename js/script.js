let searchToggle = document.querySelector("#search1");
        let dropdown = document.querySelector(".input_box");
        let input = document.querySelector("input");
        let serachIcon= document.querySelector(".search2")

        searchToggle.addEventListener("click", (event) => {
            event.stopPropagation()
            dropdown.classList.toggle("active_input_box");
        },)

        serachIcon.addEventListener("click",(event)=>{
            event.stopPropagation()
            dropdown.classList.add("active_input_box_2");

            if(dropdown.classList.contains("active_input_box_2")){

                searchToggle.addEventListener("click",(event)=>{
                    event.stopPropagation()
                    dropdown.classList.remove("active_input_box_2");
                })
            }
        })
        input.addEventListener("click",(event)=>{
            event.stopPropagation()
            dropdown.classList.add("active_input_box_2");
            
            if(dropdown.classList.contains("active_input_box_2")){

                searchToggle.addEventListener("click",(event)=>{
                    event.stopPropagation()
                    dropdown.classList.remove("active_input_box_2");
                })
            }
        })

        dropdown.addEventListener("click", (event)=>{
            event.stopPropagation()
            dropdown.classList.add("active_input_box_2");
        })
        addEventListener("click", (event)=>{
            event.stopPropagation()
            dropdown.classList.remove("active_input_box_2");
            dropdown.classList.remove("active_input_box");

         })
        addEventListener("click", (event) => {
            event.stopPropagation();
            dropdown.classList.remove("active");
            input.classList.remove("active_input")
        })

        // start home sub menu toggle
        let homeSubMenu = document.querySelector(".home_submenu")
        homeSubMenu.addEventListener("click", () => {
            homeSubMenu.classList.toggle("active_home");
        })


        let homePageStyle = document.querySelector(".homepage_style")

        homePageStyle.addEventListener("click", (event) => {
            event.stopPropagation();
            homeSubMenu.classList.toggle("style_homepage");
        })

        let threeBar = document.querySelector(".three_bar")
        let mainMenus = document.querySelector(".ul_li_a")
        let service= document.querySelector(".service_sub_menus")

        threeBar.addEventListener("click", () => {
            mainMenus.classList.toggle("toggle_main_menu");
            homeSubMenu.classList.remove("active_home");
            homeSubMenu.classList.remove("style_homepage");
            service.classList.remove("dropdown_s");
        })

        // let service= document.querySelector(".service_sub_menus")
        service.addEventListener("click", ()=>{
            service.classList.toggle("dropdown_s")
        })

        
        $('.carousel').carousel({
            interval: 11000
        })


        let monthlyBottom=document.querySelector(".btn1")
        let yearlyBottom=document.querySelector(".btn2")
        let scrollUpDown=document.querySelector(".items")

        monthlyBottom.addEventListener("click",(e) =>{
            e.stopPropagation();
            scrollUpDown.classList.add("active_monthly")
        } )

        yearlyBottom.addEventListener("click",(e) =>{
            e.stopPropagation();
            scrollUpDown.classList.add("active_yearly")
            if(scrollUpDown.classList.contains("active_yearly")){
                monthlyBottom.addEventListener("click",(e) =>{
                    e.stopPropagation();
                    scrollUpDown.classList.remove("active_yearly")
                } )
            }
        } )