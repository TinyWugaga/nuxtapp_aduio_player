interface AudioPlayerProps {
  url: string;
  dom: HTMLElement;
  preload?: "none" | "metadata" | "auto";
}

class AudioPlayer {
  _dom: HTMLElement | null;
  _audio: HTMLAudioElement | null;

  _hasAudio: boolean = false;

  _handleAudioLoadedBind: (e: Event) => void;

  constructor(props: AudioPlayerProps) {
    const { url, dom, preload = "auto" } = props;

    const audio = new Audio(url);

    this._audio = audio;
    this._dom = dom;

    this._handleAudioLoadedBind = (e) => this._handleAudioLoaded();

    this._audio.preload = preload;

    this._initAudio(audio);
  }

  _initAudio(audio: HTMLAudioElement) {
    if (audio) {
      audio.addEventListener("loadeddata", this._handleAudioLoadedBind);
    }
  }

  _handleAudioLoaded() {
    this._hasAudio = true;
    this._insertDom();
  }

  _insertDom() {
    if (this._dom && this._audio) {
      this._dom.appendChild(this._audio);
    }
  }

  _removeDom() {
    console.log({ _dom: this._dom, _audio: this._audio });
    if (this._dom && this._audio) {
      this._dom.removeChild(this._audio);
    }
  }

  play() {
    if (!this.isPlaying) {
      this._audio?.play();
    }
  }

  pause() {
    if (this.isPlaying) {
      this._audio?.pause();
    }
  }

  setCurrentTime(time: number) {
    this._audio && (this._audio.currentTime = time);
  }

  setLoop(loop: boolean) {
    this._audio && (this._audio.loop = loop);
  }

  get element() {
    return this._audio;
  }

  get canPlay() {
    return this._audio?.readyState === 4;
  }

  get isPlaying() {
    return !this._audio?.paused;
  }

  get currentTime() {
    return this._audio?.currentTime || 0;
  }

  get duration() {
    return this._audio?.duration || 0;
  }

  get hadPlayed() {
    return Math.floor((this.currentTime / this.duration) * 1000) / 1000;
  }

  destroy() {
    this._audio?.removeEventListener("loadeddata", this._handleAudioLoadedBind);
    this._removeDom();

    this._audio = null;
    this._dom = null;

    this._hasAudio = false;
  }
}

export default AudioPlayer;
