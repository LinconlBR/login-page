import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI não está definida");
}

declare global {
  // eslint-disable-next-line no-var
  var _mongoClient: MongoClient | undefined;
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // Em dev, reaproveita a conexão entre hot-reloads do Next.js
  if (!global._mongoClientPromise) {
    global._mongoClient = new MongoClient(uri);
    global._mongoClientPromise = global._mongoClient.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Em produção (Vercel), cria uma conexão por instância de função,
  // mas ainda cacheia dentro do módulo para reaproveitar entre invocações "quentes"
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
}

export default clientPromise;