const net = require('net');
const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const path = require('path');

// Konfigurasi server AIS
const AIS_PORT = process.env.AIS_PORT || 80;
const AIS_HOST = process.env.AIS_HOST || '0.0.0.0';
const DESTINATION_URL = process.env.DESTINATION_URL || '5.9.207.224';
const DESTINATION_PORT = process.env.DESTINATION_PORT || 12930;

// Buat aplikasi Express
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Set folder public untuk menyajikan file HTML dan statis
app.use(express.static(path.join(__dirname, 'public')));

// Fungsi untuk menangani data AIS dan mengirimkannya ke alamat tujuan
function sendDataToDestination(data) {
    const options = {
        hostname: DESTINATION_URL,
        port: DESTINATION_PORT,
        path: '/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const req = http.request(options, (res) => {
        let response = '';
        res.on('data', (chunk) => {
            response += chunk;
        });
        res.on('end', () => {
            console.log('Data AIS berhasil dikirim ke tujuan:', response);
        });
    });

    req.on('error', (error) => {
        console.error(`Error mengirim data AIS: ${error.message}`);
    });

    req.write(JSON.stringify({ aisData: data.toString() }));
    req.end();
}

// Buat server TCP untuk menerima data AIS
const tcpServer = net.createServer((socket) => {
    console.log('Koneksi baru diterima.');

    socket.on('data', (data) => {
        const aisData = data.toString();
        console.log('Data AIS diterima:', aisData);

        // Kirim data ke halaman monitoring melalui Socket.IO
        io.emit('aisData', aisData);

        // Kirim data ke tujuan
        sendDataToDestination(data);
    });

    socket.on('end', () => {
        console.log('Koneksi terputus.');
    });

    socket.on('error', (error) => {
        console.error('Error pada socket:', error.message);
    });
});

tcpServer.listen(AIS_PORT, AIS_HOST, () => {
    console.log(`Server AIS berjalan di ${AIS_HOST}:${AIS_PORT}`);
});

// Halaman monitoring
app.get('/monitor', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'monitor.html'));
});

// Jalankan server Express di port 3001 (atau port lain yang diinginkan)
const HTTP_PORT = process.env.HTTP_PORT || 3001;
server.listen(HTTP_PORT, () => {
    console.log(`Server monitoring berjalan di port ${HTTP_PORT}`);
});
