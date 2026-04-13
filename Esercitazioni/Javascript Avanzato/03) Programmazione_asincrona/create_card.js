import { get_data } from "./get_data.js"

document.querySelector('#crea_card_btn').addEventListener('click', ()=> create_card())
document.querySelector('#cancella_btn').addEventListener('click', ()=> delete_all())

const create_card = async () => {
    const wrapper = document.querySelector('#wrapper');
    wrapper.innerHTML = "";

    const page_loader = document.querySelector('#page_loader')
    const crea_button = document.querySelector('#crea_card_btn')

    page_loader.classList.remove('d-none')
    crea_button.disabled = true
    await new Promise((resolve) => setTimeout(resolve, 2000));
    page_loader.classList.add('d-none')

    try{
        const data = await get_data()
        data.forEach(element => {
            const div = document.createElement('div')
            div.className = 'col-12 col-lg-6 col-xl-3'
            div.innerHTML = `        
                <div class="card mt-3 shadow">
                <img src="https://picsum.photos/id/${Math.floor(Math.random() * 20) + 1}/200/150" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title fs-3">${element.nome}</h5>
                        <p class="card-text text-primary fs-4">${element.categoria}</p>
                        <p class="card-text text-end fs-3 text-secondary">${(element.prezzo.toFixed(2))} €</p>
                        <a href="#" class="btn btn-primary">Vedi di più!</a>
                    </div>
                </div>        
            ` 
            wrapper.appendChild(div)
        })
    } finally {
        crea_button.disabled = false
    }
    
}

const delete_all = () => {
    const wrapper = document.querySelector('#wrapper');
    wrapper.innerHTML = "";
}
