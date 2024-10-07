var flavortype = 0;
document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // find the element with the id flavorinnate
            const flavorinnate = document.getElementById('flavorinnate');
            if (button.id === 'innate') {
                flavorinnate.textContent = 'The innate immune system is the body’s first line of defense against infections. It includes a range of mechanisms that respond quickly to a variety of pathogens in a non-specific manner, meaning it reacts the same to all foreign entities. This system acts immediately upon detection of invaders, helping to contain and eliminate threats without the need for prior exposure or memory of specific pathogens.';
                if (flavortype == 1) {
                flavorinnate.style.visibility = !flavorinnate.style.visibility || flavorinnate.style.visibility === 'hidden' ? 'visible' : 'hidden';
                } else {
                    flavortype = 1;
                }
            } else if (button.id === 'adaptive') {
                flavorinnate.textContent = 'The adaptive immune system is a specialized defense mechanism that develops a targeted response to specific pathogens. Unlike the innate immune system, it takes longer to activate but provides a more effective response through the recognition of unique antigens. This system also creates immunological memory, allowing the body to respond more rapidly and effectively to future encounters with the same pathogen.';
                if (flavortype == 2) {
                flavorinnate.style.visibility = !flavorinnate.style.visibility || flavorinnate.style.visibility === 'hidden' ? 'visible' : 'hidden';
                } else {
                    flavortype = 2;
                }
            }
        });
    });
});

function updateText(text){

    let delay = 0;
    
    let p = document.getElementById("slime");

    p.innerHTML = text
    .split("")
    .map(letter => {
        console.log(letter);
        return '<span>' + letter + '</span>';
    })
    .join("");

    Array.from(p.children).forEach((span, index) => {
    setTimeout(() => {
        span.classList.add("wavy");
    }, index * 180 + delay);
    });

}

updateText("slime");