function searchCommands()
{
    let input, filter, table, tr, td, words;
    input = document.getElementById('inputCommands');
    filter = input.value.toUpperCase();
    table = document.getElementById('commandsTable');
    tr = table.getElementsByTagName("tr");
    
    for (let i=0; i<tr.length; i++)
    {
        td = tr[i].getElementsByTagName('td')[0];
        
        if (td)
        {
            words = td.textContent || td.innerText;
            if (words.toUpperCase().indexOf(filter) > -1)
            {
                tr[i].style.display = "";
            }
            else
            {
                tr[i].style.display = "none";
            }
        }

    }
}

function searchSlashCommands()
{
    let input, filter, table, tr, td, words;
    input = document.getElementById('inputSlashCommands');
    filter = input.value.toUpperCase();
    table = document.getElementById('slashcommandsTable');
    tr = table.getElementsByTagName("tr");
    
    for (let i=0; i<tr.length; i++)
    {
        td = tr[i].getElementsByTagName('td')[0];
        
        if (td)
        {
            words = td.textContent || td.innerText;
            if (words.toUpperCase().indexOf(filter) > -1)
            {
                tr[i].style.display = "";
            }
            else
            {
                tr[i].style.display = "none";
            }
        }

    }
}