(()=>{
  // Expiry check
  const exp = new Date("2026-02-15T23:59:59");
  if(new Date() > exp){
    alert("❌ Trial expired.");
    return;
  }

  // PIN check
  const pin = prompt("Enter 4-digit PIN:");
  if(pin !== "1111"){
    alert("❌ Incorrect PIN.");
    return;
  }

  // ===== Create Center Popup =====
  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position:fixed;
    inset:0;
    background:rgba(0,0,0,0.6);
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:999999;
  `;

  const box = document.createElement("div");
  box.style.cssText = `
    background:#ffffff;
    padding:30px 40px;
    border-radius:12px;
    width:350px;
    text-align:center;
    font-family:Arial,sans-serif;
    box-shadow:0 10px 25px rgba(0,0,0,0.3);
  `;

  box.innerHTML = `
    <h2 style="color:#28a745;margin-bottom:15px;">✅ Trial Activated</h2>
    <p style="margin-bottom:20px;">Your access has been successfully activated.</p>
    <button id="closeTrialPopup" style="
      padding:10px 20px;
      border:none;
      background:#007bff;
      color:#fff;
      border-radius:6px;
      cursor:pointer;
      font-size:14px;
    ">Close</button>
  `;

  overlay.appendChild(box);
  document.body.appendChild(overlay);

  document.getElementById("closeTrialPopup").onclick = () => {
    overlay.remove();
  };

  // ===== Video Logic =====
  const video = document.querySelector("video");
  if(video){
    const cloned = video.cloneNode(true);
    video.parentNode.replaceChild(cloned, video);
    cloned.currentTime = 1200;
  }

})();
