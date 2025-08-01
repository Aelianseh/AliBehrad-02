import dbF from './db-json.json';

export default function handler(req, res) {
  res.status(200).json(dbF);
}