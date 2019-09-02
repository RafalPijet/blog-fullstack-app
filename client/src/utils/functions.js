export const cutText = (content, maxLength) => {

    if (maxLength > 0) {
        if (content.length > maxLength) {
            let result = content.substr(0, maxLength);
            return result.substr(0, result.lastIndexOf(" ")) + '...';
        } else {
            return content;
        }
    } else {
        return 'Error';
    }
};
