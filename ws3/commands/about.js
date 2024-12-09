module.exports = {
  description: "What is WieAI?",
  async run({ api, send, admin }){
    await send({
      attachment: {
        type: "image",
        payload: {
          url: "https://i.imgur.com/EUq9wik.jpeg",
          is_reusable: true
        }
      }
    });
    setTimeout(async () => await send({
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: `🤖 About Ice Cream Yummy AI:
Ice Cream Yummy AI is your friendly, helpful personal assistant.

💭 Why I named Ice Cream Yummy as a name of the page bot because this is dedicated to my Favorite Video

❓ Contact us admins if you experienced/encountered any issue regarding to the bot and I will try to fix it. Thankyou for using me as a personal assistant!`,
          buttons: [
            {
              type: "web_url",
              url: "https://web.facebook.com/profile.php?id=61567622150819",
              title: "Like/Follow our Page"
                },
            {
              type: "web_url",
              url: "https://www.facebook.com/maryrose031218",
              title: "Contact Admin 1"
                }
             ]
        }
      }
    }), 2*1000);
  }
}
