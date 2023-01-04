<script>
  import {
    add_flush_callback,
    exclude_internal_props,
    prevent_default,
  } from "svelte/internal";
  import { saveAs } from "file-saver";
  import * as XLSX from "xlsx/xlsx.mjs";

  let surveyList = [
    {
      id: 0,
      surveyName: "Quest4Change",
      surveyAuthor: "Aaron J. Goldstein",
      numQuestions: "4",
      creationDate: "10/27/2022",
      Questions: ["ID", "Age", "Likert1", "Likert2"],
      Entry: ["AJG", "22", "3", "5"],
    },
    {
      id: 1,
      surveyName: "Quest4Change2",
      surveyAuthor: "Carter Johnston ",
      numQuestions: "4",
      creationDate: "10/27/2022",
      Questions: ["ID", "Age", "Likert1", "Likert2"],
      Entry: ["CJ", "22", "3", "5"],
    },
    {
      id: 2,
      surveyName: "Quest4Change3",
      surveyAuthor: "Jacob Schipman",
      numQuestions: "4",
      creationDate: "10/27/2022",
      Questions: ["ID", "Age", "Likert1", "Likert2"],
      Entry: ["JAS", "22", "3", "5"],
    },
    {
      id: 3,
      surveyName: "Quest4Change4",
      surveyAuthor: "Dhori Mato",
      numQuestions: "4",
      creationDate: "10/27/2022",
      Questions: ["ID", "Age", "Likert1", "Likert2"],
      Entry: ["DM", "22", "3", "5"],
    },
  ];

  // function questionSplit(){
  //    for (index1 in surveyList.Survey){
  //     for(index2 in surveyList.Survey[index1].Questions){

  //         return surveyList.Survey[index1].Questions[index2];
  //     }
  //    }

  // }
  // function entrySplit(){
  //     for (index1 in surveyList.Survey){
  //         for(index2 in surveyList.Survey[index1].Entries){
  //             for(index3 in surveyList.Survey[index1].Entries[index2].Entry){
  //                 return surveyList.Survey[index1].Entries[index2].Entry[index3];
  //             }
  //         }
  //    }

  // }
  function Qslot(index) {
    let x = surveyList[index].Questions.length;
    let y = surveyList[index].Entry.length;
    console.log(y);
    var Header = [];
    var Responses = [];
    for (var i = 0; i < x; i++) {
      var j = surveyList[index].Questions[i];
      Header[i] = j;
    }

    for (var k = 0; k < y; k++) {
      var l = surveyList[index].Entry[k];
      Responses[k] = l;
      //var Responses = surveyList.map(row => ({Answer: l}));
    }
    const row = Object.entries(Header);
    console.log(typeof row);
    var top = surveyList.map((row) => ({ Question: Header.join(",") }));
    console.log(top);
    var worksheet = XLSX.utils.json_to_sheet(top);
    var workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Survey Results");
    return workbook;
  }

  function getValue(Header) {
    return Header.values;
  }

  function excelExport(index) {
    let x = index;
    XLSX.writeFile(Qslot(index), "" + surveyList[x].surveyName + ".xlsx", {
      compression: true,
    });
  }
  // function returnSurvey(index){
  //     for(var i = 0; i < surveyList.length; i++){
  //         if(index === surveyList[i].id){
  //             return surveyList[i];
  //         }
  //     }
  // }
  // var wb = XLSX.utils.book_new();
  // wb.Props = {
  //     Title: surveyList.surveyName,
  //     Subject: surveyList.surveyName,
  //     Author: surveyList.surveyAuthor,
  //     CreatedDate: surveyList.creationDate
  // };
  // var SN = surveyList.surveyName;
  // var QL = surveyList.Questions;
  // var E1 = surveyList.Entry1;
  // var wb = XLSX.utils.book_new();
  //         wb.Props = {
  //             Title: surveyList.surveyName,
  //              Subject: surveyList.surveyName,
  //              Author: surveyList.surveyAuthor,
  //             CreatedDate: surveyList.creationDate
  //             };
  //         wb.SheetNames.push("Survey Results");
  //         var ws_data1 = [[QL,E1]];
  //         var ws = XLSX.utils.aoa_to_sheet(ws_data1);
  //         wb.Sheets["Survey Results"] = ws;
  //         var wbout = XLSX.write(wb, {bookType:'xlsx', type: 'binary'});
  //         function s2ab(s){
  //             var buf = new ArrayBuffer(s.length);
  //             var view = new Uint8Array(buf);
  //             for(var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
  //             return buf;
  //         }

  //          function ExcelExport(){
  //             saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}),''+ SN + '.xlsx');
  //         }
</script>

<div class="ms-5 me-5 mt-2">
  <h1 class="header">Surveys ready to export</h1>
  <div class="container-fluid">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Creation Date</th>
          <th scope="col">Responses</th>
          <th scope="col">Responses</th>
          <th scope="col">Responses</th>
        </tr>
      </thead>
      <tbody>
        {#each surveyList as survey, index}
          <tr>
            <th scope="row"><input type="checkbox" /></th>
            <td>{survey.surveyName}</td>
            <td>{survey.surveyAuthor}</td>
            <td>{survey.creationDate}</td>
            <td>{survey.numQuestions}</td>
            <td><button class="btn btn-secondary">Download as Excel</button></td
            >
            <td><button class="btn btn-secondary">Download as PDF</button></td>
          </tr>
        {:else}
          <p>There are no existing surveys</p>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<!-- function Qslot(index){
  
  let x = surveyList[index].Questions.length;
  let y = surveyList[index].Entry.length;
  console.log(y);
  var Header = [];
  var Responses = [];
    for (var i = 0; i < x; i++){
        var j = surveyList[index].Questions[i];
        //Header = surveyList.map(row => ({Questions: j}));
        Header[i] = surveyList.map(row => ({Questions: j}));
    }
    
    for(var k = 0; k < y; k++){
        var l = surveyList[index].Entry[k];
        Responses[k] = surveyList.map(row => ({Answer: l}));
        Responses = surveyList.map(row => ({Answer: l}));
        console.log(l);
    }
    
    var worksheet = XLSX.utils.json_to_sheet(Header,Responses);
    var workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Survey Results");
    return workbook;
 } -->

<!-- <div>
    <button on:click = {returnSurvey(index)}>Click</button>
</div> -->
