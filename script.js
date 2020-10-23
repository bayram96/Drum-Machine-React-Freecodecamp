function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const bankOne = [
{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

{
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

{
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

{
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

{
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];



const bankTwo = [
{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Chord-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' },

{
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Chord-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' },

{
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Chord-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' },

{
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Shaker',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' },

{
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' },

{
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' },

{
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'Punchy-Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },

{
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Side-Stick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },

{
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' }];



class DrumMachine extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "playSound",



































    drum => {
      if (this.state.powerToggle) {
        this.handleDisplay(drum);
        let audio = document.getElementById(drum.keyTrigger);
        audio.volume = this.state.volume;
        audio.play();
      }
    });_defineProperty(this, "switchBank",

    () => {
      if (this.state.powerToggle) {
        this.setState({
          activeBank: !this.state.activeBank,
          display: !this.state.activeBank ? "Heater Kit" : "Smooth Piano Kit" });
      }
    });_defineProperty(this, "toggleBank",
    toggleType => {
      if (toggleType === 'p') {
        this.powerControl();
      } else {
        this.setState({ bankToggle: !this.state.bankToggle });
        this.switchBank();
      }
    });_defineProperty(this, "handleDisplay",

    drum => {
      this.setState({ display: drum.id });
    });_defineProperty(this, "powerControl",

    () => {
      this.setState({
        powerToggle: !this.state.powerToggle,
        display: '' });


    });_defineProperty(this, "handleVolume",
    e => {
      // console.log(e.currentTarget.value);
      this.setState({ volume: e.currentTarget.value });
    });this.state = { activeBank: true, power: true, bankToggle: true, powerToggle: true, display: '', volume: 0.3 };this.playSound = this.playSound.bind(this);this.handleKeyPress = this.handleKeyPress.bind(this);this.switchBank = this.switchBank.bind(this);this.toggleBank = this.toggleBank.bind(this);this.powerControl = this.powerControl.bind(this);}componentDidMount() {document.addEventListener('keydown', this.handleKeyPress);}componentWillUnmount() {document.removeEventListener('keydown', this.handleKeyPress);}handleKeyPress(e) {const banks = this.state.activeBank ? bankOne : bankTwo;const bank = banks.find(bank => bank.keyCode === e.keyCode);if (this.state.powerToggle) {if (bank) {document.getElementById(bank.id).classList.add("button-hover");setTimeout(function () {document.getElementById(bank.id).classList.remove("button-hover");}, 100);this.playSound(bank);}} else {console.log('asdad');document.getElementById(bank.id).classList.add("disabled-btn-click");setTimeout(function () {document.getElementById(bank.id).classList.remove("disabled-btn-click");}, 100);}}
  render() {
    return (
      React.createElement("div", { id: "drum-machine" },
      React.createElement(PadBank, { drums: this.state.activeBank ? bankOne : bankTwo, playSound: this.playSound, powerOn: this.state.powerToggle }),
      React.createElement(Settings, { switchBank: this.switchBank, toggleBank: this.toggleBank, bankToggle: this.state.bankToggle, powerToggle: this.state.powerToggle, display: this.state.display, volume: this.state.volume, handleVolume: this.handleVolume })));



  }}


const PadBank = props => {
  const classes = props.powerOn ? "drum-pad" : "drum-pad disabled";
  return (
    React.createElement("div", { className: "col-drums" },
    props.drums.map((drum, index) =>
    React.createElement("button", { id: drum.id, className: classes, onClick: () => props.playSound(drum), key: index }, drum.keyTrigger,
    React.createElement("audio", {
      className: "clip",
      id: drum.keyTrigger,
      src: drum.url })))));






};

const Settings = props => {
  return (
    React.createElement("div", { className: "col-settings" },
    React.createElement(ToggleBtn, { onToggle: () => props.toggleBank('p'), label: "Power", toggle: props.powerToggle }),
    React.createElement("div", { id: "display" }, props.display),
    React.createElement("div", { className: "volume-slider" },
    React.createElement("input", {
      max: "1",
      min: "0",
      onChange: props.handleVolume,
      step: "0.01",
      type: "range",
      value: props.volume })),


    React.createElement(ToggleBtn, { onToggle: () => props.toggleBank('b'), label: "Bank", toggle: props.bankToggle })));


};

const ToggleBtn = props => {
  const classes = props.toggle ? ['left', 'right hide'] : ['left hide', 'right'];
  return (
    React.createElement("div", null,
    React.createElement("p", { className: "toggle-lbl" }, props.label),
    React.createElement("div", { className: "toggle-btn" },
    React.createElement("div", { className: classes[0], onClick: props.onToggle }),

    React.createElement("div", { className: classes[1], onClick: props.onToggle }))));




};

ReactDOM.render(React.createElement(DrumMachine, null), document.getElementById('app'));