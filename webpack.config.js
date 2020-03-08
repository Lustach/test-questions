const path =require('path');
module.exports = {
   mode:'production',//development/production
   entry: './index.js',//отсюда стартуем, может быть объектом
//    entry:{
       
//    },
   output:{
       filename:'bundle.js',//единственный файл после сбора проекта
       path: path.resolve(__dirname,'dist')
   },//куда складывать результат работы 
}