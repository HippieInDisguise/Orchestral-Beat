let OneisConnected = false;
let TwoisConnected = false;
let ThreeisConnected = false;

//first Instrument
function InstrumentOneConnect() {
  InstrumentOne.connect(InstrumentOneServiceUUID, InstOneCharacteristics);
}

function InstOneCharacteristics(error, characteristics) {
  if (error) console.log('error: ', error);
  console.log('characteristics: ', characteristics);
  InstrumentOneCharecteristic = characteristics[0];
  InstrumentOne.read(InstrumentOneCharecteristic, InstOneValue);
  OneisConnected = true;
  instonevalue();
}

function InstOneValue(error, value) {
  if (error) {
    console.log('Device Disconnected :( ', error);
    InstrumentOne.disconnect()
    OneisConnected = false;
    instonevalue();
    return;
  }
  if(OneisConnected){
    InstrumentOneRssi = value;
    InstrumentOne.read(InstrumentOneCharecteristic, InstOneValue);
  }
}

//Second Instrument
function InstrumentTwoConnect() {
  InstrumentTwo.connect(InstrumentTwoServiceUUID, InstTwoCharacteristics);
}

function InstTwoCharacteristics(error, characteristics) {
  if (error) console.log('error: ', error);
  console.log('characteristics: ', characteristics);
  InstrumentTwoCharecteristic = characteristics[0];
  InstrumentTwo.read(InstrumentTwoCharecteristic, InstTwoValue);
  TwoisConnected = true;
  insttwovalue();
}

function InstTwoValue(error, value) {
  if (error) {
    console.log('Device Disconnected :( ', error);
    InstrumentTwo.disconnect()
    TwoisConnected = false;
    insttwovalue();
    return;
  }
  if(TwoisConnected){
    console.log('value: ', value);
    InstrumentTwoRssi = value;
    InstrumentTwo.read(InstrumentTwoCharecteristic, InstTwoValue);
  }
}

//Third Instrument
function InstrumentThreeConnect() {
  InstrumentThree.connect(InstrumentThreeServiceUUID, InstThreeCharacteristics);
}

function InstThreeCharacteristics(error, characteristics) {
  if (error) console.log('error: ', error);
  console.log('characteristics: ', characteristics);
  InstrumentThreeCharecteristic = characteristics[0];
  InstrumentThree.read(InstrumentThreeCharecteristic, InstThreeValue);
  ThreeisConnected = true;
  instthreevalue();
}

function InstThreeValue(error, value) {
  if (error) {
    console.log('Device Disconnected :( ', error);
    InstrumentThree.disconnect()
    ThreeisConnected = false;
    instthreevalue();
    return;
  }
  if(ThreeisConnected){
    console.log('value: ', value);
    InstrumentThreeRssi = value;
    InstrumentThree.read(InstrumentThreeCharecteristic, InstThreeValue);
  }
}