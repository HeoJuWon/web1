var Links={
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i=0;
    // while(i < alist.length){
    //   alist[i].style.color=color;
    //   i=i+1;
    // }
    $('a').css('color',color);
  }
}

var Body = {
  setColor:function(color){
    // var target = document.querySelector('body');
    // target.style.color =color;
    $('body').css('color', color);
  },
  setBackgroundColor:function(color){
    // var target = document.querySelector('body');
    // target.style.backgroundColor =color;
    $('body').css('backgroundColor',color);
  }
}

function nightDayHandler(self){

    if(self.value === 'night'){
      Body.setColor('white');
      Body.setBackgroundColor('black');
      self.value = 'day';

      Links.setColor('powderblue');
    }else{
      Body.setColor('black');
      Body.setBackgroundColor('white');
      self.value ='night';

      Links.setColor('tomato');
    }
}
