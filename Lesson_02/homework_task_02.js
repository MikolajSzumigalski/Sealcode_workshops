// Add Date
var monthtab = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var daytab = ["Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday", "Sunday"];
var d = new Date();

$('div.calender').append(d.getDate()+ "<br />" + monthtab[d.getMonth()] + "<br />" + daytab[d.getDay()] + "<br />" + d.getFullYear());

//Tablica i obiekt do zadań 
var tasktab = [];
var taskobj = new Object();
var wsk = 0;

function usunZTablicy(side){
	tasktab.splice(side-1, 1);
	odswiezZadania();	
};

function odswiezZadania(){
    $usun = $('#listazadan').children().remove();
	wsk = 0;
	if(tasktab.length == 0)
	{
        $('#listazadan').append('<p id="pustyid">Nie masz żadnych zadań w tej chwili</p>');
	}
	else
	for(var i=0; i<tasktab.length; i++)
	{
		dodajZadanie(tasktab[i]);
	}
};

function dodajZadanieDoTablicy(){
	tasktab[tasktab.length] = new Object();
    $tekst = $("#newtask").val();
    $("#newtask").val("");
    $tekst = $tekst.split(' ').join(' ').charAt(0).toUpperCase() + $tekst.slice(1).split(' ').join(' ');
	if ($tekst == "")
	{
		alert("Nie możesz dodać pustego zadania");
	}
	else
	{
		var prawda = 1;
		var prawdaiter = 0;	
		while(prawda == 1 && prawdaiter < tasktab.length)
		{
            console.log(tasktab[prawdaiter].task);
			if($tekst == tasktab[prawdaiter].task)
			{	
				prawda = 0;
				console.log(prawda);
			}
			else
				prawdaiter++;
		}
		if(prawda == 1)
		{
			tasktab[tasktab.length-1].task = document.createTextNode($tekst); // treść zadania
			tasktab[tasktab.length-1].stat = -1; // status zadania - raczej nikt nie dodaje zrobionego więc dodajemy jako niezrobione -1 niezrobione, 1 zrobione
			dodajZadanie(tasktab[tasktab.length-1]);
		}
		else
			alert("Już posiadasz takie zadanie!");
	}
}
function zmienCheckBoxWTablicy(zadanie){
	zadanie.stat = -zadanie.stat;
}
function dodajZadanie(zadanie){
    console.log(zadanie.task);
    $listazadan= $('#listazadan');
    $('#pustyid').remove();
	zadanie.num = wsk+1;
    $listazadan.append('<p id='+'t'+wsk+'><input type="checkbox" value="spotify" id='+'c'+wsk+'>'+zadanie.task.textContent+'<input type="submit" value="Usuń" class="usun" id='+'d'+wsk+'></p>');
		if(zadanie.stat == -1)
			$('#c'+wsk).prop('checked', false);
		else
			$('#c'+wsk).prop('checked', true);
	document.getElementById('d'+ wsk).addEventListener('click', function() {usunZTablicy(zadanie.num)}, false);
	document.getElementById('c'+ wsk).addEventListener('click', function() {zmienCheckBoxWTablicy(zadanie)}, false);
	wsk++;
};
var ButtonNewTask = document.getElementById("taskbutton");
ButtonNewTask.addEventListener('click', dodajZadanieDoTablicy, false);