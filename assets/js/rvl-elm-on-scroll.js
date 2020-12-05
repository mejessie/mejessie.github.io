let checkScrollY = function(scrollScore, contentName){
    for(let i = 0; i < contentName.length; i++){
      console.log(i);
      if(window.scrollY>=scrollScore[i]){
        document.getElementById(contentName[i]).style.opacity = '1';
      }
      else if(window.scrollY<1){
        document.getElementById(contentName[i]).style.opacity = '0';
      }
    }
  }
  window.onload = function(){
    function effect(){
      checkScrollY(scrollScore,contentName);
    }
    window.addEventListener('scroll',effect);
    effect();
  }
  var contentName = ['about-text','about-note'];
  var scrollScore = [200,200]; //10 20 30 40