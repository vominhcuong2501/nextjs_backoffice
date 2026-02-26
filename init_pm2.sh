#!/bin/bash

# 📂 File: init_pm2.sh
# 🛠 Purpose: Initialize PM2 environment after setting up a new server.

echo "🚀 Starting PM2 environment initialization..."

# 1️⃣ Install pm2-logrotate if it's not installed
if pm2 list | grep -q pm2-logrotate; then
  echo "✅ pm2-logrotate is already installed."
else
  echo "🛠 Installing pm2-logrotate..."
  pm2 install pm2-logrotate
fi

# 2️⃣ Configure pm2-logrotate settings
echo "⚙️  Setting up pm2-logrotate configuration..."

pm2 set pm2-logrotate:max_size 10M                # 🔸 Rotate log when exceeding 10MB
pm2 set pm2-logrotate:retain 7                    # 🔸 Keep maximum 7 rotated logs
pm2 set pm2-logrotate:compress true               # 🔸 Compress old logs (.gz)
pm2 set pm2-logrotate:dateFormat YYYY-MM-DD       # 🔸 Date format for rotated logs
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'  # 🔸 Rotate logs daily at 00:00
pm2 set pm2-logrotate:workerInterval 30           # 🔸 Check logs every 30 seconds

# 3️⃣ Save current PM2 process list
echo "💾 Saving PM2 process list..."
pm2 save

# 4️⃣ Setup PM2 auto-start on server boot
echo "🔧 Setting up PM2 startup service..."
pm2 startup

echo "🌟 PM2 initialization completed successfully!"
echo "👉 Note: If 'pm2 startup' shows an extra command (like sudo env ... pm2 startup), please run that command manually to finish the setup."

exit 0
