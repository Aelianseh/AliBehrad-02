import dbs from './db-logo.json';

export default function handler(req, res) {
    res.status(200).json(dbs);
}