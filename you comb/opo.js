function spiralOrder(matrix){
  var result=[];
  var left=0;
  var top=0;
  var right=matrix[0].length-1;
  var bottom=matrix.length-1;
    var direction = "down";
  while(left<=right&&top<=bottom){
    if(direction==="down"){
      for(var i=top;i<=bottom;i+=1){
        result.push(matrix[i][right]);
      }
      l+=1;
      direction="right";
    }
   
     if(direction==="right"){
      for(var i=left;i<=right;i+=1){
        result.push(matrix[top][i);
      }
      top+=1;
      direction="down";
    }
                                
   if(direction==="down"){
     
    
  
  
  
  
  
  
  return result;
}