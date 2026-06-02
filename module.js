const _ChatPortrait = class _ChatPortrait {
    static onRenderChatMessage(chatMessage, html, speakerInfo) {
        let authorColor = "black";
        if (speakerInfo.author) {
            authorColor = speakerInfo.author.color;
        } else {
            authorColor = speakerInfo?.user.color;
        }
        const messageData = speakerInfo.message;
        _ChatPortrait.setChatMessageBorder(html, messageData, authorColor);
    }

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