var THREEx = THREEx || {}

THREEx.VideoTexture = function(url) {
    // create the video element
    var video = document.createElement('video');
    video.controls = true
    video.width = 320;
    video.height = 240;
    video.autoplay = false;
    video.loop = true;
    video.src = url;
    video.playsinline = true;
    video.webkitPlaysinline = true;
    video.muted = true
        // expose video as this.video
    this.video = video

    // create the texture
    var texture = new THREE.Texture(video);
    // expose texture as this.texture
    this.texture = texture

    /**
     * update the object
     */
    this.update = function() {
        if (video.readyState !== video.HAVE_ENOUGH_DATA) return;
        texture.needsUpdate = true;
    }

    /**
     * destroy the object
     */
    this.destroy = function() {
        video.pause()
    }
}