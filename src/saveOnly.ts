import * as core from "@actions/core";

import saveImpl from "./saveImpl";

async function run(): Promise<void> {
    const cacheId = await saveImpl();
    if (cacheId === -1) {
        core.warning(`Cache save failed.`);
    }
}

run();

export default run;
