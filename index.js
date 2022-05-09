const docx2html=require('./lib/docx2html')


let tagFn=(args,content)=>{
    console.log(args[0])
    content=docx2html(args[0]);
    return content;
}
hexo.extend.tag.register('docx',tagFn);
