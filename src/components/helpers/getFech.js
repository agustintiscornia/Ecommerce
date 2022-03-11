    const array = [
    { id: '1',title:"Vixis", producto: 'remera',imagen:"http://www.rhysto.com.ar/productos/remeras1.jpg", talle: ' talle:M' },
    { id: '2',title:"Vixis", producto: 'pantalon',imagen:"http://yale.devandtest.net/image/cache/catalog/collection/jeans/01-0853-0692-14-200x200.jpg", talle: 'talle:L'},
    { id: '3',title:"Vixis", producto: 'campera', imagen:"https://www.nakaoutdoors.com.ar/img/articulos/marmot_venus_jacket_thumb1.jpg",talle: 'talle:L' },
    ];

    export const getFetch = new Promise((resolve, reject) => {
    let url = 'Vixis.com'
    if (url === 'Vixis.com') {
        setTimeout(()=>{
        resolve(array);
        },2000)
    } else {
        reject('404 error');
    }
    })

