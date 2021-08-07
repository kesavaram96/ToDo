	function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var q=document.getElementById("todo_row"+no);
 var w=document.getElementById("Desc_row"+no);
	
 var q_data=q.innerHTML;
 var w_data=w.innerHTML;

	
 q.innerHTML="<input type='text' id='q_text"+no+"' value='"+q_data+"'>";
 w.innerHTML="<input type='text' id='w_text"+no+"' value='"+w_data+"'>";

}

function save_row(no)
{
 var x=document.getElementById("q_text"+no).value;
 var y=document.getElementById("w_text"+no).value;

 document.getElementById("todo_row"+no).innerHTML=x;
 document.getElementById("Desc_row"+no).innerHTML=y;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";

 alert("Item saved, ToDo: "+ x);
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
 alert("Sucessfully Deleted")
}

function add_row()
{
 var todoTitle=document.getElementById("todoTitle").value;
 var todoDescription=document.getElementById("todoDescription").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='todo_row"+table_len+"'>"+todoTitle+"</td><td id='Desc_row"+table_len+"'>"+todoDescription+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit btn btn-warning' onclick='edit_row("+table_len+")'></td><td> <input type='button' id='save_button"+table_len+"' value='Save' class='save btn btn-primary' onclick='save_row("+table_len+")'></td><td> <input type='button' value='Delete' class='delete btn btn-danger' onclick='delete_row("+table_len+")'></tr>";

 document.getElementById("todoTitle").value="";
 document.getElementById("todoDescription").value="";

 alert("Sucessfully added : "+todoTitle+" Descrption: "+todoDescription
 	);

 
}