const captureBtn = document.getElementById('capture');
const preview = document.getElementById('preview');
const closeBtn = document.getElementById('close-btn');
const downloadBtn = document.getElementById('download-btn');
const screenshotImg = document.getElementById('screenshot-img');
let screenshotDataUrl = '';

const captureScreen = async () => {
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
            preferCurrentTab: true,
            video: { displaySurface: 'monitor' }
        });

        const video = document.createElement('video');
        
        video.addEventListener('loadedmetadata', () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            video.play().then(() => {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                screenshotDataUrl = canvas.toDataURL('image/png');
                screenshotImg.src = screenshotDataUrl;
                preview.classList.add('show');
                screenshotBtn.classList.remove('hidden');
                stream.getVideoTracks()[0].stop();
                video.remove();
            });
        });
        video.srcObject = stream;

    } catch (err) {
        console.error('Error capturing screen:', err);
        screenshotBtn.classList.remove('hidden');
        alert('Failed to capture screenshot. Please try again.');
    }
};
captureBtn.addEventListener("click", () => {
    captureBtn.classList.add('hidden');
    againBtn.classList.add('hidden');
    captureScreen();
});

closeBtn.addEventListener('click', () => {
    preview.classList.remove('show');
    captureBtn.classList.remove('hidden');
    againBtn.classList.remove('hidden');
});

downloadBtn.addEventListener('click', () => {
    if (screenshotDataUrl) {
        const link = document.createElement('a');
        link.download = `screenshot_${new Date().toISOString().replace(/:/g, '-')}.png`;
        link.href = screenshotDataUrl;
        link.click();
    }
});

