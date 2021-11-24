var feelsDict = {'Angry': {'Let Down' : ['Betrayed', 'Resentful'],
'Humiliated': ['Disrespected', 'Ridiculed'],
'Bitter': ['Indignant', 'Violated'],
'Mad': ['Furious', 'Jealous'],
'Aggressive': ['Provoked', 'Hostile'],
'Frustrated': ['Infuriated', 'Annoyed'],
'Distant': ['Withdrawn', 'Numb'],
'Critical': ['Skeptical', 'Dismissive']},
'Disgusted': {'Disapproving': ['Judgemental', 'Embarrassed'],
    'Disappointed': ['Appalled', 'Revolted'],
    'Awful': ['Nauseated', 'Detestable'],
    'Repelled': ['Horrified', 'Hesitant']},
'Sad': {'Hurt': ['Embarrassed', 'Disappointed'],
'Depressed': ['Inferior', 'Empty'],
'Guilty': ['Remorseful', 'Ashamed'],
'Despair': ['Grief', 'Powerless'],
'Vulnerable': ['Victimized', 'Fragile'],
'Lonely': ['Isolated', 'Abandoned']},
'Surprised': {'Startled': ['Shocked', 'Dismayed'],
    'Confused': ['Disillusioned', 'Perplexed'],
    'Amazed': ['Awe', 'Eager'],
    'Excited': ['Eager', 'Energetic']},
'Bad': {'Bored': ['Indifferent', 'Apathetic'],
'Busy': ['Pressured', 'Rushed'],
'Stressed': ['Overwhelmed', 'Out of Control'],
'Tired': ['Sleepy', 'Unfocused']},
'Fearful': {'Scared': ['Helpless', 'Frightened'],
  'Anxious': ['Overwhelmed', 'Worried'],
  'Insecure': ['Inadequate', 'Inferior'],
  'Weak': ['Worthless', 'Insignificant'],
  'Rejected': ['Excluded', 'Persecuted'],
  'Threatened': ['Nervous', 'Exposed']}};


console.log(Object.keys(feelsDict));

var startButton = document.getElementById("start");

startButton.addEventListener("click", function() {
  // Object.keys(feelsDict).forEach(displayOptions);
  startButton.style.display = "none";
  feelingsFunnel();
});

function generateButtons(emotions, nextFunc) {
  var btns = [];
  for (i = 0; i < emotions.length; i++) {
    var btn = document.createElement('input');
    btn.type = 'button';
    console.log(emotions[i]);
    btn.value = emotions[i];
    btn.id = emotions[i];
    btn.addEventListener("click", nextFunc);
  }
  return btns;
}


function feelingsFunnel() {
  console.log("Funnel started");
  var div = document.createElement("div");
  var btns = displayButtons(Object.keys(feelsDict), div);
  btns.forEach((btn) => {
    div.appendChild(btn);
  })
  document.body.appendChild(div);

}

function hide(btnId, element) {
  console.log("Hide called");
  element.style.display = "none";
  console.log(btnId);
}

function feelingsStep2(emotion) {
  console.log("Step 2!");
  var btnArr = [];
  var div2 = document.createElement("div");
  console.log("Div2 created");
  var emotionsDict = feelsDict[emotion];
  var emotions = Object.keys(feelsDict[emotion]);
  console.log(emotions);
  for (var i = 0; i < emotions.length; i++) {
    var btn = document.createElement('input');
    btn.type = 'button';
    btn.value = emotions[i];
    btn.id = emotions[i];

    btn.addEventListener("click", function() {
      div2.remove();
      console.log("You selected " + this.id);
      console.log(emotionsDict[this.id]);
      feelingsStep3(emotionsDict[this.id]);
    });

    btnArr.push(btn);
    console.log(btnArr)
    
    }
    console.log(btnArr);

    btnArr.forEach((item) => {
      console.log("item");
      div2.appendChild(item);
      console.log("btn added to div");
    });
    document.body.appendChild(div2);
}

function feelingsStep3(emotions) {
  console.log("Step 3!");
  var btnArr = [];
  var div = document.createElement("div");
  for (var i = 0; i < emotions.length; i++) {
    var btn = document.createElement('input');
    btn.type = 'button';
    btn.value = emotions[i];
    btn.id = emotions[i];
    btn.addEventListener("click", function() {
      console.log("You are feeling " + this.id);
      var final = document.createElement("h4");
      final.innerHTML = "You are feeling " + this.id + ". Lil' bitch";
      div.remove();
      document.body.appendChild(final);
    });
    btnArr.push(btn);
  }
  btnArr.forEach((item) => {
    div.appendChild(item);
  });
  document.body.appendChild(div);
}

function displayButtons(emotions, element) {
  var btnArr = [];
  for (var i = 0; i < emotions.length; i++) {
    var btn = document.createElement('input');
    btn.type = 'button';
    console.log(emotions[i]);
    btn.value = emotions[i];
    btn.id = emotions[i];
    btn.addEventListener("click", function() {
      // element.style.display = "none";
      element.remove();
      console.log(this.id);
      feelingsStep2(this.id);
    });
    btnArr.push(btn);
  }
  return btnArr;
}

// function displayOptions(emotion, domElem) {
//   let btn = document.createElement("button");
//   console.log("Button created");
//   btn.innerHTML = emotion;
//   btn.id = emotion;
//   document.getElementbyId(domElem).appendChild(btn);
//   btn.addEventListener("click", function() {
//     domElem.style.display = "none";
//   })
