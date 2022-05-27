function navbar(){
   return `<div id="navbar">
    <div id="logo">
        <h2>Quora</h2>
    </div>
    <div id="pagelinks">
        <div><a href=""><i class="fa-solid fa-house fa-lg"></i></a></div>
        <div><a href=""><i class="fa-solid fa-list fa-lg"></i></a></div>
        <div><a href=""><i class="fa-solid fa-pen-to-square fa-lg"></i></i></a></div>
        <div><a href=""><i class="fa-solid fa-people-group fa-lg"></i></a></div>
        <div><a href=""><i class="fa-solid fa-bell fa-lg "></i></a></div>
    </div>
    <div id="searchAndAddQuestions">
        <div>
            <span><img src="https://img.icons8.com/ios-glyphs/20/CCCCCC/search--v1.png"/></span>
            <input type="text" placeholder="Search Quora">
        </div>
        <div class="bg-lightgrey hoverEffect">Try Quo...</div>
        <a  href="profile.html"><img class="round" src="https://qsf.cf2.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png"/></a>
        <a  href=""><img src="https://img.icons8.com/ios/30/000000/globe--v1.png"/></a>
        <div><a href="">Add Question</a>
            <i class="arrow down "></i></div>
    </div>
</div>`;
}
export default navbar;