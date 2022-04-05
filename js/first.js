
let exploresection =$("#explore").offset().top;
$(window).scroll(function()
{
  let myscroll =$(window).scrollTop();


  if(myscroll>exploresection)
  {
    $(".navbar").css('background-color', '#000000');
    $(".navbar a").css('color', '#fff');
    $(".scrolltopbtn").fadeIn(1000);

  }
  else
  {
    $(".navbar a").css('color', '#000');
    $(".navbar").css('background-color', '#fff');
    $(".scrolltopbtn").fadeOut(1000);
  }
})

$(".scrolltopbtn").click(function()
{
  $("html,body").animate({scrollTop:"0"},500)
})



$(".navbar a").click(function()
{
  let attrref =$(this).attr("href");
  console.log(attrref);
  let sectionoffset=$(attrref).offset().top;
  $("html,body").animate({scrollTop:sectionoffset},500)
});





