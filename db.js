import { Level } from 'level'

const db = new Level('example', { valueEncoding: 'json' })

export const insert = async (key, value) => {
    try {
        await db.put(key, value);
        console.log("Inserted: " + key + " : " + value);
    } catch (error) {
        console.log(error)
    }
}

export const find = async (key) => {
    try {
        return await db.get(key)
    } catch (error) {
        console.log(error)
    }
}

