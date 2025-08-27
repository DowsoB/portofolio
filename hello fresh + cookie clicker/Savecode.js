§§§§§§§§§§§§§§§§§§§§§§§


        let game = {
            money: 0,
            totalmoney: 0,
            totalclicks: 0,
            clickvalue: 1,
            version: 0.000,

            addtomoney: function (amount) {
                this.money += amount;
                this.totalmoney += amount;
                display.updatemoney()
            },

            
        };

        buildings = {
            name:[
                "slaves", "cats"
            ],
            Image: [
                "caveman.jpg", "Nolegs.jpg"
            ],
            count:[
                0, 0
            ],
            income:[
                5, 15
            ],
            cost:[
                10, 25
            ],

            purchase: function (index) {
                if (game.money >= this.cost[index]) {
                    game.money -= this.cost[index];
                    this.count[index]++;
                    this.cost[index] = Math.ceil(this.cost[index] * 1.10);
                    display.updatemoney();
                    display.updateshop();
                }
                
            }

        };

        let display = {
            updatemoney: function () {
                document.getElementById("money").innerHTML = game.money;
                document.getElementById("moneypersec").innerHTML = game.getmoneypersecond();
                document.title = game.score +" money";
            },

            updateshop: function() {
                document.getElementById("shopcontainer").innerHTML = "";
                for (let i = 0; i < buildings.name.length; i++) {
                    document.getElementById("shopcontainer").innerHTML += '<div class="boksshop"><img src="'+buildings.image[i]+'" id="cavesmol"> <div id="cul"><button onclick="buildings.purchase('+i+')">buy slave</button> <span>'+buildings.cost[i]+'</span><span>'+buildings.count[i]+'</span></div></div>';
                }
            }
            
        };

        window.onload = function() {
            display.updatemoney();
            display.updateshop();
        }



        §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

        let money = 0;

        let slavecost = 5;
        let slave = 0;
        let catcost = 15;
        let cat = 0;
        let eggcost = 100;
        let egg = 0;


        function button(){

            if (money >= 0) {
                money++
                document.getElementById("money").innerHTML = "Money: "+money;
            }
        }

        function buyslave(){
            if (money >= slavecost) {
                money = money - slavecost;
                slave++;
                slavecost = Math.round(slavecost * 1.15);

                document.getElementById("money").innerHTML = "Money: "+money;
                document.getElementById("slavecost").innerHTML = "Cost: "+slavecost;
                document.getElementById("slave").innerHTML = slave;
                updatemoneypersec();
            }
        }

        function buycat(){
            if (money >= catcost) {
                money = money - catcost;
                cat++;
                catcost = Math.round(catcost * 1.15);

                document.getElementById("money").innerHTML = "Money: "+money;
                document.getElementById("catcost").innerHTML = "Costs: "+catcost;
                document.getElementById("cat").innerHTML = cat;
                updatemoneypersec();
            }
        }

        function buyegg(){
            if (money >= eggcost) {
                money = money - eggcost;
                egg++;
                eggcost = Math.round(eggcost * 1.15);

                document.getElementById("money").innerHTML = "Money: "+money;
                document.getElementById("eggcost").innerHTML = "Costs: "+eggcost;
                document.getElementById("egg").innerHTML = egg;
                updatemoneypersec();
            }
        }

        function updatemoneypersec() {
            moneypersec = slave * 5 + cat * 15 + egg * 100
            document.getElementById("moneypersec").innerHTML = moneypersec + " krones per second";
        }

        function SaveGame() {
            let gameSave = {
                score: score,
                slavecost: slavecost,
                slave: slave,
                catcost: catcost,
                cat: cat

            };
            localStorage.setItem("gameSave", JSON.stringify(gameSave))
            
        }

        setInterval(function () {
            money = money + slave * 5
            money = money + cat * 15
            money = money + egg * 100
            document.getElementById("money").innerHTML = "Money: "+money;

            document.title = "You have "+money+" money"
        }, 1000)

        setInterval(function name(params) {
            SaveGame();
        }, 10000)

        |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

        <table class="shopbutton unselectable" onclick="buyslave()">
                <tr>
                    <td id="image"><img src="caveman.jpg" alt=""></td>
                    <td id="nameandcost">
                        <p>slaves</p>
                        <p><span id="slavecost">Costs: 5</span></p>
                    </td>
                    <td id="amount"><span id="slave">0</span></td>
                </tr>
            </table>
            <table class="shopbutton unselectable" onclick="buycat()">
                <tr>
                    <td id="image"><img src="Nolegs.jpg" alt=""></td>
                    <td id="nameandcost">
                        <p>Cats</p>
                        <p><span id="catcost">Costs: 15</span></p>
                    </td>
                    <td id="amount"><span id="cat">0</span></td>
                </tr>
            </table>
            <table class="shopbutton unselectable" onclick="buyegg()">
                <tr>
                    <td id="image"><img src="egg.png" alt=""></td>
                    <td id="nameandcost">
                        <p>Eggs</p>
                        <p><span id="eggcost">Costs: 100</span></p>
                    </td>
                    <td id="amount"><span id="egg">0</span></td>
                </tr>
            </table>
