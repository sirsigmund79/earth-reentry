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

function feelingsFunnel() {
  console.log("Funnel started");
  var docFrag = document.createDocumentFragment();
  var btns = displayButtons(Object.keys(feelsDict));
  btns.forEach((btn) => {
    docFrag.appendChild(btn);
  })
  document.body.appendChild(docFrag);

}

function displayButtons(emotions) {
  var btnArr = [];
  for (var i = 0; i < emotions.length; i++) {
    var btn = document.createElement('input');
    btn.type = 'button';
    btn.value = emotions[i];
    btn.id = emotions[i];
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
