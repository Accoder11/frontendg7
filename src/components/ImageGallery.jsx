import React from 'react'

function ImageGallery() {
  return (
    <div>
        <div className="container">
          <h2 className="section-header">Food Recipes</h2>
          <div className="main-content">
            <div className="box">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrC0BFg_daS8zjFM0uHWWRaDNTwKn-M_Xn-gOIYlsTCvaoCFyaQmciONZeTKUg7kD944w&usqp=CAU" alt="" />
              <div className="img-text">
                <div className="content">
                  <h2>Pork Sisig</h2>
                  <p>Pork sisig is a popular Filipino dish. It is composed of minced pork, chopped onion, and chicken liver. It is a favorite dish for pulutan.</p>
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn4OV2HGXnUgokhujx8qz2_W_kG-gW3pfPkg&usqp=CAU" alt="" />
              <div className="img-text">
                <div className="content">
                  <h2>Bulalo</h2>
                  <p>It is a light colored soup that is made by cooking beef shanks and bone marrow until the collagen and fat has been melted into the clear broth.</p>
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://whisk-res.cloudinary.com/image/upload/g_auto,g_auto,c_fill,q_60,f_auto,h_600,w_800/v1613776857/recipe/150c38772e9757290ce7707150c2c906.jpg" alt="" />
              <div className="img-text">
                <div className="content">
                  <h2>Crispy Chicken Livers a la Bistek</h2>
                  <p>If you love the tangy-salty taste of our Filipino beef steak, then this budget-friendly version should be on your menu rotation.</p>
                </div>
              </div>
            </div>

            <div className="box">
              <img src="http://images.summitmedia-digital.com/yummyph/images/2017/11/23/beef-kaldereta.jpg" alt="" />
              <div className="img-text">
                <div className="content">
                  <h2>Beef Kaldereta</h2>
                  <p>Beef Caldereta is simmered to tenderness in a spicy tomato sauce. this classic Filipino stew is hearty, tasty, and perfect for family dinners or special occasions.</p>
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://www.savingdessert.com/wp-content/uploads/2022/04/Mushroom-Sauce-for-Steaks-5.jpg" alt="" />
              <div className="img-text">
                <div className="content">
                  <h2>Beef in Creamy Mushroom Sauce</h2>
                  <p>This Beef in Creamy Mushroom Sauce is easy to make and cooks in one pan!</p>
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://res.cloudinary.com/hksqkdlah/image/upload/SFS_SlowCookerAdoboBraisedBeef-79_dlxjnp.jpg" alt="" />
              <div className="img-text">
                <div className="content">
                  <h2>Adobo-Braised Beef</h2>
                  <p>Adobo-braised beef—with its intensely flavored, glossy, mahogany sauce and its hunks of tender, juicy meat—might be the pinnacle of Tex-Mex cooking.</p>
                </div>
              </div>
            </div>

            <div className="box">
              <img src="http://1.bp.blogspot.com/-aKDtr3h7HNg/TbrNWJh1OxI/AAAAAAAAAR0/4wJ0xHxYHjA/s1600/hinalang.JPG" alt="" />
              <div className="img-text">
                <div className="content">
                  <h2>Beef Halang-halang</h2>
                  <p>From the Visayan word "Halang" means Hot or Spicy derived this popular soup dish close to Nilagang Baka, "Hinalang."</p>
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://nutrition.ph/wp-content/uploads/2019/06/tinolang-manok.jpg" alt="" />
              <div className="img-text">
                <div className="content">
                  <h2>Tinolang Manok</h2>
                  <p>Tinolang Manok is a great tasting and healthy dish to prepare for your family. It is easy to cook and friendly on the budget.</p>
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://www.pinoyrecipe.net/wp-content/uploads/2013/04/Recipe-of-Camaron-Rebosado.jpg" alt="" />
              <div className="img-text">
                <div className="content">
                  <h2>Camaron rebosado</h2>
                  <p>Camaron Rebosado (translated in English as Overflowed Shrimp) is an easy seafood dish that makes use of shrimps as the primary component.</p>                 
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://i.ytimg.com/vi/zYGQuJTvO7A/maxresdefault.jpg" alt="" />
              <div className="img-text">
                <div className="content">
                  <h2>Deep-Fried Battered Fatback</h2>
                  <p>his recipe showcases it on its own, dredged in flour and fried. ... It's also called fatback, side meat, white meat, and just plain salt.</p>                                                 
                </div>
              </div>
            </div><div className="box">
              <img src="data:image/jpeg;base64,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" alt="" />
              <div className="img-text">
                <div className="content">
                  <h2>Lechon Kawali Bicol Express</h2>
                  <p>Crispy Bicol Express is one of my favorite versions of Bicol Express. This involves making crispy lechon kawali out of pork belly.</p>                                   
                </div>
              </div>
            </div>
            <div className="box">
              <img src="https://cdn.phonebooky.com/blog/wp-content/uploads/2019/09/13140031/Ricos.jpg" alt="" />
              <div className="img-text">
                <div className="content">
                  <h2>Lechon</h2>
                  <p>Apart from the Philippines, the dish is especially popular in countries such as Cuba, Puerto Rico, the Dominican Republic, and Spain.</p>                  
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default ImageGallery