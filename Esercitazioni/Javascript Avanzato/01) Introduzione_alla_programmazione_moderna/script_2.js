export function fun_1(ogg, lista){
    ogg.contatti = lista;
    return ogg
}

export function fun_2({ contatti }){
    return contatti.toString()
}