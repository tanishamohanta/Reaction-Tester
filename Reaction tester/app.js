var start = new Date().getTime();

        function makeShapeAppear() {

            document.getElementById("shape").style.display = "block" ;
       
            start = new Date().getTime();
        }

        function getRandomColour() {
            var letters = '0123456789ABCDE'.split('');
            var color = '#' ;
            for(var i = 0; i< 6 ; i++) {
                color += letters[Math.floor(Math.random()*15)];
            }
            return color;
        }

        function appearAfterDelay() {
        
            var top = Math.random() * 500;
            var left = Math.random() * 500;
            var width = (Math.random() * 250) +50;
            var col = getRandomColour();

        document.getElementById("shape").style.backgroundColor = col;
        document.getElementById("shape").style.top = top + "px";
        document.getElementById("shape").style.left = left + "px";
        document.getElementById("shape").style.width = width + "px";
        document.getElementById("shape").style.height = width + "px";

        setTimeout(makeShapeAppear, Math.random() + 1000 ) ;
        
        }

        appearAfterDelay()

        document.getElementById("shape").onclick = function() {

            document.getElementById("shape").style.display = "none";

            var end = new Date().getTime();

            var timeTaken = (end - start)/1000 ;
        
            document.getElementById("timetaken").innerHTML = timeTaken + "s"; 

            appearAfterDelay();
        }