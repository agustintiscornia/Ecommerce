    const array = [
    { id: '1',product: 'Macbook pro', description: " MacBook Pro 16 M1 Pro 512 GB - Plateado", image:"https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png", price: 160000, }, 
    { id: '2', product: 'Huawei P30',description: "Huawei P30 Pro Dual Sim 256 Gb 8 Gb Ram Sellado", image:"https://static-geektopia.com/storage/t/i/644/64460/800_800_1551952340238.webp", price: 150000},
    { id: '3', product: 'OnePlus', description: "OnePlus Nord 2 5G - 128GB -", image:"https://http2.mlstatic.com/D_NQ_NP_778647-MLA48143863371_112021-V.jpg", price: 10000 },
    { id: '4', product: 'Samsung Tablet', description: "Galaxy Tab A8 10.5” Wi-Fi", image:"https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/csm_Samsung_Galaxy_Tab_S7_Plus_Lite_1_dd680cd850.jpg", price: 130000 },
    {id:  '5', product: 'Acer Laptop', description: "Notebook Acer Aspire 5 Intel I7 8gb Ram 512ssd Windows 11", image:"https://static.acer.com/up/Resource/Acer/Laptops/Porsche_Design_Acer_Book_RS/Images/20201012/Porsche-Design-Acer-Book-RS_AP714-51_modelmain.png", price: 10000 },
    {id:  '6', product: 'Iphone 13', descripcion: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1644969385433", price: 120000 },
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