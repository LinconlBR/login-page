import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI não está definida");
}

declare global {
  // eslint-disable-next-line no-var
  var _mongoClient: MongoClient | undefined;
}

// Não chamamos .connect() aqui de propósito: o driver do MongoDB conecta
// automaticamente (lazy) na primeira operação real feita no banco.
// Isso evita que o Next.js tente abrir conexão de rede durante o BUILD
// (quando ele faz "collect page data" das rotas de API).
function getMongoClient(): MongoClient {
  if (!global._mongoClient) {
    global._mongoClient = new MongoClient(uri as string);
  }
  return global._mongoClient;
}

export default getMongoClient;