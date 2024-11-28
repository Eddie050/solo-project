var images;


images = ['https://www.bing.com/images/search?view=detailV2&ccid=9C5wb42J&id=A807744D9EFFFFE7167D08173762B3FBE3DABAF8&thid=OIP.9C5wb42JEI9ZrnLRcdE3WAHaE7&mediaurl=https%3a%2f%2fa.cdn-hotels.com%2fgdcs%2fproduction37%2fd996%2fca2a82aa-2617-4fac-8e5d-94afa4324d5d.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.f42e706f8d89108f59ae72d171d13758%3frik%3d%252bLra4%252fuzYjcXCA%26pid%3dImgRaw%26r%3d0&exph=1066&expw=1600&q=cape+town&simid=607996292927600911&FORM=IRPRST&ck=89960CA26FA1F230D5599AC04AFA4801&selectedIndex=0&itb=0', 'https://www.bing.com/images/search?view=detailV2&ccid=aWlzKnZS&id=D1AD4ABEB4BB73F12550E6769858D177D0D29578&thid=OIP.aWlzKnZSZoO4AYb99vAgJQHaE8&mediaurl=https%3a%2f%2fcff2.earth.com%2fuploads%2f2007%2f11%2f09001502%2fcape-town-south-africa.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.6969732a76526683b80186fdf6f02025%3frik%3deJXS0HfRWJh25g%26pid%3dImgRaw%26r%3d0&exph=1672&expw=2508&q=cape+town&simid=608047952777721782&FORM=IRPRST&ck=4D869BFB6303B7716AD23D2A0969A498&selectedIndex=1&itb=0', 'https://www.bing.com/images/search?view=detailV2&ccid=6JyAcbUr&id=EED61B1EC65EAF6B6719A7BE9D0FABD9449CA5E4&thid=OIP.6JyAcbUrITnMON-3AjZJoQHaEo&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.e89c8071b52b2139cc38dfb7023649a1%3frik%3d5KWcRNmrD52%252bpw%26riu%3dhttp%253a%252f%252fbuzzsouthafrica.com%252fwp-content%252fuploads%252fthings-to-do-in-cape-town-featured.jpg%26ehk%3dyw%252b%252fns86L3iv3aiSo4ZgtKYlK5KyQ6cU3h4m3Td3GMQ%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1600&expw=2560&q=cape+town&simid=608013605928329516&FORM=IRPRST&ck=7D926D21DE0CAAD47B422E899EF391E7&selectedIndex=4&itb=0'];


document.getElementById('button').addEventListener('click', (event) => {
  images.forEach((images) => {
    let element_picture = document.getElementById('picture');
    let new_img = document.createElement('img');
    new_img.setAttribute("src", images);
    new_img.innerText = images;

    element_picture.appendChild(new_img);
  });

});
