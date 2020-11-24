 //Declare the UI elements
 var ul = document.getElementById('ul');
 var nextButton = document.getElementById('btnNext');
 var quizbox = document.getElementById('questionBox');
 var opt1 = document.getElementById('opt1');
 var opt2 = document.getElementById('opt2');
 var opt3 = document.getElementById('opt3');
 var opt4 = document.getElementById('opt4');

 var app={
        questions:[
            {
                q:'What is the name of the river',
                options: ['Danube', 'Niger', 'Congo', 'Limpopo'],
                answer:1
            },
            {
                q:'What is the name of the Deadly virus',
                options: ['Antrax', 'Killvi', 'Corona', 'Wuhanvi'],
                answer:2
            },
            {
                q:'Which English Football League team was given the nickname The Gas?',
                options: ['Egypt', 'Bristol Rovers', 'Belgiun', 'England'],
                answer:1
            },
            {
                q:'Who is the top scorer for the England Women’s national football team?',
                options: ['Kelly Smith', 'Baley', 'Rouder Rousey', 'Angela'],
                answer:0
            },
            {
                q:'What does Tom Hanks compare life to in Forest Gump?',
                options: ['A silent wind', 'A growing Flowers', 'An article', 'A box of chocolates'],
                answer:3
            },
            {
                q:'What does Bridget Jones name her baby in the film series’s third instalment?',
                options: ['William', 'Kelvin', 'Cultisar', 'Nelson'],
                answer:1
            },
            {
                q:'What is the most consumed manufactured drink in the world?',
                options: ['Tea', 'Alcohol', 'Minerals', 'Water'],
                answer:0
            },
            {
                q:'In the Stars Wars film franchise, which character famously declares (I am your father) ?',
                options: ['chepter', 'Willow', 'Darth Vader', 'saraphiemer'],
                answer:2
            },
            {
                q:'What is the worlds largest land mammal?',
                options: ['Elephant', 'Anacondas', 'whale', 'shark'],
                answer:0
            },
            {
                q:' How many stars are on the Brazilian flag?',
                options: ['8', '7', '20', '27'],
                answer:3
            }
           
        ],
       
        index:0,
              
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
            else {
                quizbox.innerHTML="Quiz Completed!";
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        next: function(){
            this.index++;
            this.load();
        },
        check: function(ele) {
            var id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
            }
        },
        preventClick:function(){
            for (let i = 0; i < ul.children.length; i++) {
                ul.children[i].style.pointerEvents="none";           
            }
        },
        allowClick:function(){
                for (let i = 0; i < ul.children.length; i++) {
                    ul.children[i].style.pointerEvents="auto";
                    ul.children[i].className=''           
                }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML= this.score + "/" +this.questions.length;
        }
 }

 window.load=app.load();

 function button(ele){
    app.check(ele);
    app.check(ele);
    app.preventClick();
 }

 function next(){
     app.next();
     app.allowClick();
 }