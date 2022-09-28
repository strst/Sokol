const navigation = document.querySelector(".containerNavigation");
const navigationMobile = document.querySelector(".navigation_mobile");
const navigationMobileContent = document.querySelector(
  "._display_mobile_navigation"
);
const navigationMobileContentfooter = document.querySelector(
  ".display_mobile_navigation_con"
);
const footer = document.querySelector(".footer_right");
const help = document.querySelector("._help_selector");
const mainpage = document.querySelector(".main");
const helppage = document.querySelector(".help");
const aboutpage = document.querySelector(".about");
const aboutskillpage = document.querySelector(".about_skill");
const contactspage = document.querySelector(".contacts");
const feedback = document.querySelector("._display_feedback");
const phone = document.querySelector("._display_phone");
const navi = document.querySelector("._display_navigation");
const navigationDrop = document.querySelector(".navigationRight_add_drop");
const footerDrop = document.querySelector(".footer_right_add_drop");
const closeMail = document.querySelector("._closeMail");
const closePhone = document.querySelector("._closePhone");
const closeNavigation = document.querySelector("._closeNavigation");
const closeMobileNavigation = document.querySelector("._closeMobileNavigation");
const helpSelector1 = document.querySelector("._help_selector1");
const helpSelector2 = document.querySelector("._help_selector2");
const cardHelp = document.querySelector(".card_help");
const cardHelp2 = document.querySelector(".card_help2");
const sliderImage = document.querySelectorAll("._slider");
const slider = document.querySelector(".slider_image");
let sliderCounter = 0;
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  document
    .querySelector(".footer_right_add")
    .classList.remove("_footer_right_hover");
  document
    .querySelector(".navigationRight_add")
    .classList.remove("_navigationRight_hover");
}
const sliderFunc = () => {
  slider.addEventListener("click", function handler(event) {
    if (event.target.closest(".slider_left")) {
      if (sliderCounter === 0) {
        sliderImage.forEach((item, i) => {
          item.classList.add("sliderRight");
          if (i === sliderImage.length - 1 || i === 0)
            item.classList.remove("sliderRight");
          if (i != sliderImage.length - 1) {
            item.classList.remove("sliderActive");
          }
        });
        sliderImage[sliderImage.length - 1].classList.add("sliderTransition");
        sliderImage[sliderImage.length - 1].classList.add("sliderLeft");
        sliderImage[sliderImage.length - 1].classList.add("sliderActive");

        sliderImage[
          sliderImage.length - 1
        ].style.transform = `translateX(800px)`;
        setTimeout(() => {
          sliderImage[sliderImage.length - 1].classList.remove(
            "sliderTransition"
          );
          sliderImage[sliderImage.length - 1].classList.remove("sliderLeft");
          sliderImage[sliderImage.length - 1].style.transform = ``;
          sliderFunc();
        }, 1000);
        slider.removeEventListener("click", handler);
        sliderCounter = sliderImage.length - 1;
      } else {
        sliderImage.forEach((item, i) => {
          item.classList.add("sliderRight");
          if (i != sliderCounter - 1) {
            item.classList.remove("sliderActive");
          }
          if (i === sliderCounter || i === sliderCounter - 1) {
            item.classList.remove("sliderRight");
          }
        });
        sliderImage[sliderCounter - 1].classList.add("sliderTransition");
        sliderImage[sliderCounter - 1].classList.add("sliderLeft");
        sliderImage[sliderCounter - 1].classList.remove("sliderRight");
        sliderImage[sliderCounter - 1].classList.add("sliderActive");

        sliderImage[sliderCounter - 1].style.transform = `translateX(800px)`;
        setTimeout(() => {
          sliderImage[sliderCounter - 1].classList.remove("sliderTransition");
          sliderImage[sliderCounter - 1].classList.remove("sliderLeft");
          sliderImage[sliderCounter - 1].style.transform = ``;
          sliderCounter--;
          sliderFunc();
        }, 1000);
        slider.removeEventListener("click", handler);
      }
    }
    if (event.target.closest(".slider_right")) {
      if (sliderCounter === sliderImage.length - 1) {
        sliderImage[0].classList.add("sliderTransition");
        sliderImage[0].classList.add("sliderRight");
        sliderImage[0].classList.add("sliderActive");
        sliderImage[0].style.transform = `translateX(-800px)`;
        sliderImage[0].style.zIndex = "4";
        setTimeout(() => {
          sliderImage[0].style.zIndex = "";
          sliderImage.forEach((item, i) => {
            if (i != 0) {
              item.classList.remove("sliderActive");
            }
          });
          sliderImage[0].classList.remove("sliderTransition");
          sliderImage[0].classList.remove("sliderRight");
          sliderImage[0].style.transform = ``;
          sliderFunc();
        }, 900);
        sliderCounter = 0;
        slider.removeEventListener("click", handler);
      } else {
        sliderImage.forEach((item, i) => {
          item.classList.add("sliderRight");
          if (i === sliderCounter + 1 || i === sliderCounter)
            item.classList.remove("sliderRight");
          if (i != sliderCounter + 1) {
            item.classList.remove("sliderActive");
          }
        });
        sliderImage[sliderCounter + 1].classList.add("sliderTransition");
        sliderImage[sliderCounter + 1].classList.remove("sliderLeft");
        sliderImage[sliderCounter + 1].classList.add("sliderRight");
        sliderImage[sliderCounter + 1].classList.add("sliderActive");

        sliderImage[sliderCounter + 1].style.transform = `translateX(-800px)`;

        setTimeout(() => {
          sliderImage[sliderCounter + 1].classList.remove("sliderTransition");
          sliderImage[sliderCounter + 1].classList.remove("sliderRight");
          sliderImage[sliderCounter + 1].style.transform = ``;
          sliderCounter++;
          sliderFunc();
        }, 900);
        slider.removeEventListener("click", handler);
      }
    }
  });
};
const navigationFunc = () => {
  navigation.addEventListener("click", function handler(event) {
    if (event.target.closest(".navigationLeft")) {
      mainpage.classList.remove("offvision");
      helppage.classList.remove("offvision");
      aboutpage.classList.remove("offvision");
      aboutskillpage.classList.remove("offvision");
      contactspage.classList.remove("offvision");
    }
    if (event.target.closest(".navigationRight_main")) {
      navigation.children[1].children[0].classList.add("active");
      navigation.children[1].children[1].classList.remove("active");
      navigation.children[1].children[2].classList.remove("active");
      navigation.children[1].children[3].classList.remove("active");
      navigationMobileContentfooter.children[0].style.color = "#2f1b41";
      navigationMobileContentfooter.children[1].style.color = "";
      navigationMobileContentfooter.children[2].style.color = "";
      navigationMobileContentfooter.children[3].style.color = "";
      mainpage.classList.remove("offvision");
      helppage.classList.remove("offvision");
      aboutpage.classList.remove("offvision");
      aboutskillpage.classList.remove("offvision");
      contactspage.classList.remove("offvision");
    }
    if (event.target.closest(".navigationRight_help")) {
      navigation.children[1].children[0].classList.remove("active");
      navigation.children[1].children[1].classList.add("active");
      navigation.children[1].children[2].classList.remove("active");
      navigation.children[1].children[3].classList.remove("active");
      navigationMobileContentfooter.children[0].style.color = "";
      navigationMobileContentfooter.children[1].style.color = "#2f1b41";
      navigationMobileContentfooter.children[2].style.color = "";
      navigationMobileContentfooter.children[3].style.color = "";
      mainpage.classList.add("offvision");
      helppage.classList.remove("offvision");
      aboutpage.classList.add("offvision");
      aboutskillpage.classList.add("offvision");
      contactspage.classList.add("offvision");
    }
    if (
      event.target.closest(".navigationRight_about") ||
      event.target.closest(".navigationRight_add_drop_about")
    ) {
      navigation.children[1].children[0].classList.remove("active");
      navigation.children[1].children[1].classList.remove("active");
      navigation.children[1].children[2].classList.add("active");
      navigation.children[1].children[3].classList.remove("active");
      navigationMobileContentfooter.children[0].style.color = "";
      navigationMobileContentfooter.children[1].style.color = "";
      navigationMobileContentfooter.children[2].style.color = "#2f1b41";
      navigationMobileContentfooter.children[3].style.color = "";
      mainpage.classList.add("offvision");
      helppage.classList.add("offvision");
      aboutpage.classList.remove("offvision");
      aboutskillpage.classList.add("offvision");
      contactspage.classList.add("offvision");
    }
    if (
      event.target.closest(".navigationRight_contacts") ||
      event.target.closest(".navigationRight_add_drop_contacs")
    ) {
      navigation.children[1].children[0].classList.remove("active");
      navigation.children[1].children[1].classList.remove("active");
      navigation.children[1].children[2].classList.remove("active");
      navigation.children[1].children[3].classList.add("active");
      navigationMobileContentfooter.children[0].style.color = "";
      navigationMobileContentfooter.children[1].style.color = "";
      navigationMobileContentfooter.children[2].style.color = "";
      navigationMobileContentfooter.children[3].style.color = "#2f1b41";
      mainpage.classList.add("offvision");
      helppage.classList.add("offvision");
      aboutpage.classList.add("offvision");
      aboutskillpage.classList.add("offvision");
      contactspage.classList.remove("offvision");
    }
    if (event.target.closest(".navigationRight_feedback")) {
      feedback.classList.add("_absolute");
      closeAbsoluteMail();
      navigation.removeEventListener("click", handler);
    }
    if (event.target.closest(".navigationRight_phones")) {
      phone.classList.add("_absolute");
      closeAbsolutePhone();
      navigation.removeEventListener("click", handler);
    }
    if (event.target.closest(".navigationRight_navigation")) {
      navi.classList.add("_absolute");
      closeAbsoluteNavigation();
      navigation.removeEventListener("click", handler);
    }
    if (event.target.closest(".navigationRight_add")) {
      navigationDrop.classList.toggle("navigationDrop");
    }
  });
};
const navigationMobileFunc = () => {
  navigationMobile.addEventListener("click", function handler(event) {
    if (event.target.closest(".navigationRight_feedback")) {
      feedback.classList.add("_absolute");
      closeAbsoluteMail();
      navigationMobile.removeEventListener("click", handler);
    }
    if (event.target.closest(".navigationRight_phones")) {
      phone.classList.add("_absolute");
      closeAbsolutePhone();
      navigationMobile.removeEventListener("click", handler);
    }
    if (event.target.closest(".navigationRight_navigation")) {
      navi.classList.add("_absolute");
      closeAbsoluteNavigation();
      navigationMobile.removeEventListener("click", handler);
    }
    if (event.target.closest(".navigation_mobile_center")) {
      mainpage.classList.remove("offvision");
      helppage.classList.remove("offvision");
      aboutpage.classList.remove("offvision");
      aboutskillpage.classList.remove("offvision");
      contactspage.classList.remove("offvision");
    }
    if (event.target.closest(".navigation_mobile_left")) {
      navigationMobileContent.classList.add("_absolute");
      closeAbsoluteMobileNavigation();
      navigationMobilefooter();
      navigationMobile.removeEventListener("click", handler);
    }
  });
};
const footerFunc = () => {
  footer.addEventListener("click", function handler(event) {
    if (event.target.closest(".footer_right_main")) {
      mainpage.classList.remove("offvision");
      helppage.classList.remove("offvision");
      aboutpage.classList.remove("offvision");
      aboutskillpage.classList.remove("offvision");
      contactspage.classList.remove("offvision");
    }
    if (
      event.target.closest(".footer_right_help") ||
      event.target.closest(".footer_right_add_drop_help")
    ) {
      mainpage.classList.add("offvision");
      helppage.classList.remove("offvision");
      aboutpage.classList.add("offvision");
      aboutskillpage.classList.add("offvision");
      contactspage.classList.add("offvision");
    }
    if (
      event.target.closest(".footer_right_about") ||
      event.target.closest(".footer_right_add_drop_about")
    ) {
      mainpage.classList.add("offvision");
      helppage.classList.add("offvision");
      aboutpage.classList.remove("offvision");
      aboutskillpage.classList.add("offvision");
      contactspage.classList.add("offvision");
    }
    if (
      event.target.closest(".footer_right_contacts") ||
      event.target.closest(".footer_right_add_drop_contacs")
    ) {
      mainpage.classList.add("offvision");
      helppage.classList.add("offvision");
      aboutpage.classList.add("offvision");
      aboutskillpage.classList.add("offvision");
      contactspage.classList.remove("offvision");
    }
    if (event.target.closest(".footer_right_add")) {
      footerDrop.classList.toggle("footerDrop");
    }
  });
};
const helpFunc = () => {
  help.addEventListener("click", function handler(event) {
    if (event.target.closest("._help_selector2")) {
      helpSelector1.classList.remove("active");
      helpSelector2.classList.add("active");
      cardHelp.classList.add("offvision");
      cardHelp2.classList.remove("offvision");
    }
    if (event.target.closest("._help_selector1")) {
      helpSelector1.classList.add("active");
      helpSelector2.classList.remove("active");
      cardHelp.classList.remove("offvision");
      cardHelp2.classList.add("offvision");
    }
  });
};
const closeAbsoluteMail = () => {
  closeMail.addEventListener("click", function handler(event) {
    if (event.target.closest("._closeMail")) {
      feedback.classList.remove("_absolute");
      navigationFunc();
      navigationMobileFunc();
      navigationMobilefooter();
      closeMail.removeEventListener("click", handler);
    }
  });
};
const closeAbsolutePhone = () => {
  closePhone.addEventListener("click", function handler(event) {
    if (event.target.closest("._closePhone")) {
      phone.classList.remove("_absolute");
      navigationFunc();
      navigationMobileFunc();
      navigationMobilefooter();
      closePhone.removeEventListener("click", handler);
    }
  });
};
const closeAbsoluteNavigation = () => {
  closeNavigation.addEventListener("click", function handler(event) {
    if (event.target.closest("._closeNavigation")) {
      navi.classList.remove("_absolute");
      navigationFunc();
      navigationMobileFunc();
      navigationMobilefooter();
      closeNavigation.removeEventListener("click", handler);
    }
  });
};
const closeAbsoluteMobileNavigation = () => {
  closeMobileNavigation.addEventListener("click", function handler(event) {
    if (event.target.closest("._closeMobileNavigation")) {
      navigationMobileContent.classList.remove("_absolute");
      navigationFunc();
      navigationMobileFunc();
      closeMobileNavigation.removeEventListener("click", handler);
    }
  });
};
const navigationMobilefooter = () => {
  navigationMobileContentfooter.addEventListener(
    "click",
    function handler(event) {
      if (
        event.target.closest(".display_mobile_navigation_content_navigation")
      ) {
        navi.classList.add("_absolute");
        closeAbsoluteNavigation();
        navigationMobileContentfooter.removeEventListener("click", handler);
      }
      if (event.target.closest(".display_mobile_navigation_content_mail")) {
        feedback.classList.add("_absolute");
        closeAbsoluteMail();
        navigationMobileContentfooter.removeEventListener("click", handler);
      }
      if (event.target.closest(".display_mobile_navigation_content_phone")) {
        phone.classList.add("_absolute");
        closeAbsolutePhone();
        navigationMobileContentfooter.removeEventListener("click", handler);
      }
      if (event.target.closest("._mainPage")) {
        navigationMobileContent.classList.remove("_absolute");
        navigationMobileFunc();
        navigationMobileContentfooter.removeEventListener("click", handler);
        navigation.children[1].children[0].classList.add("active");
        navigation.children[1].children[1].classList.remove("active");
        navigation.children[1].children[2].classList.remove("active");
        navigation.children[1].children[3].classList.remove("active");
        navigationMobileContentfooter.children[0].style.color = "#2f1b41";
        navigationMobileContentfooter.children[1].style.color = "";
        navigationMobileContentfooter.children[2].style.color = "";
        navigationMobileContentfooter.children[3].style.color = "";
        mainpage.classList.remove("offvision");
        helppage.classList.remove("offvision");
        aboutpage.classList.remove("offvision");
        aboutskillpage.classList.remove("offvision");
        contactspage.classList.remove("offvision");
      }
      if (event.target.closest("._helpPage")) {
        navigationMobileContent.classList.remove("_absolute");
        navigationMobileFunc();
        navigationMobileContentfooter.removeEventListener("click", handler);
        navigation.children[1].children[0].classList.remove("active");
        navigation.children[1].children[1].classList.add("active");
        navigation.children[1].children[2].classList.remove("active");
        navigation.children[1].children[3].classList.remove("active");
        navigationMobileContentfooter.children[0].style.color = "";
        navigationMobileContentfooter.children[1].style.color = "#2f1b41";
        navigationMobileContentfooter.children[2].style.color = "";
        navigationMobileContentfooter.children[3].style.color = "";
        mainpage.classList.add("offvision");
        helppage.classList.remove("offvision");
        aboutpage.classList.add("offvision");
        aboutskillpage.classList.add("offvision");
        contactspage.classList.add("offvision");
      }
      if (event.target.closest("._aboutPage")) {
        navigationMobileContent.classList.remove("_absolute");
        navigationMobileFunc();
        navigationMobileContentfooter.removeEventListener("click", handler);
        navigation.children[1].children[0].classList.remove("active");
        navigation.children[1].children[1].classList.remove("active");
        navigation.children[1].children[2].classList.add("active");
        navigation.children[1].children[3].classList.remove("active");
        navigationMobileContentfooter.children[0].style.color = "";
        navigationMobileContentfooter.children[1].style.color = "";
        navigationMobileContentfooter.children[2].style.color = "#2f1b41";
        navigationMobileContentfooter.children[3].style.color = "";
        mainpage.classList.add("offvision");
        helppage.classList.add("offvision");
        aboutpage.classList.remove("offvision");
        aboutskillpage.classList.add("offvision");
        contactspage.classList.add("offvision");
      }
      if (event.target.closest("._contactsPage")) {
        navigationMobileContent.classList.remove("_absolute");
        navigationMobileFunc();
        navigationMobileContentfooter.removeEventListener("click", handler);
        navigation.children[1].children[0].classList.remove("active");
        navigation.children[1].children[1].classList.remove("active");
        navigation.children[1].children[2].classList.remove("active");
        navigation.children[1].children[3].classList.add("active");
        navigationMobileContentfooter.children[0].style.color = "";
        navigationMobileContentfooter.children[1].style.color = "";
        navigationMobileContentfooter.children[2].style.color = "";
        navigationMobileContentfooter.children[3].style.color = "#2f1b41";
        mainpage.classList.add("offvision");
        helppage.classList.add("offvision");
        aboutpage.classList.add("offvision");
        aboutskillpage.classList.add("offvision");
        contactspage.classList.remove("offvision");
      }
    }
  );
};
navigationFunc();
footerFunc();
helpFunc();
sliderFunc();
navigationMobileFunc();
