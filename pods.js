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

        const parentElem = document.querySelector(".faq-container");
        parentElem.appendChild(myCopy);
    }

//<<<<<<< HEAD
//var slider = document.querySelector("#myRange");
//    var output = document.querySelector("#demo");
//    output.innerHTML = slider.value;
//        console.log("This.value:" + this.value + "output.innerHTML" + output.innerHTML);
//
//    slider.oninput = function() {
//        output.innerHTML = this.value;
//    }
//=======
