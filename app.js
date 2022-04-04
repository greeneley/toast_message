function toast({ title = "", message = "", type = "infor", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    const timeRemove = duration + 1300;
    const autoRemoveID = setTimeout(function () {
      main.removeChild(toast);
    }, timeRemove);

    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveID);
      }
    };

    const icons = {
      success: "fas fa-check-circle",
      infor: "fas fa-info-circle",
      warning: "fa-solid fa-triangle-exclamation",
      error: "fa-solid fa-triangle-exclamation",
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);
    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `scrollInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>`;
    main.appendChild(toast);
  }
}

function showSuccessToast() {
  toast({
    title: "Thành công",
    message: "Bạn đã thực hiện event thành công",
    type: "success",
    duration: 1000,
  });
}

function showInforToast() {
  toast({
    title: "Thông tin",
    message: "Hiển thị thông tin",
    type: "infor",
    duration: 1500,
  });
}

function showWarningToast() {
  toast({
    title: "Cảnh báo",
    message: "Cảnh báo có sự cố xảy ra",
    type: "warning",
    duration: 2000,
  });
}

function showErrorToast() {
  toast({
    title: "Error",
    message: "Hiển thị error thông báo",
    type: "error",
    duration: 3000,
  });
}
