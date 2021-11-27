import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import { JournalStorage } from "./storage/journalStorage";
import { DefaultJournalStorage } from "./storage/defaultJournalStorage";

dotenv.config();

const app = express();
app.use(express.json());

const port: number = parseInt(process.env.PORT || '3000');

// TODO Add interface
const storage: JournalStorage = new DefaultJournalStorage();

app.get('/years', handleGetYears)

function handleGetYears(req: Request, res: Response) {
    res.json(storage.getYears());
}

app.listen(port, () => {
    console.log(`Journal API listening at http://localhost:${port}`)
})

