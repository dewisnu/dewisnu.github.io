class Footer extends HTMLElement {
    connectedCallback() {

        this.innerHTML += `    
        <style>
        .foot{
            height: 10em;
            padding: 2% 2% 2% 5%;
            background-color: #011627;
            color:  #ffbe0b ;
        }
        .foot p{
            font-size: 0.8em;
        }
        .foot p:hover, .foot h1:hover{
            color: white;
            transition: 0.3s;
            cursor: default;
        }

        </style>
    <div class="foot sticky-bottom">
        <h1>movie.com</h1>
        <p>Search a movies here </p>
    </div>`;
    }
}
customElements.define("foot-er", Footer)