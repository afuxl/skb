const express = require('express');
const { WebSocketServer } = require('ws');
const path = require('path');

// Konfigurasi WebSocket
const WEBSOCKET_PORT = process.env.PORT || 3000;
const DESTINATION_URL = process.env.DESTINATION_URL || '5.9.207.224';
const DESTINATION_PORT = process.env.DESTINATION_PORT || 12930;

const app = express();

// Menyajikan file statis dari folder "public"
app.use(express.static(path.join(__dirname, 'public')));

// Buat server WebSocket
const server = app.listen(WEBSOCKET_PORT, () => {
    console.log(`Server WebSocket berjalan di port ${WEBSOCKET_PORT}`);
});

const wss = new WebSocketServer({ server });

// Ketika klien tersambung
wss.on('connection', (ws) => {
    console.log('Klien WebSocket tersambung.');

    // Tangani data yang diterima dari klien
    ws.on('message', (data) => {
        const aisData = data.toString();
        console.log('Data AIS diterima:', aisData);

        // Kirim data AIS ke halaman monitoring
        broadcastToClients(aisData);

        // Kirim data AIS ke destinasi yang diinginkan
        sendDataToDestination(aisData);
    });

    ws.on('close', () => {
        console.log('Koneksi WebSocket terputus.');
    });

    ws.on('error', (error) => {
        console.error('Error pada WebSocket:', error.message);
    });
});

// Fungsi untuk menyiarkan data AIS ke semua klien WebSocket
function broadcastToClients(data) {
    wss.clients.forEach((client) => {
        if (client.readyState === client.OPEN) {
            client.send(data);
        }
    });
}

// Fungsi untuk mengirim data ke destinasi (misalnya server lain)
function sendDataToDestination(data) {
    console.log(`Mengirim data AIS ke ${DESTINATION_URL}:${DESTINATION_PORT}`);
    // Logika untuk mengirim data ke server lain bisa ditambahkan di sini
}

// Halaman monitoring diakses dari "/monitor"
app.get('/monitor', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'monitor.html'));
});
