let button = document.querySelector("#noti");
button.addEventListener("click", async () => {
  let permission = await Notification.requestPermission();
  if (permission === "granted") {
    let notification = new Notification("Payment Received", {
      body: "You just received a payment from John Doe",
      icon: "../images/Artboard.png",
    });
  }
});
