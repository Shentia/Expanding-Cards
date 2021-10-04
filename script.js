/**
 * @author Ahmadreza Shamimi
 * @email shentiaspirit@hotmail.com
 * @create date 2021-10-03 18:38:31
 * @modify date 2021-10-03 19:47:45
 * @desc [description]
 */

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActivepanel();
    panel.classList.add("active");
  });
});

const removeActivepanel = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
