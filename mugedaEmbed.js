document.addEventListener('mugedaReady', function(){
    const iframe = document.createElement('iframe');
    iframe.src = "https://lyc4219.github.io/AI/";
    Object.assign(iframe.style, {
        width: "100%",
        height: "100%",
        border: "none",
        position: "absolute",
        top: "0",
        left: "0",
        margin: "0",
        padding: "0",
        overflow: "auto"
    });
    mugeda.scene.getSceneRoot().appendChild(iframe);
});