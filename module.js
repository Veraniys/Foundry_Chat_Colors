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

    static onRenderChatMessageInternal(chatMessage, html, speakerInfo, messageSender, messageHeaderBase, elementItemImageList, elementItemNameList, elementItemContentList, elementItemTextList, imageReplacer, gameSystemId, doNotPrintPortrait, doOnlyPortrait) {
        const messageDataBase = speakerInfo;
        let authorColor = "black";
        if (messageDataBase.author) {
        authorColor = messageDataBase.author.color;
        } else {
        authorColor = messageDataBase?.user.color;
        }
        const messageData = messageDataBase.message;
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