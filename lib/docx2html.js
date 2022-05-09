
const fs=require('fs');
const path=require('path')

let docxPreview=fs.readFileSync(path.resolve(__dirname,'./docx-preview.min.js'));
const getDocxElement=(url)=>{
 
        let composeHtml=`<div id="docxcontainer"></div>
        <script src='https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js'/>
        <script src="https://unpkg.com/promise-polyfill/dist/polyfill.min.js"></script>
        <script src="https://unpkg.com/jszip/dist/jszip.min.js"></script>
      
        <script>${docxPreview}</script>
        <script>
        var xhr=new XMLHttpRequest();
        xhr.open('GET','${url}')
        xhr.responseType='blob'
        xhr.send();
        xhr.onreadystatechange=()=>{
            if(xhr.readyState==4&&xhr.status==200){
                console.log('getdata');
                var docData = xhr.response;
        
            docx.renderAsync(docData, document.getElementById("docxcontainer"))
            .then(x => console.log("docx: finished"));
            }
        }
        
        </script>
        `
       return composeHtml;
        

}

module.exports=getDocxElement;

