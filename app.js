//function to change levels
function goToLevel () {
    var select = document.getElementById( "levelSelect" );
    var page = select.value;
    if ( page )
    {
        window.location.href = "/" + page + ".html";
        console.log( page )
    }
}

function index () {
    window.location.href = "/index.html";
}
function level1 () {
    window.location.href = "/level-1.html";
}
function level2 () {
    window.location.href = "/level-2.html";
}
function level3 () {
    window.location.href = "/level-3.html";
}
function level4 () {
    window.location.href = "/level-4.html";
}
function level5 () {
    window.location.href = "/level-5.html";
}
function level6 () {
    window.location.href = "/level-6.html";
}
function level7 () {
    window.location.href = "/level-7.html";
}
function level8 () {
    window.location.href = "/level-8.html";
}
function level9 () {
    window.location.href = "/level-9.html";
}
function level10 () {
    window.location.href = "/level-10.html";
}
function level11 () {
    window.location.href = "/level-11.html";
}
function level12 () {
    window.location.href = "/level-12.html";
}
function level13 () {
    window.location.href = "/level-13.html";
}
function level14 () {
    window.location.href = "/level-14.html";
}
function level15 () {
    window.location.href = "/level-15.html";
}
function final () {
    window.location.href = "/final.html";
}

function linkedin () {
    window.open( "https://www.linkedin.com/in/himankarora17/" );
}
function github () {
    window.open( "https://github.com/HimankArora?tab=repositories" )
}

function mail () {
    window.open( "mailto:himankarora17@gmail.com" )
}

