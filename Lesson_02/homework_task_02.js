// Add Date
var monthtab = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var daytab = ["Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday", "Sunday"];
var d = new Date();

$('div.calender').append(d.getDate()+ "<br />" + monthtab[d.getMonth()] + "<br />" + daytab[d.getDay()] + "<br />" + d.getFullYear());

//Tablica i obiekt do zadań 
var tasktab = [];
var taskobj = new Object();
var wsk = 0;
function usunZadanie(task){
	var removeElement = document.getElementById(task);
	var containerElement = removeElement.parentNode;
	console.log(containerElement);
	containerElement.removeChild(removeElement);
};

function usunZTablicy(side){
	tasktab.splice(side-1, 1);
	odswiezZadania();	
};

function odswiezZadania(){
	var listaodswiez = document.getElementById("listazadan");
	while (listaodswiez.hasChildNodes()) { 
	listaodswiez.removeChild(listaodswiez.lastChild);
}
	wsk = 0;
	if(tasktab.length == 0)
	{
		var pustyTask = document.createElement('p');
		pustyTask.appendChild(document.createTextNode("Nie masz żadnych zadań w tej chwili"));
		pustyTask.setAttribute('id', 'pustyid');
		listazadan.appendChild(pustyTask);
	}
	else
	for(var i=0; i<tasktab.length; i++)
	{
		dodajZadanie(tasktab[i]);
	}
};

function dodajZadanieDoTablicy(){
	tasktab[tasktab.length] = new Object();
	var tekst = document.getElementById("newtask").value.trim("");
	document.getElementById("newtask").value = "";
    tekst = tekst.split(' ').join(' ').charAt(0).toUpperCase() + tekst.slice(1).split(' ').join(' ')
	if (tekst == "")
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
			if(tekst == tasktab[prawdaiter].task)
			{	
				prawda = 0;
				console.log(prawda);
			}
			else
				prawdaiter++;
		}
		if(prawda == 1)
		{
			tasktab[tasktab.length-1].task = document.createTextNode(tekst); // treść zadania
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
    console.log(zadanie);
	var listazadan = document.getElementById("listazadan"); //listazadan jest "rodzicem" naszych zadań
	if(document.getElementById("pustyid"))
		listazadan.removeChild(listazadan.lastChild);
	var newTask = document.createElement('p'); // tworzymy zadanie
	zadanie.num = wsk+1;	
		var newCheckBox = document.createElement('input');
		newCheckBox.setAttribute('type', 'checkbox'); //nadawanie atrybutu type
		newCheckBox.setAttribute('value', 'spotify'); //nadawanie atrybutu value
		newCheckBox.setAttribute('id', 'c'+ wsk);
		if(zadanie.stat == -1)
			newCheckBox.checked = false;
		else
			newCheckBox.checked = true;
		var newDeleteButton = document.createElement('input');
		newDeleteButton.setAttribute('type', 'submit'); //nadawanie atrybutu type
		newDeleteButton.setAttribute('value', 'Usuń'); //nadawanie atrybutu value
		newDeleteButton.setAttribute('class', 'usun'); //nadawanie atrybutu class
		newDeleteButton.setAttribute('id', 'd'+ wsk);
		
	newTask.setAttribute('id', 't'+ wsk ); //nadawanie id np. t1, t2 itd.
	newTask.appendChild(newCheckBox); //dodawanie checkboxa do zadania
	newTask.appendChild(zadanie.task); //dodawanie treści zadaniu
	newTask.appendChild(newDeleteButton); //dodawanie usuwającego guzika
	listazadan.appendChild(newTask); // przypisanie dziecka rodzicowi (newTask -> listazadan)
	document.getElementById('d'+ wsk).addEventListener('click', function() {usunZTablicy(zadanie.num)}, false);
	document.getElementById('c'+ wsk).addEventListener('click', function() {zmienCheckBoxWTablicy(zadanie)}, false);
	wsk++;
};
var ButtonNewTask = document.getElementById("taskbutton");
ButtonNewTask.addEventListener('click', dodajZadanieDoTablicy, false);