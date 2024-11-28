document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    addMessage(userInput, "user-message");
    document.getElementById("user-input").value = "";


    // Simulate bot response with delay

    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        addMessage(botResponse, "bot-message");
    }, 1000);
}

function addMessage(text, className) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", className);
    messageElement.innerText = text;
    document.getElementById("chat-messages").appendChild(messageElement);
    document.getElementById("chatbot-body").scrollTop = document.getElementById("chatbot-body").scrollHeight;
}

function getBotResponse(input) {
    // Convert input to lowercase for easier matching
    input = input.toLowerCase();

    // Responses for different inputs
    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How can I assist you today?";
    } else if (input.includes("how are you") || input.includes("kese ho")) {
        return "I'm just a bot, but thanks for asking! How about you?";
    } else if (input.includes("your name")) {
        return "I'm your friendly chatbot here to help!";
    } else if (input.includes("help")) {
        return "Sure! I'm here to help. You can ask me about our services, working hours, or any other questions.";
    } else if (input.includes("services")) {
        return "We offer various services like customer support, information assistance, and general inquiries.";
    } else if (input.includes("hours") || input.includes("open") || input.includes("close")) {
        return "Our working hours are from 9 AM to 6 PM, Monday to Friday.";
    } else if (input.includes("thankyou") || input.includes("thanks") || input.includes("thank you")) {
        return "You're very welcome! Let me know if there's anything else I can help with.";
    } else if (input.includes("bye")) {
        return "Goodbye! Have a great day!";
    } else if (input.includes("joke")) {
        return "Why do programmers prefer dark mode? Because the light attracts too many bugs! 😆";
    }
    else if (input.includes("Who's your Web Technology Professor?") || input.includes("web")) {
        return "Mr. Yawar Azad👨‍💻";
    }
    /*else if (input.includes("college")) {
        return "Government College of Engineering and Technology, Jammu (GCET)";*/
    else if (input.includes("weather")) {
        return "I'm unable to check the current weather, but you can try using a weather app!";
    } else if (input.includes("age")) {
        return "I'm timeless! But I was created just recently to help you.";
    } else if (input.includes("favorite color")) {
        return "I love all colors, but I seem to have a lot of blue here, don’t I?";
    } else if (input.includes("creator") || input.includes("created")) {
        return "I was created by Mr. Akshat Gupta!";
    }

    // Default response if input doesn’t match any known phrases
    return "I'm here to help. Could you please ask that differently?";
}
