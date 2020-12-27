
var height = 0;
var width = 0;
var lives = 3
var time = 20;




    function adjustScreen(){
        height = window.innerHeight
        width = window.innerWidth
    }

    function getRandomPosition(){

        adjustScreen()

            if(document.getElementById('fly')){

                document.getElementById('heart' + lives).src='img/empty_heart.png'
                document.getElementById('fly').remove();
                lives--

                if(lives === 0 ){
                    location.replace('gameOver.html')
                }
            }

            var posX = Math.floor(Math.random()*(width-200))
            var posY = Math.floor(Math.random()*(height-200))

            var fly = document.createElement('img')
            fly.src="img/mosca.png"
            fly.className = randomSize() + randomSide()
            fly.style.left = posX + 'px'
            fly.style.top= posY + 'px'
            fly.style.position = 'absolute'
            fly.id='fly'
            fly.style.width = '50px'
            fly.onclick = function killFly(){this.remove()}

            document.body.appendChild(fly)


    }

    function randomSize(){

        var size = Math.floor(Math.random()*3)

        switch (size){
            case 0:
                console.log(1)
                return 'fly1';
            case 1:
                console.log(2)
                return 'fly2';
            case 2:
                console.log(3)
                return 'fly3';
        }
    }

    function randomSide(){

    var side = Math.floor(Math.random()*2)

    switch (side){

        case 0:
            console.log(1)
            return ' sideA';
        case 1:
            console.log(2)
            return ' sideB';
    }
}

    var timer = setInterval( function(){
        time-=1;
        document.getElementById('time').innerHTML = 'Time Left: ' + time;

        if(time === 0){
            location.replace('Victory.html')
        }

    },1000)


