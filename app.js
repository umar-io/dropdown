const year = new Date().getFullYear();


const btn = document.querySelector('.view')
const viewEffect = document.querySelector('.viewEffect')
const viewEffectResult = document.querySelector('.viewEffectResult').classList

btn.addEventListener('click', function(){
     viewEffect.toggle = ('rotateEffect')
     viewEffect.src = "up-arrow.png";
     viewEffectResult.toggle('showEffect')
})