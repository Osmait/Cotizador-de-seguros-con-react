export const obtenerDiferenciaYear = (year)=>{
        return new Date().getFullYear()-year
}


export const calcularMarca = (marca) => {
    let ingremento

    switch (marca) {
        case "1":
            ingremento = 1.30
            break;
        case "2":
            ingremento= 1.15
        case "3":
            ingremento= 1.05
            break;
        default:
            break;
    }

    return ingremento
}


export const calcularPlan = (plan) =>{
    return (plan === "1") ? 1.20 :1.50
}

export const formatearDinero = (cantidad) =>{
    return cantidad.toLocaleString("en-US",{
        style:'currency',
        currency: "USD",
    });
}