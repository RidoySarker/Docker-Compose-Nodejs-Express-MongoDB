# Docker-Compose-Nodejs-Express-MongoDB
Docker Compose Nodejs Express MongoDB Mongo Express Example


# env
```bash
APP_PORT=3000

DB_URI=mongodb://mongo:27017/job_portal

MONGODB_PORT=2222

MONGO_EXPRESS_PORT=4444
```

# Run the System


Run on the background with command:
```bash
sudo docker-compose up -d --build 
```
Stopping all the running containers
```bash
docker-compose down
```

Navigate to http://localhost:3000 in your browser.