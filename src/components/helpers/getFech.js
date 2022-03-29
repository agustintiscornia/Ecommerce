    const array = [
    { id: '1',title:"Vixis", producto: 'remera', descripcion: " Remera de máxima calidad, 100 % algodón,con cuello redondo y unico color", imagen:"http://www.rhysto.com.ar/productos/remeras1.jpg", talle: ' talle:M', precio: 2000, }, 
    { id: '2',title:"Vixis", producto: 'pantalon',descripcion: "pantalon de jean, tiro bajo y eslastizado", imagen:"http://yale.devandtest.net/image/cache/catalog/collection/jeans/01-0853-0692-14-200x200.jpg", talle: 'talle:L', precio: 2000},
    { id: '3',title:"Vixis", producto: 'campera', descripcion: "campera de cuero, con polar en su interior", imagen:"https://www.nakaoutdoors.com.ar/img/articulos/marmot_venus_jacket_thumb1.jpg",talle: 'talle:L', precio: 4000 },
    ];

    export const getFetch = new Promise((resolve, reject) => {
    
    if (array!==[]) {
        setTimeout(()=>{
        resolve(array);
        },2000)
    } else {
        reject('404 error');
    }
    })


    