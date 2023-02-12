const btn = document.getElementById('btn');

const getAdvice = async function () {
    const res = await fetch(
        "https://api.adviceslip.com/advice"
    );
    const data = await (await res).json();
    console.log(data)

    document.getElementById("number").innerHTML = `${data.slip.id}`
    document.getElementById('advice').innerHTML = `${data.slip.advice}`
};

getAdvice();

btn.addEventListener("click", getAdvice);

