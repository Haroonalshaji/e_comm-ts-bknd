# E-Commerce Backend Setup Guide

## Key Requirements

### 1. **Runtime & Tools**
- **Node.js** (v16 or higher recommended)
- **npm** (comes with Node.js) or **yarn**
- **MongoDB** (local installation or MongoDB Atlas cloud)

### 2. **Environment Variables**
You'll need to create a `.env` file in the root directory with the following variables:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/e_comm
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
```

### 3. **Dependencies**
The project uses:
- **Express.js** - Web framework
- **Mongoose** - MongoDB ODM
- **dotenv** - Environment variable management
- **cors** - Cross-Origin Resource Sharing
- **TypeScript** - Type-safe JavaScript
- **ts-node-dev** - Development server with hot reload

## Step-by-Step Setup Instructions

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Set Up MongoDB

**Option A: Local MongoDB**
- Install MongoDB locally
- Start MongoDB service:
  ```bash
  # Windows
  net start MongoDB
  
  # macOS/Linux
  sudo systemctl start mongod
  ```

**Option B: MongoDB Atlas (Cloud)**
- Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a cluster and get your connection string
- Update `MONGODB_URI` in `.env` file

### Step 3: Create Environment File
Create a `.env` file in the root directory (`e_comm/`):
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/e_comm
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
```

### Step 4: Implement Core Files (if not already done)
Ensure the following files have proper implementations:
- `src/server.ts` - Server entry point
- `src/app.ts` - Express app configuration
- `src/config/db.ts` - Database connection
- Models, controllers, routes, services, and middlewares

### Step 5: Run the Server

**Development Mode (with hot reload):**
```bash
npm run dev
```

**Production Mode:**
```bash
# First, build the TypeScript code
npm run build

# Then run the compiled JavaScript
npm start
```

## Project Structure Overview

```
src/
├── app.ts              # Express app setup & middleware
├── server.ts           # Server entry point
├── config/
│   └── db.ts          # MongoDB connection
├── controllers/        # Request handlers
├── middlewares/        # Custom middleware (auth, etc.)
├── models/            # Mongoose schemas
├── routes/            # API route definitions
│   ├── admin/        # Admin routes
│   └── customer/     # Customer routes
├── services/          # Business logic
└── utils/            # Helper functions (token, etc.)
```

## Verification Steps

1. **Check if server starts:**
   - Server should start on `http://localhost:3000` (or your configured PORT)
   - Look for "Server running on port X" and "Database connected" messages

2. **Test API endpoints:**
   - Use Postman, Thunder Client, or curl to test your routes
   - Example: `GET http://localhost:3000/api/health`

## Common Issues & Solutions

### Issue: Port already in use
**Solution:** Change PORT in `.env` file or kill the process using that port

### Issue: MongoDB connection error
**Solution:** 
- Verify MongoDB is running
- Check `MONGODB_URI` in `.env` is correct
- Ensure MongoDB is accessible (firewall/network)

### Issue: TypeScript compilation errors
**Solution:**
- Run `npm install` to ensure all dependencies are installed
- Check `tsconfig.json` configuration
- Verify all imports are correct

### Issue: Module not found errors
**Solution:**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

## Next Steps

1. Implement your business logic in the empty files
2. Set up proper error handling
3. Add request validation
4. Implement authentication middleware
5. Add API documentation (Swagger/OpenAPI)
6. Set up logging (Winston/Morgan)
7. Add unit and integration tests

