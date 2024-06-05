document.addEventListener('DOMContentLoaded', function () {
const checkbox = document.getElementById("menu_btn-checkbox"); // 菜單按鈕
const menuList = document.querySelector(".menu_burger"); // 漢堡選單

    function updateMenuDisplay() {
      if (checkbox.checked) {
        menuList.style.display = "flex"; // 按下按鈕就顯示選單
      } else {
        menuList.style.display = "none";
      }
    }
    checkbox.addEventListener("change", updateMenuDisplay);  // 監聽 checkbox 狀態
    updateMenuDisplay();
    
    function listenWindowWidth() {
      if (window.innerWidth > 540) {
        checkbox.checked = false; // 重置 checkbox 狀態
        updateMenuDisplay();
      }
    }
    window.addEventListener("resize", listenWindowWidth);  // 監聽窗口大小改變事件
    listenWindowWidth();
})