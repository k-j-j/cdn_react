function Sample(){
        return(
               <>
                  <SkipComponent/>
                  <WrapComponent/>
               </>
        )
}

// Skip
class SkipComponent extends React.Component {
    render() {
        return (
            <>
                <ul className="skip">
                    <li><a href="#main_image">콘텐츠바로가기</a></li>
                </ul>
            </>
        );
    }
}

// Wrap
class WrapComponent extends React.Component {
    render() {
        return (
            <>

                    <MainComponent/>

            </>
        );
    }
}

	
	// main
class MainComponent extends React.Component {
    render() {
        return (
            <>
			
            <h1><a href="#">ROMANSON</a></h1>
    <ul id="menu">
        <li class="on"><a href="#">COLLECTION</a></li>
        <li><a href="#">BRAND</a></li>
        <li><a href="#">PRODUCT</a></li>
        <li><a href="#">CONTACT</a></li>
    </ul>   

    <div id="wrap">
       <section>
            <article>
               <p>ROMANSON</p>
               <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
            </article>
       </section>

       <section>
        <article>
           <p>BE COLORFUL</p>
           <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
        </article>
       </section>

       <section>
        <article>
           <p>TIME ON BOARD</p>
           <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
        </article>
       </section>

       <section>
        <article>
           <p>SHINY ADDICT</p>
           <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
        </article>
       </section>

    </div>
			
			
		   </>
        );
    }
}

	
	ReactDOM.render(
        <Sample/>,
        document.getElementById("root")
);
	