const onSave = (error, doc, next) => {
    if (error.name === 'MongoError' && error.code === 11000) {
        const invalidFields = Object.keys(error.keyValue).map((invalidPropertyPath) => {
            return `Duplicate Field: ${invalidPropertyPath}\n`;
        });
        next(new Error(invalidFields));
    } else {
        next();
    }
}

module.exports = {
    onSave: onSave
};