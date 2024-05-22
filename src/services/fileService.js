const storeSingleFile = async (file) => {
    const uploadPath = __dirname + "/" + file.name;
    console.log(uploadPath);
    file.mv(uploadPath);
};
module.exports = { storeSingleFile };
