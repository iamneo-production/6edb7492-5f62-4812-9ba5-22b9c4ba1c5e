export const analyze = (text) => {
    if (text.includes("hi") || text.includes("hai") || text.includes("hello"))
      return "Hi,How can I help you?";
    else if (text.includes("Order delayed") || text.includes("order delayed"))
      return "Sorry to hear that! We will look into the issue and will try to deliver the order as soon as possible.";
    else if (
      text.includes("order delivered late") ||
      text.includes("order item missing") ||
      text.includes("food was bad") ||
      text.includes("packaging problem") ||
      text.includes("received wrong item")
    )
      return (
        <p style={{color:'black',fontSize:'18px',fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'}}>
          Sorry to hear that.We will inform the restaurant about the issue and
          will make sure this does not repeat.if you are not satisfied with this
          help do you want to connect with live support instead?Yes/No
        </p>
      );
    if (text.includes("yes"))
      return "Kindly wait! We will connect you with live support";
    else if (text.includes("no"))
      return "We will make sure not to repeat this.Thank you  for your patience";
    else if (text.includes("Okay"))
      return "Your kind cooperation is appreciated.Thank you";
    else if (
      text.includes("Thank you") ||
      text.includes("Thanks") ||
      text.includes("ok")
    )
      return "Thank you, Have a nice day";
    else if (
      text.includes("speak ") ||
      text.includes("contact") ||
      text.includes("number") ||
      text.includes("call")
    )
      return "you can contact with team via xxxx xxxx";
    else if (
      text.includes("Delivery time") ||
      text.includes("time takes") ||
      text.includes("time") ||
      "delivery time"
    )
      return "I can't get you can you rephrase the message";
  };
  