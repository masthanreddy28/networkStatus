function updateNetwork() {
    var div = document.querySelector(".internet_status_check"); // Changed to querySelector
   
    var head = document.getElementById("popup_heading");
    var para = document.getElementById("popup_paragraph");

    if (navigator.onLine) {
        var icon = document.querySelector(".material-symbols-outlined");
        head.innerText = "Back to Online";
        para.innerText = "You are Online";
        div.classList.remove("offline"); // Ensure to remove any previous offline class
        div.classList.add("online");
       icon.innerText="wifi"
    } else {
        var icon = document.querySelector(".material-symbols-outlined");
        head.innerText = "You are Offline";
        para.innerText = "Check the Connection";
        div.classList.remove("online"); // Ensure to remove any previous online class
        div.classList.add("offline");
       icon.innerText="wifi_off"
    }
}

// Initial status update
updateNetwork();

// Add event listeners
window.addEventListener('online', updateNetwork);
window.addEventListener('offline', updateNetwork);
