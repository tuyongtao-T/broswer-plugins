document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs.length === 0) {
          console.error('No active tab found');
          return;
      }

      const url = tabs[0].url;
      const apiUrl = `https://api.cl2wm.cn/api/qrcode/code?text=${url}&mhid=4USWCQ/pmZ4hMHYpKtBSP6I`;

      const iframe = document.getElementById('qrFrame');
      iframe.src = apiUrl;
  });
});
