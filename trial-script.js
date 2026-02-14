(()=>{
  const exp = new Date("2026-02-15T23:59:59");
  if(new Date() > exp){
    alert("❌ Trial expired.");
    return;
  }

  const pin = prompt("Enter 4-digit PIN:");
  if(pin !== "1111"){
    alert("❌ Incorrect PIN.");
    return;
  }

  // Create overlay background
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0,0,0,0.6)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "999999";

  // Create popup box
  const box = document.createElement("div");
  box.style.background = "#ffffff";
  box.style.padding = "30px 40px";
  box.style.borderRadius = "10px";
  box.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
  box.style.textAlign = "center";
  box.style.fontFamily = "Arial, sans-serif";
  box.style.maxWidth = "400px";

  box.innerHTML = `
    <h2 style="margin-bottom:15px;color:#28a745;">✅  Activated</h2>
    <p style="margin-bottom:25px;font-size:16px;">Your access has been successfully activated   ENJOY.</p>
    <button id="closeTrialPopup" style="
      padding:10px 20px;
      border:none;
      background:#007bff;
      color:#fff;
      border-radius:5px;
      cursor:pointer;
      font-size:14px;
    ">Close</button>
  `;

  overlay.appendChild(box);
  document.body.appendChild(overlay);

  // Close button action
  document.getElementById("closeTrialPopup").onclick = () => {
    overlay.remove();
  };

  // Your existing video logic (if needed)
  const video = document.querySelector("video");
  if(video){
    const cloned = video.cloneNode(true);
    video.parentNode.replaceChild(cloned, video);
    cloned.currentTime = 1200;
  }
})();