const buttonElement = document.querySelector( '#submit' )
const level = document.getElementById( 'level' ).innerText
console.log( level )
function addCSS () {
    const textAreaElement = document.querySelector( 'textarea' )
    const css = textAreaElement.value
    const forefront = document.querySelector( '#forefront' )
    forefront.style.cssText = css
    if ( level === "Level 1" )
    {
        if ( css === 'justify-content:flex-end;' || css === 'justify-content:flex-end' )
        {
            alert( "Congrats you have cleared Level-1!!! You can proceed to the next level" )
            document.querySelector( '#next' ).disabled = false;
        } else
        {
            alert( 'Sorry! :( Try again' )
        }
    }
    else if ( level === "Level 2" )
    {
        if ( css === 'justify-content:flex-end; align-items:center;' || css === 'justify-content:flex-end align-items:center' )
        {
            alert( "Congrats you have cleared Level-2!!! You can proceed to the next level" )
            document.querySelector( '#next' ).disabled = false;
        } else
        {
            alert( 'Sorry! :( Try again' )
        }
    }
    else if ( level === "Level 3" )
    {
        if ( css === 'justify-content:space-between; align-items:center;' || css === 'justify-content:space-between align-items:center' )
        {
            alert( "Congrats you have cleared Level-3!!! You can proceed to the next level" )
            document.querySelector( '#next' ).disabled = false;
        } else
        {
            alert( 'Sorry! :( Try again' )
        }
    }
    else if ( level === "Level 4" )
    {
        if ( css === 'justify-content:flex-end; align-items:flex-end;' || css === 'justify-content:flex-end align-items:flex-end' )
        {
            alert( "Congrats you have cleared Level-4!!! You can proceed to the next level" )
            document.querySelector( '#next' ).disabled = false;
        } else
        {
            alert( 'Sorry! :( Try again' )
        }
    }
    else if ( level === "Level 5" )
    {
        if ( css === 'justify-content:center; align-items:center;' || css === 'justify-content:center; align-items:center;' )
        {
            alert( "Congrats you have cleared Level-5!!! You can proceed to the next level" )
        }
        else if ( css === 'justify-content:flex-start; align-items:center;' || css === 'justify-content:flex-start align-items:center' || css === 'justify-content:flex-end; align-items:center;' || css === 'justify-content:flex-end align-items:center' )
        {
            alert( "Hold up! :0 you want to kill those poor cockroaches? Please Try Again!" )
            document.querySelector( '#next' ).disabled = false;
        }
        else
        {
            alert( 'Sorry! :( Try again' )
        }
    }
    else if ( level === "Level 6" )
    {
        if ( css === 'justify-content:space-between; align-items:center;' || css === 'justify-content:space-between align-items:center' )
        {
            alert( "Congrats you have cleared Level-6!!! You can proceed to the next level" )
            document.querySelector( '#next' ).disabled = false;
        }
        else
        {
            alert( 'Sorry! :( Try again' )
        }
    }
    else if ( level === "Level 7" )
    {
        if ( css === 'align-items:center; flex-direction:row-reverse;' || css === 'align-items:center flex-direction:row-reverse' )
        {
            alert( "Congrats you have cleared Level-7!!! You can proceed to the next level" )
            document.querySelector( '#next' ).disabled = false;
        }
        else
        {
            alert( 'Sorry! :( Try again' )
        }
    }
    else if ( level === "Level 8" )
    {
        if ( css === 'flex-direction:column-reverse;' || css === 'flex-direction:column-reverse' )
        {
            alert( "Congrats you have cleared Level-8!!! You can proceed to the next level" )
            document.querySelector( '#next' ).disabled = false;
        }
        else
        {
            alert( 'Sorry! :( Try again' )
        }
    }
    else if ( level === "Level 9" )
    {
        if ( css === 'flex-direction:row-reverse; justify-content:start;' || css === 'flex-direction:row-reverse justify-content:start' )
        {
            alert( "Congrats you have cleared Level-9!!! You can proceed to the next level" )
            document.querySelector( '#next' ).disabled = false;
        }
        else
        {
            alert( 'Sorry! :( Try again' )
        }
    }
    else if ( level === "Level 10" )
    {
        if ( css === 'flex-direction:row-reverse; justify-content: center; align-items: end;' || css === 'flex-direction:row-reverse justify-content: center align-items: end' )
        {
            alert( "Congrats you have cleared Level-10!!! You can proceed to the next level" )
            document.querySelector( '#next' ).disabled = false;
        }
        else
        {
            alert( 'Sorry! :( Try again' )
        }
    }
    else if ( level === "Level 11" )
    {
        if ( css === 'flex-wrap:wrap;' || css === 'flex-wrap:wrap' )
        {
            alert( "Congrats you have cleared Level-11!!! You can proceed to the next level" )
            document.querySelector( '#next' ).disabled = false;
        }
        else
        {
            alert( 'Sorry! :( Try again' )
        }
    }
    else if ( level === "Level 12" )
    {
        if ( css === 'flex-direction:column; flex-wrap:wrap;' || css === 'flex-direction:column flex-wrap:wrap' )
        {
            alert( "Congrats you have cleared Level-12!!! You can proceed to the next level" )
            document.querySelector( '#next' ).disabled = false;
        }
        else
        {
            alert( 'Sorry! :( Try again' )
        }
    }
    else if ( level === "Level 13" )
    {
        if ( css === 'flex-flow:column wrap;' || css === 'flex-flow:column wrap' )
        {
            alert( "Congrats you have cleared Level-13!!! You can proceed to the next level" )
            document.querySelector( '#next' ).disabled = false;
        }
        else
        {
            alert( 'Sorry! :( Try again' )
        }
    }
    else if ( level === "Level 14" )
    {
        if ( css === 'align-content:start;' || css === 'align-content:start' )
        {
            alert( "Congrats you have cleared Level-14!!! You can proceed to the next level" )
            document.querySelector( '#next' ).disabled = false;
        }
        else
        {
            alert( 'Sorry! :( Try again' )
        }
    }
    else if ( level === "Level 15" )
    {
        if ( css === 'flex-flow:column-reverse wrap-reverse; justify-content:center; align-content:space-between;' || css === 'flex-flow:column-reverse wrap-reverse justify-content:center align-content:space-between' )
        {
            alert( "Congrats you successfully cleared all levels :0 !!! " )
            document.querySelector( '#next' ).disabled = false;
        }
        else
        {
            alert( 'Sorry! :( Try again' )
        }
    }
}

buttonElement.addEventListener( 'click', addCSS )



// if ( css === 'justify-content:flex-end;' || css === 'justify-content:flex-end' )
// {
//     alert( "Congrats you have cleared Level-1!!! You can proceed to the next level" )
// } else
// {
//     alert( 'Sorry! :( Try again' )
// }