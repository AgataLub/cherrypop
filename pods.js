window.addEventListener("load", fetchQuestions);

    //Fill fields

    function fetchQuestions() {
        console.log("fetchQuestion");
        fetch("https://agataswistak.com/wordpress/wp-json/wp/v2/faq")
            .then(function (response) {
                console.log(response)
                return response.json();
            })

            .then(function (data) {
                console.log("data")
                dataReceived(data);
            })
    }

    function dataReceived(question) {
        question.forEach(showQuestion);
        console.log("data received");
    }


    function showQuestion(myQuestion) {
        console.log("myQuestion")

        var temp = document.querySelector("#templateID");
        var myCopy = temp.cloneNode(true);

        myCopy.querySelector(".faq-question").textContent = myQuestion.question;
        myCopy.querySelector(".faq-answer").textContent = myQuestion.answer;

        myCopy.querySelector(".faq-question").addEventListener("click", toggleFAQ);
        myCopy.querySelector(".faq-answer").style.display = "none";

        const parentElem = document.querySelector(".faq-container");
        parentElem.appendChild(myCopy);

        function toggleFAQ() {
    console.log("toggleFAQ");
    var x = myCopy.querySelector(".faq-answer");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
    }

