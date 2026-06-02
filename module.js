const _ChatPortrait = class _ChatPortrait {
    static setChatMessageBorder(html, messageData, authorColor) {
        let authorColor = "black";
        if (speakerInfo.author) {
            authorColor = speakerInfo.author.color;
        } else {
            authorColor = speakerInfo?.user.color;
        }

        if (!messageData.borderColor) {
            html[0].style.borderColor = authorColor;
            messageData.borderColor = authorColor;
        }
    }
}