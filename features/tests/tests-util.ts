'use server'

import fs from 'fs'


export async function makeFolder(dir?: string) {
    if (dir && !fs.existsSync(dir)) {
        await fs.promises.mkdir(dir)
    }
    return
}