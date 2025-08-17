// သင့် video file ကို assets/ folder ထဲထည့်ပြီး
// ဒီနေရာမှာ file name ကို update လုပ်ပါ
const videoPath = "assets/Fun.mp4";  
const videoUrl = new URL(videoPath, window.location.href).href;

// QR code generate
const qrEl = document.getElementById("qrcode");
new QRCode(qrEl, {
  text: videoUrl,
  width: 250,
  height: 250,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});

// Download QR button
document.getElementById("downloadQR").addEventListener("click", () => {
  const canvas = qrEl.querySelector("canvas");
  const url = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = url;
  a.download = "video_qr.png";
  a.click();
});
