window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
    faq.addEventListener('click', ()=>
    {
        faq.classList.toggle('open');
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus"
        }
        else{
            icon.className = "uil uil-plus"
        }
    })
})


const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

const closeNavButton = ()=> {
    menu.style.display = "flex";
    closeBtn.style.display = "none";
    menuBtn.style.display = "none";
}

const openNavButton = ()=> {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

const openNav = () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
}

menuBtn.addEventListener('click', openNav);

const closeNav = () => {
    menu.style.display ="none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);

window.addEventListener('resize', ()=> {

    if (window.innerWidth >= 1024){
        closeNavButton();
    }
    else {
        openNavButton();
    }

});

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

function checkAdmin()
{

    const checkbox = {
        'ViewAuditLog' : 128,
        'ManageServer' : 32,
        'ManageRoles': 268435456,
        'ManageChannels': 16,
        'KickMembers': 2,
        'BanMembers': 4,
        'CreateInstantInvite': 1,
        'ChangeNickname': 67108864,
        'ManageNicknames': 134217728,
        'ManageEmojisandStickers': 1073741824,
        'ManageWebhooks': 536870912,
        'ReadMessages/ViewChannels': 1024,
        'ManageEvents': 8589934592,
        'ModerateMembers': 1099511627776,
        'ViewServerInsights': 524288,
        'ViewCreatorMonetizationInsights': 2199023255552,
        'SendMessages': 2048,
        'CreatePublicThreads': 34359738368,
        'CreatePrivateThreads': 68719476736,
        'SendMessagesinThreads': 274877906944,
        'SendTTSMessages': 4096,
        'ManageMessages': 8192,
        'ManageThreads': 17179869184,
        'EmbedLinks': 16384,
        'AttachFiles': 3276,
        'ReadMessageHistory': 65536,
        'MentionEveryone': 131072,
        'UseExternalEmojis': 262144,
        'UseExternalStickers': 137438953472,
        'AddReactions': 64,
        'UseSlashCommands': 2147483648,
        'Connect': 1048576,
        'Speak': 2097152,
        'Video': 512,
        'MuteMembers': 4194304,
        'DeafenMembers': 8388608,
        'MoveMembers': 16777216,
        'UseVoiceActivity': 33554432,
        'PrioritySpeaker': 256,
        'RequestToSpeak': 4294967296,
        'UseEmbeddedActivities': 549755813888

    }

    var input = document.getElementById('linkInput');
    var link = document.getElementById('linkOpen');



    var adminCheck = document.getElementById('Administrator');

    if (adminCheck.checked)
    {
        for (const key in checkbox)
        {
            document.getElementById(`${key}`).checked = false;
            document.getElementById(`${key}`).setAttribute("disabled","");      
        }
        let linkInvite = "https://discord.com/api/oauth2/authorize?client_id=853525129057402921&permissions=8&scope=bot%20applications.commands";
        input.value = linkInvite;
        link.href = linkInvite;
    }
    else
    {
        let sum = 0;
        for (const key in checkbox)
            {
                let checkboxID = document.getElementById(`${key}`);
                

                checkboxID.removeAttribute("disabled");

                if (checkboxID.checked == true)
                {
                    sum += parseInt(checkbox[key]);
                }
               
            }
        let linkInvite = `https://discord.com/api/oauth2/authorize?client_id=853525129057402921&permissions=${sum}&scope=bot%20applications.commands`;
        input.value = linkInvite;
        link.href = linkInvite;
        
    }  

}