const engraverParams = {
  add_classes: false,
  editable: false,
  listener: null,
  paddingbottom: 30,
  paddingleft: 15,
  paddingright: 50,
  paddingtop: 15,
  responsive: undefined,
  scale: 1,
  staffwidth: 740,
};

const parserParams = {
  header_only: false,
  hint_measures: false,
  print: false,
  stop_on_warning: false,
};

const renderParams = {
  oneSvgPerLine: false,
  scrollHorizontal: false,
  startingTune: 0,
  viewportHorizontal: false,
};

const midiParams = {
  animate: null,
  context: null,
  drum: '',
  drumBars: 1,
  drumIntro: 0,
  downloadLabel: 'download midi',
  generateDownload: false,
  generateInline: true,
  inlineControls: {
    hide: false,
    loopToggle: false,
    selectionToggle: false,
    standard: true,
    startPlaying: false,
    tempo: false,
    tooltipLoop: 'Click to toggle play once/repeat.',
    tooltipPlay: 'Click to play/pause.',
    tooltipProgress: 'Click to change the playback position.',
    tooltipReset: 'Click to go to beginning.',
    tooltipTempo: 'Change the playback speed.,',
  },
  listener: null,
  postTextDownload: '',
  postTextInline: '',
  preTextDownload: '',
  preTextInline: '',
  program: 0,
  qpm: 180,
  transpose: 0,
};

const soundfontUrl = 'https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/';

// All props
const notationProps = {
  el: null,
  engraverParams,
  parserParams,
  renderParams,
};

const midiProps = Object.assign({
  midiParams,
  soundfontUrl,
}, notationProps);

const editorProps = {
  editorParams: {
    canvas_id: null,
    generate_midi: null,
    generate_warnings: null,
    gui: null,
    indicate_changed: null,
    midi_download_id: null,
    midi_id: null,
    midi_options: midiParams,
    onchange: null,
    paper_id: null,
    parser_options: parserParams,
    render_options: renderParams,
    warnings_id: null,
  },
  soundfontUrl,
};

export {
  editorProps,
  midiProps,
  notationProps,
};
