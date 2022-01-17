var data = 
{
	id : "admin",
	pas : "admin",
	ip : "http://192.168.1.1/"
};
var designi =
{
	bk : "img/back.jpg",
	///for android: file:///android_res/drawable/back.jpg
	frn : "img/skydron.png"
	//for android: file:///android_res/drawable/skydron.png
}
var designd =
{
	bk : ".jpg",
	//for android: file:///android_res/drawable/back2.jpg
}
var dev =
{
	code : "DeveloperN",
	s : 3000,
	op : 1
    loc : "developer.html"
}
function showAndroidToast(toast){
	Android.showToast(toast);
}