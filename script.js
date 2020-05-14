$(document).ready(function() {

$.getJSON("https://spreadsheets.google.com/feeds/list/1E5xEdEO2JAY27zf509vVTJmpdGJ9teYklb6ch0HnzFs/1/public/values?alt=json", function (data) {

    let sheetData = data.feed.entry;

    let i;
    for (i = 0; i < sheetData.length; i++) {

      let student_Name = data.feed.entry[i]['gsx$_cn6ca']['$t'],
            gender = data.feed.entry[i]['gsx$_cokwr']['$t'],
            class_Level = data.feed.entry[i]['gsx$_cpzh4']['$t'],
            home_State = data.feed.entry[i]['gsx$_cre1l']['$t'],
            major = data.feed.entry[i]['gsx$_chk2m']['$t'],
            extracurricular_Activity = data.feed.entry[i]['gsx$_ciyn3']['$t'];

      let tableData = document.querySelector('#demo');
      tableData.innerHTML += 
      (`<tr><td>${student_Name}</td><td>${gender}</td><td>${class_Level}</td><td>${home_State}</td><td>${major}</td><td>${extracurricular_Activity}</td></tr>`);
    //   ('<tr>'+'<td>'+student_Name+'</td>'+'<td>'+gender+'</td>'+'<td>'+class_Level+'</td>'+'<td>'+home_State+'</td>'+'<td>'+major+'</td>'+'<td>'+extracurricular_Activity+'</td>'+'</tr>');
    }

    // Add Pagination
    $('#example').DataTable();
    $('.dataTables_length').addClass('bs-select');

  });

} );