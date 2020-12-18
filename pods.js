window.addEventListener("load", fetchQuestions);

    //Fill fields

    fetchQuestions();

    function fetchQuestions() {
        console.log("fetchQuestion");
        fetch("https://agataswistak.com/wordpress/wp-json/wp/v2/ap-quiz")
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

        myCopy.querySelector(".number_span").textContent = myQuestion.number;
        myCopy.querySelector("h1").textContent = myQuestion.quiz_title;
        myCopy.querySelector(".blurb").textContent = myQuestion.blurb;
        myCopy.querySelector("#specificQuestion").textContent = myQuestion.question;

        if (myQuestion.number < 4) {
            myCopy.querySelector(".table").classList.remove("display_none");
            myCopy.querySelector("#answer1").textContent = myQuestion.answers;
            myCopy.querySelector("#answer2").textContent = myQuestion.answers2;
            myCopy.querySelector("#answer3").textContent = myQuestion.answers3;
            myCopy.querySelector("#answer4").textContent = myQuestion.answers4;
            myCopy.querySelector("#answer5").textContent = myQuestion.answers5;

        } else {
            myCopy.querySelector(".slidecontainer").classList.remove("display_none");

        }

        var myQuestionImage = myQuestion.image_quiz.guid;
        console.log(myQuestionImage);

        myCopy.querySelector(".illustration").setAttribute("src", myQuestionImage);

        var test = myQuestion.number;
        console.log(test);
        console.log('#template_place' + myQuestion.number);

        const parentElem = document.querySelector("#template_place" + myQuestion.number);
        parentElem.appendChild(myCopy);
    }
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
