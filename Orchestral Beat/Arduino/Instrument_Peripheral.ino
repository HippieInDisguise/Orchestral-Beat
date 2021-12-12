#include <ArduinoBLE.h>

BLEService InstrumentService("2ea20e27-d06d-4039-a242-d28685015a7f"); 
BLEByteCharacteristic InstrumentRSSI("2ea20e27-d06d-4039-a242-d28685015a7f", BLERead | BLEWrite);

void setup() { 
  if (!BLE.begin()) {
    Serial.println("starting BLE failed!");
    while (1);
  }
  Serial.begin(9600);
  BLE.setLocalName("Instrument");
  BLE.setAdvertisedService(InstrumentService);
  InstrumentService.addCharacteristic(InstrumentRSSI);
  BLE.addService(InstrumentService);
  InstrumentRSSI.writeValue(BLE.rssi());
//  BLE.setAdvertisingInterval(3200);
  BLE.advertise();
}

void loop() {
  BLEDevice central = BLE.central();   
  
  if (central) {
    InstrumentRSSI.writeValue(BLE.rssi());
    Serial.println(BLE.rssi());    
  }
}
