import "./Slide.css";
function Slide(){
    return (
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://static.wixstatic.com/media/b1081b44801546e0b25bb0261591fb76.jpg/v1/crop/x_0,y_1046,w_5760,h_1749/fill/w_1848,h_561,al_c,q_85,usm_0.66_1.00_0.01/b1081b44801546e0b25bb0261591fb76.jpg" class="image" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://portal.marriott.com/tyoys-yokohama-bay-sheraton-hotel-and-towers-dining/resourcefiles/home-main-images/sheraton-yokohama-seasonal-menu.jpg?version=7142022112128" class="image" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://th.bing.com/th/id/R.dd1952465d91b4e03d141ae032a5d980?rik=lkpZQPLIZc4Pbw&riu=http%3a%2f%2fcdn.ikyu.com%2fcontents%2fdg%2fguide%2facc9%2f00001469%2fimg%2fh_1.jpg&ehk=SduZGRjMk2eAgwQ3y%2fl%2b%2fRjtymn%2b3mcG8Jb%2bKKtgG3I%3d&risl=&pid=ImgRaw&r=0" class="image" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
}
export default Slide;