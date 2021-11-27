import { JournalStorage } from "./journalStorage";

export class DefaultJournalStorage implements JournalStorage {

    constructor() {

    }

    getYears(): string[] {
        return ['2014', '2015', '2016']
    }

}