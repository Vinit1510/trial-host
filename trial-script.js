(()=>{
  // Expiry Date
  const exp = new Date("2026-02-15T23:59:59");
  const now = new Date();

  if(now > exp){
    alert("❌ Trial expired.");
    return;
  }

  // Password Prompt
  const pin = prompt("Enter 4-digit PIN");

  if(pin !== "1111"){
    alert("❌ Incorrect password.");
    return;
  }

  // Success Notification (Floating Message)
  const msg = document.createElement("div");
  msg.innerText = "✅ Trial Activated Successfully";
  msg.style.position = "fixed";
  msg.style.top = "20px";
  msg.style.right = "20px";
  msg.style.padding = "12px 20px";
  msg.style.background = "#28a745";
  msg.style.color = "#fff";
  msg.style.fontWeight = "bold";
  msg.style.borderRadius = "6px";
  msg.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  msg.style.zIndex = "999999";
  msg.style.fontFamily = "Arial, sans-serif";
  document.body.appendChild(msg);

  setTimeout(()=>msg.remove(), 3000);

  // Video Logic
  const video = document.querySelector("video");
  if(!video){
    console.warn("Video element not found.");
    return;
  }

  const cloned = video.cloneNode(true);
  video.parentNode.replaceChild(cloned, video);

  cloned.currentTime = 1200; // Jump to 20 minutes
})();
