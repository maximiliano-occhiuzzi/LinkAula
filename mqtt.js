const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", () => {

    console.log("Conectado a MQTT 🚀");

    client.subscribe("lab/acceso");

});

client.on("message", (topic, message) => {

    console.log("TOPIC:", topic);

    const texto = message.toString();

    console.log("MENSAJE:", texto);

    try {

        const datos = JSON.parse(texto);

        console.log("UID:", datos.uid);

        console.log("DISPOSITIVO:", datos.dispositivo);

    } catch(error) {

        console.log("❌ JSON inválido");

    }

});