#include "led-controller.h"
#include <ESP8266WiFi.h>
#include <Firebase_ESP_Client.h>

#include <addons/RTDBHelper.h>

#define WIFI_SSID "fenix"
#define WIFI_PASSWORD "fenix1234"

#define DATABASE_URL "https://chocadeira-68d24-default-rtdb.firebaseio.com"
#define DATABASE_SECRET "AIzaSyABPnnpNd4gAogs_YeCbsZAGD1qaozj2Uk"

FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;

// LEDS IO

const int LED_RED_1 = 4;
const int LED_RED_2 = 14;
const int LED_YELLOW_1 = 5;
const int LED_YELLOW_2 = 2;
const int LED_GREEN_1 = 16;
const int LED_GREEN_2 = 0;
 
int LEDS[] = {LED_GREEN_1, LED_YELLOW_1, LED_RED_1, LED_GREEN_2, LED_YELLOW_2, LED_RED_2,};

void setup() {
  setupWiFi();
  setupFirebase();
  setupPins();
}

void loop() {
  if (Firebase.ready() && (millis() - sendDataPrevMillis > 500 || sendDataPrevMillis == 0)) {
    sendDataPrevMillis = millis();

    Firebase.RTDB.getBool(&fbdo, F("/mode"));
    String mode = fbdo.to<String>();

    if (mode == "snake") {
      modeSnake();
      return;
    }

    Firebase.RTDB.getBool(&fbdo, F("/led-red"));
    bool ledRed = fbdo.to<bool>();
    toggleLEDRed(ledRed);

    Firebase.RTDB.getBool(&fbdo, F("/led-yellow"));
    bool ledYellow = fbdo.to<bool>();
    toggleLEDYellow(ledYellow);

    Firebase.RTDB.getBool(&fbdo, F("/led-green"));
    bool ledGreen = fbdo.to<bool>();
    toggleLEDGreen(ledGreen);
  }
}

void setupWiFi() {
  Serial.begin(115200);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();
}

void setupFirebase() {
  config.database_url = DATABASE_URL;
  config.signer.tokens.legacy_token = DATABASE_SECRET;

  Firebase.begin(&config, &auth);
}

void setupPins() {
  for (int i = 0; i < 6; i++) {
    pinMode(LEDS[i], OUTPUT);
  }
}

void modeSnake() {
  digitalWrite(LEDS[0], HIGH);
  delay(50);
  digitalWrite(LEDS[1], HIGH);
  delay(100);
  digitalWrite(LEDS[0], LOW);
  delay(100);
  digitalWrite(LEDS[2], HIGH);
  delay(100);
  digitalWrite(LEDS[1], LOW);
  delay(100);
  digitalWrite(LEDS[3], HIGH);
  delay(100);
  digitalWrite(LEDS[2], LOW);
  delay(100);
  digitalWrite(LEDS[4], HIGH);
  delay(100);
  digitalWrite(LEDS[3], LOW);
  delay(100);
  digitalWrite(LEDS[5], HIGH);
  delay(100);
  digitalWrite(LEDS[4], LOW);
  delay(50);
  digitalWrite(LEDS[4], HIGH);
  delay(50);
  digitalWrite(LEDS[5], LOW);
  delay(100);
  digitalWrite(LEDS[3], HIGH);
  delay(100);
  digitalWrite(LEDS[4], LOW);
  delay(100);
  digitalWrite(LEDS[2], HIGH);
  delay(100);
  digitalWrite(LEDS[3], LOW);
  delay(100);
  digitalWrite(LEDS[1], HIGH);
  delay(100);
  digitalWrite(LEDS[2], LOW);
  delay(100);
  digitalWrite(LEDS[0], HIGH);
  delay(50);
  digitalWrite(LEDS[1], LOW);
}

void toggleLEDRed(bool isOn) {
  if(isOn) {
    digitalWrite(LED_RED_1, HIGH);
    digitalWrite(LED_RED_2, HIGH);
  } else {
    digitalWrite(LED_RED_1, LOW);
    digitalWrite(LED_RED_2, LOW);
  }
}

void toggleLEDGreen(bool isOn) {
  if(isOn) {
    digitalWrite(LED_GREEN_1, HIGH);
    digitalWrite(LED_GREEN_2, HIGH);
  } else {
    digitalWrite(LED_GREEN_1, LOW);
    digitalWrite(LED_GREEN_2, LOW);
  }
}

void toggleLEDYellow(bool isOn) {
  if(isOn) {
    digitalWrite(LED_YELLOW_1, HIGH);
    digitalWrite(LED_YELLOW_2, HIGH);
  } else {
    digitalWrite(LED_YELLOW_1, LOW);
    digitalWrite(LED_YELLOW_2, LOW);
  }
}