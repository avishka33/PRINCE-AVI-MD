const express = require('express');
const { createServer } = require('http');

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000;
const packageInfo = require('../package.json');

app.all('/', (req, res) => {
    // Uptime ගණනය කිරීම
    const uptimeSeconds = process.uptime();
    const hours = Math.floor(uptimeSeconds / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const uptimeString = `${hours}h ${minutes}m ${Math.floor(uptimeSeconds % 60)}s`;

    res.send(`
<!DOCTYPE html>
<html lang="si">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${packageInfo.name} | Dashboard</title>
    <style>
        :root {
            --bg-color: #000000;
            --card-bg: #0a0a0a;
            --neon-red: #ff1a40;
            --neon-green: #00ff88;
            --text-gray: #888;
            --border-glow: 0 0 10px rgba(255, 26, 64, 0.4);
        }

        body {
            background-color: var(--bg-color);
            color: white;
            font-family: 'Segoe UI', sans-serif;
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            letter-spacing: 0.5px;
        }

        .container {
            width: 100%;
            max-width: 400px;
        }

        /* Header */
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            font-weight: bold;
            font-size: 18px;
        }

        /* Profile Card */
        .card-red {
            background: var(--card-bg);
            border: 1.5px solid var(--neon-red);
            border-radius: 15px;
            padding: 15px;
            box-shadow: var(--border-glow);
            margin-bottom: 20px;
        }

        .profile-info {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .avatar {
            width: 65px;
            height: 65px;
            border-radius: 50%;
            background: url('https://files.catbox.moe/mjem6q.jpg') center/cover;
            border: 2px solid var(--neon-red);
            box-shadow: 0 0 15px var(--neon-red);
        }

        .role-badge {
            font-size: 11px;
            color: var(--neon-red);
            font-weight: bold;
            margin-top: 5px;
            text-transform: uppercase;
        }

        /* Main Image */
        .main-img {
            width: 100%;
            height: 180px;
            border-radius: 15px;
            border: 1px solid var(--neon-red);
            margin-bottom: 20px;
            background: url('https://files.catbox.moe/jggkxf.jpg') center/cover;
        }

        /* Tabs */
        .tab-group {
            display: flex;
            gap: 10px;
            margin-bottom: 15px;
        }

        .tab-btn {
            flex: 1;
            background: none;
            border: 1px solid var(--neon-red);
            color: white;
            padding: 12px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
            font-size: 12px;
        }

        .tab-btn.active {
            background: rgba(255, 26, 64, 0.1);
            box-shadow: inset 0 0 8px var(--neon-red);
        }

        /* Inputs */
        .input-group {
            margin-bottom: 15px;
        }

        label {
            display: block;
            font-size: 12px;
            margin-bottom: 8px;
            color: #bbb;
            font-weight: bold;
        }

        input, select {
            width: 100%;
            background: #0f0f0f;
            border: 1px solid #333;
            color: white;
            padding: 14px;
            border-radius: 10px;
            box-sizing: border-box;
            outline: none;
        }

        /* Green Section (Status) */
        .card-green {
            background: linear-gradient(135deg, rgba(0, 255, 136, 0.15), rgba(0, 0, 0, 1));
            border: 1.5px solid var(--neon-green);
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 0 12px rgba(0, 255, 136, 0.2);
            margin-top: 10px;
        }

        .card-green h3 {
            margin: 0;
            color: #fff;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
        }

        .card-green p {
            font-size: 12px;
            color: var(--text-gray);
            margin-top: 8px;
        }

        /* Activity Section */
        .recent-activity {
            margin-top: 25px;
        }

        .activity-item {
            display: flex;
            justify-content: space-between;
            background: #0a0a0a;
            padding: 15px;
            border-radius: 10px;
            border: 1px solid #1a1a1a;
            font-size: 12px;
            color: #888;
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="header">
            <span>≡ Hai, Avi</span>
            <span>🎧 👤</span>
        </div>

        <div class="card-red">
            <div class="profile-info">
                <div class="avatar"></div>
                <div>
                    <div style="font-size: 18px; font-weight: bold; text-transform: uppercase;">${packageInfo.name} 👻</div>
                    <div class="role-badge">Admin: ${packageInfo.author} • Ver: ${packageInfo.version}</div>
                </div>
            </div>
        </div>

        <div class="main-img"></div>

        <div class="tab-group">
            <button class="tab-btn active">📱 SYSTEM STATUS</button>
            <button class="tab-btn" onclick="location.reload()">🔄 REFRESH</button>
        </div>

        <div class="input-group">
            <label>BOT UPTIME</label>
            <input type="text" value="${uptimeString}" readonly>
        </div>

        <div class="input-group">
            <label>SERVER PORT</label>
            <input type="text" value="Running on Port: ${PORT}" readonly>
        </div>

        <div class="card-green">
            <h3>🟢 SYSTEM ONLINE</h3>
            <p>${packageInfo.description || 'AVI H4CK3R WhatsApp Bot is running successfully.'}</p>
        </div>

        <div class="recent-activity">
            <label>RECENT ACTIVITY</label>
            <div class="activity-item">
                <span>🔄 Server Status</span>
                <span>Active Now</span>
            </div>
        </div>
    </div>

</body>
</html>
    `);
});

// අනෙකුත් routes (process, chat) එලෙසම පවතී...
app.all('/process', (req, res) => {
	const { send } = req.query;
	if (!send) return res.status(400).json({ error: 'Missing send query' });
	if (process.send) {
		process.send(send)
		res.json({ status: 'Send', data: send });
	} else res.json({ error: 'Process not running with IPC' });
});

module.exports = { app, server, PORT };
