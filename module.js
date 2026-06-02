Hooks.once("ready", () => {
  console.log("Chat Colors | Ready")
});

Hooks.on("renderChatMessage", async (message, html, speakerInfo) => {
    ChatColors.onRenderChatMessage(message, html, speakerInfo);
})

const ChatColors = class ChatColors {
    static onRenderChatMessage(chatMessage, html, speakerInfo) {
        authorColor = "black";
        if (speakerInfo.author) {
            authorColor = speakerInfo.author.color;
        } else {
            authorColor = speakerInfo?.user.color;
        }
        const messageData = speakerInfo.message;
        ChatColors.setChatMessageBorder(html, messageData, authorColor);
    }

    // static onRenderChatMessageInternal(chatMessage, html, speakerInfo, messageSender, messageHeaderBase, elementItemImageList, elementItemNameList, elementItemContentList, elementItemTextList, imageReplacer, gameSystemId, doNotPrintPortrait, doOnlyPortrait) {
    //     const messageDataBase = speakerInfo;
    //     let authorColor = "black";
    //     if (messageDataBase.author) {
    //     authorColor = messageDataBase.author.color;
    //     } else {
    //     authorColor = messageDataBase?.user.color;
    //     }
    //     const messageData = messageDataBase.message;
    //     _ChatPortrait.setChatMessageBorder(html, messageData, authorColor);
    // }

    static setChatMessageBorder(html, messageData, authorColor) {
        authorColor = "black";
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