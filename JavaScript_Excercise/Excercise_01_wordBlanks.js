function wordBlanks(myNoun, myAdjective, myVerb, myAdverb)
{
    var result = "";

    result = myAdjective +  " "  + myNoun +  " "  + myVerb +  " "  + myAdverb;

    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));