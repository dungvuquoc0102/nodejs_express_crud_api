const path = require("path");

const storeSingleFile = async (file) => {
    const extName = path.extname(file.name);
    const finalName = path.basename(file.name, extName) + Date.now() + extName;
    const uploadPath = __dirname + "/../public/img/upload/" + finalName;
    try {
        await file.mv(uploadPath);
        return {
            status: "success",
            path: finalName,
            fileName: file.name,
            error: null
        };
    } catch (err) {
        console.log(err);
        return {
            status: "fail",
            path: null,
            fileName: file.name,
            error: JSON.stringify(err)
        };
    }
};
const storeMultipleFiles = async (filesArr) => {
    let resultArr = [],
        countSuccess = 0;
    const pathFile = __dirname + "/../public/img/upload/";
    for (let i = 0; i < filesArr.length; i++) {
        const extName = path.extname(filesArr[i].name);
        const finalName = path.basename(filesArr[i].name, extName) + Date.now() + extName;
        try {
            await filesArr[i].mv(pathFile + finalName);
            resultArr.push({
                status: "success",
                path: finalName,
                fileName: filesArr[i].name,
                error: null
            });
            countSuccess++;
        } catch (err) {
            console.log(err);
            resultArr.push({
                status: "fail",
                path: null,
                fileName: filesArr[i].name,
                error: JSON.stringify(err)
            });
        }
    }
    return {
        countSuccess: countSuccess,
        detail: resultArr
    };
};
module.exports = { storeSingleFile, storeMultipleFiles };
