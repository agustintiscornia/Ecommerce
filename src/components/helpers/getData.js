    const array = [
    { id: '1',producto: 'Macbook pro', descripcion: " MacBook Pro 16 M1 Pro 512 GB - Plateado", imagen:"https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png", precio: 160000, }, 
    { id: '2', producto: 'Huawei P30',descripcion: "Huawei P30 Pro Dual Sim 256 Gb 8 Gb Ram Sellado", imagen:"https://static-geektopia.com/storage/t/i/644/64460/800_800_1551952340238.webp", precio: 150000},
    { id: '3', producto: 'OnePlus', descripcion: "OnePlus Nord 2 5G - 128GB -", imagen:"https://http2.mlstatic.com/D_NQ_NP_778647-MLA48143863371_112021-V.jpg",talle: 'talle:L', precio: 10000 },
    { id: '4', producto: 'Samsung Tablet', descripcion: "Galaxy Tab A8 10.5” Wi-Fi", imagen:"https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/csm_Samsung_Galaxy_Tab_S7_Plus_Lite_1_dd680cd850.jpg", precio: 130000 },
    {id:  '5', producto: 'Acer Laptop', descripcion: "Notebook Acer Aspire 5 Intel I7 8gb Ram 512ssd Windows 11", imagen:"https://m.media-amazon.com/images/I/71+2H96GHZL._AC_SX450_.jpg", precio: 10000 },
    {id:  '6', producto: 'Iphone 13', descripcion: "Iphone 13 de ultima generacion con 128g", imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPuI11rSrZ86L75zERVPsWSaEHBfFX3kbIQ&usqp=CAU", precio: 120000 },
    ];

    const getData = new Promise((resolve, reject) => {
    
    if (array!==[]) {
        setTimeout(()=>{
        resolve(array);
        },2000)
    } else {
        reject('404 error');
    }
    })


    export default getData