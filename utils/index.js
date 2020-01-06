const {PythonShell} = require("python-shell");

module.exports = {
    runPython: imageHash => {
        console.log(imageHash);
        return new Promise((resolve, reject) => {
            PythonShell.run(
                "/workspace/models/main.py",
                null,
                async (err, result) => {
                    if (err) {
                        if (err.traceback === undefined) {
                            console.log(err.message);
                        } else {
                            console.log(err.traceback);
                        }
                    }
                    const predict = await result[result.length - 1];
                    console.log(predict);
                    resolve(predict);
                }
            );
        });
    }
};


