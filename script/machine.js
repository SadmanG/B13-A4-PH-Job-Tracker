// Machine ID --> Hide All --> Show ID
function showOnly(id){
    const all = document.getElementById("all-container");
    const interview = document.getElementById("interview-container");
    const rejected = document.getElementById("rejected-container");

    // Shobaike hide kore dao
    all.classList.add("hidden");
    interview.classList.add("hidden");
    rejected.classList.add("hidden");

    //ID wala element ta ke tumi show koro
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}

// Machine --> IntCount
function getIntCount(){
    const intCountElement = document.getElementById("int-count");
    const intCount = intCountElement.innerText;
    console.log("Current IntCount: ", Number(intCount));
    return Number(intCount);
}